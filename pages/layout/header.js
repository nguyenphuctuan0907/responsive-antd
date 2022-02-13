import Link from "next/link";
import { Layout } from "antd";
import clsx from "clsx";

import { Menu, Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header } = Layout;
const { Title } = Typography;

function Nav({ styles, value }) {
  console.log(value);
  return (
    <Header className="header">
      <div className={clsx(styles.header_container)}>
        <Title level={3} style={{ color: "white" }}>
          Ant Design
        </Title>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[value]}
          style={{ marginLeft: "-972px" }}
        >
          <Menu.Item key="1">
            <Link href="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/product">Product</Link>
          </Menu.Item>
        </Menu>
        <Avatar
          style={{ backgroundColor: "#87d068", float: "right" }}
          icon={<UserOutlined />}
        />
      </div>
    </Header>
  );
}

export default Nav;
