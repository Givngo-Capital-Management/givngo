import React from 'react';
import { Image, Menu, Form, Input, Button } from 'semantic-ui-react';
import Link from 'next/link';
import styles from './HeaderNav.module.scss';
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const SignOutButtonBase = (props: any) => (
  <Button color="orange" type="button" onClick={() => firebase.auth().signOut()}>
    Sign Out
  </Button>
);

const SignOutButton = (SignOutButtonBase);

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

export default function HeaderNav(props: any) {
  const authUser = firebase.auth().currentUser;
  return (
    <Menu borderless className="top-menu" fixed="top">
      <Menu.Item header className={styles.logo}>
        <Link href="/">
          <a href="/">
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
        {authUser ? SignedInComponent : SignedOutComponent}
      </Menu.Menu>
    </Menu>
  );
}
