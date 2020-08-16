import React from 'react';
import { Menu } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home" icon={<BookOutlined />}>
          Todo App
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
