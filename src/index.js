import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Nav from "../pages/layout/header";
import SiderMain from "../pages/layout/sider";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Layout, Menu, Breadcrumb, Typography, Modal, Carousel } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Title } = Typography;

export default function Home() {
  const contentStyle = {
    height: "240px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Layout>
      <Nav styles={styles} value={"1"} />
      <Layout>
        <SiderMain styles={styles} />
        <Layout className={clsx(styles.layout)}>
          <div className={clsx(styles.layoutItem)}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Content className={clsx(styles.content_body)}>
            <div style={{ backgroundColor: "white" }}>
              <Carousel autoplay style={{ padding: "15px 15px 0 15px" }}>
                <h3 style={contentStyle}>
                  <Image
                    src="/Facebook1.jpg"
                    alt="Picture of the author"
                    width={1275}
                    height={247}
                    objectFit="cover"
                  />
                </h3>
                <h3 style={contentStyle}>
                  <Image
                    src="/google1.png"
                    alt="Picture of the author"
                    width={1275}
                    height={247}
                    objectFit="cover"
                  />
                </h3>

                <h3 style={contentStyle}>
                  <Image
                    src="/Facebook1.jpg"
                    alt="Picture of the author"
                    width={1275}
                    height={247}
                    objectFit="cover"
                  />
                </h3>

                <h3 style={contentStyle}>
                  <Image
                    src="/google1.png"
                    alt="Picture of the author"
                    width={1275}
                    height={247}
                    objectFit="cover"
                  />
                </h3>
              </Carousel>
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
