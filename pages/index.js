import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Nav from "./layout/header";
import SiderMain from "./layout/sider";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

import { Layout, Menu, Breadcrumb, Typography, Modal } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Title } = Typography;

export default function Home() {
  return (
    <Layout>
      <Nav styles={styles} value={"1"} />
      <Layout>
        <SiderMain styles={styles} />
        <Layout style={{ padding: "0 24px 12px 12px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={clsx(styles.content_body)}>
            <div className={clsx(styles.content_body_item)}>content1</div>
          </Content>
          <Content className={clsx(styles.content_body)}>
            <div className={clsx(styles.content_body_item)}>content2</div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2022 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
