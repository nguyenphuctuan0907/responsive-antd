import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Nav from "./layout/header";
import SiderMain from "./layout/sider";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Layout, Menu, Breadcrumb, Typography, Modal } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Title } = Typography;

export default function Home() {
  return (
    <Layout>
      <Nav styles={styles} value={"1"} />
      <Layout>
        <SiderMain styles={styles} />
        <Layout className={clsx(styles.layout)}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={clsx(styles.content_body)}>
            <div className={clsx(styles.content_body_item)}>
              <Image
                src="/google1.png"
                alt="Picture of the author"
                width={1275}
                height={240}
                objectFit="cover"
              />
            </div>
          </Content>
          <Content className={clsx(styles.content_body)}>
            <div className={clsx(styles.content_body_item)}>
              <Image
                src="/google1.png"
                alt="Picture of the author"
                width={1275}
                height={240}
                objectFit="cover"
              />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2022 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
