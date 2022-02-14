import Link from "next/link";
import { Layout } from "antd";
import { useState } from "react";
import clsx from "clsx";

import { Menu, Typography, Avatar, Space, Radio, Button, Drawer } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuOutlined,
  CloseOutlined,
  userOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Title } = Typography;

function SiderMain({ styles }) {
  const [visibleDrawer, setVisibleDrawer] = useState({
    visible: false,
    placement: "left",
  });

  const showDrawer = () => {
    setVisibleDrawer({
      visible: true,
    });
  };

  const onClose = () => {
    setVisibleDrawer({
      visible: false,
    });
  };

  const handleClickIconClose = () => {
    setVisibleDrawer({
      visible: false,
    });
  };

  return (
    <>
      <Sider width={200} theme="dark" className={clsx(styles.sider)}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1">
            Dashboard
            <span style={{ float: "right" }} className={clsx(styles.close)}>
              <CloseOutlined />
            </span>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="About">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Contact">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="Detail">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      {/* drawer */}
      <div className={clsx(styles.sider_icon)}>
        <Space>
          <Button
            type="primary"
            onClick={showDrawer}
            styles={{ margin: "10px" }}
          >
            <MenuOutlined />
          </Button>
        </Space>
      </div>
      <Drawer
        // title="Basic Drawer"
        placement={"left"}
        closable={false}
        width={200}
        onClose={onClose}
        visible={visibleDrawer.visible}
        key={visibleDrawer.placement}
        styles={{ padding: 0 }}
      >
        <Sider width={200} theme="dark">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="1">
              Dashboard
              <span
                style={{ float: "right" }}
                className={clsx(styles.close)}
                onClick={handleClickIconClose}
              >
                <CloseOutlined />
              </span>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="About">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Contact">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Detail">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </Drawer>
    </>
  );
}

export default SiderMain;
