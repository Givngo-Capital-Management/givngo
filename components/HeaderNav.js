import React from 'react';
import { Image, Menu, Form, Input } from 'semantic-ui-react';
import Link from 'next/link';
import logo from '../assets/images/logo.png';
import './HeaderNav.scss';

export default function HeaderNav() {
  return (
    <Menu borderless className="top-menu" fixed="top">
      <Menu.Item header className="logo">
        <Link href="/home">
          <a href="/home">
            <Image src={logo} size="tiny" />
          </a>
        </Link>
      </Menu.Item>

      <Menu.Menu className="nav-container">
        <Menu.Item className="search-input">
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
        <Menu.Item name="avatar">
          <Image src="http://via.placeholder.com/80x80" avatar />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
