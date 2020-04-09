import React from 'react';
import { Image, Menu, Form, Input, Button } from 'semantic-ui-react';
import Link from 'next/link';
import styles from './HeaderNav.module.scss';
import firebase from 'firebase/app'
import 'firebase/auth';

const SignOutButton = () => (
  <Button color="orange" type="button" onClick={() => firebase.auth().signOut()}>
    Sign Out
  </Button>
);

const SignedInComponent = (
  <Menu.Item name="signout">
    <SignOutButton/>
  </Menu.Item>
)

const SignedOutComponent = (
  <Menu.Item name="avatar">
    <a href="/signin">
      Sign In
    </a>
  </Menu.Item>
)

const AccountComponent = (
  <Menu.Item name="avatar">
    <a href="/account">
      Account
    </a>
  </Menu.Item>
)

const AdminComponent = (
  <Menu.Item name="avatar">
    <a href="/admin">
      Admin
    </a>
  </Menu.Item>
)

const HeaderNav = (props: any) => {
  let user
  if (typeof window === 'undefined') {
    if (props.AuthUserInfo?.AuthUser) {
      user = (props.AuthUserInfo?.AuthUser)
    }
  } else {
    const user64 = localStorage.getItem('user')
    const userClient = JSON.parse(atob(user64 ? user64 : btoa("{}")))
    if (userClient.AuthUser) {
      user = (userClient.AuthUser)
    }
  }

  return (
    <Menu borderless className="top-menu" fixed="top">
      <Menu.Item header className={styles.logo}>
        <Link href="/">
          <a>
            <Image src='/assets/logo.png' size="tiny" />
          </a>
        </Link>
      </Menu.Item>

      <Menu.Menu className={styles.container}>
        <Menu.Item className={styles.input}>
          <Form>
            <Form.Field>
              <Input placeholder="Search" size="small" action="Go" />
            </Form.Field>
          </Form>
        </Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Menu.Item name="features">Features</Menu.Item>
        <Menu.Item name="services">Services</Menu.Item>
        <Menu.Item name="donations">Raise Donations</Menu.Item>
        {user ? "ADMIN" in user.roles ? AdminComponent : AccountComponent : null}
        {user ? SignedInComponent : SignedOutComponent}
      </Menu.Menu>
    </Menu>
  );
}


export default HeaderNav;