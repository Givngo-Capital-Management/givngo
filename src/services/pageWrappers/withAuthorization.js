/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react'
import { AuthUserInfoContext } from '../auth/hooks'
import { get } from 'lodash/object'

export default condition => ComposedComponent => {
  const WithAuthorizationComp = props => {
    const { AuthUserInfo: AuthUserInfoFromSession, ...otherProps } = props
    return (
      <AuthUserInfoContext.Consumer>
        {AuthUserInfo => (
          <ComposedComponent
            {...otherProps}
            AuthUserInfo={AuthUserInfo || AuthUserInfoFromSession}
          />
        )}
      </AuthUserInfoContext.Consumer>
    )
  }

  WithAuthorizationComp.getInitialProps = async ctx => {
    if (typeof window === 'undefined') {
      const AuthUserInfo = get(ctx, 'Givngo.AuthUserInfo', null)

      if (!condition(AuthUserInfo.AuthUser)) {
        ctx.res.writeHead(302, { Location: '/signin' })
        ctx.res.end()
        return;
      }
    }

    let composedInitialProps = {}
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx)
    }

    return {
      ...composedInitialProps,
    }
  }

  WithAuthorizationComp.displayName = `WithAuthorizationComp(${ComposedComponent.displayName})`

  return WithAuthorizationComp
}