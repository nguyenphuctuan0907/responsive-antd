import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

import {
  Menu,
  Typography,
  Avatar,
  Dropdown,
  Space,
  message,
  Layout,
} from "antd";
import {
  UserOutlined,
  DashOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header } = Layout;
const { Title } = Typography;

function Nav({ styles, value }) {
  const router = useRouter();

  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Product
      </Menu.Item>
    </Menu>
  );

  return (
    // <Provider store={store}>
    <Header className="header">
      <div className={clsx(styles.header_container)}>
        <Title level={4} style={{ color: "white", margin: 0 }}>
          Ant Design
        </Title>
        <Menu
          theme="dark"
          // mode="horizontal"
          defaultSelectedKeys={[value]}
        >
          {/* <Menu.Item key="1"> */}
          <div className={clsx(styles.menu_item)}>
            <Link href="/">Dashboard</Link>
            <Link href="/product">Product</Link>
          </div>
        </Menu>
        <Avatar
          style={{
            backgroundColor: "#87d068",
            float: "right",
            marginLeft: "auto",
          }}
          icon={<UserOutlined />}
        />
        <div className={clsx(styles.dropdownItem)}>
          <Dropdown.Button
            overlay={menu}
            placement="bottomCenter"
            icon={<EllipsisOutlined />}
            className={clsx(styles.ItemButton)}
          ></Dropdown.Button>
        </div>
      </div>
    </Header>
    // </Provider>
  );
}

export default Nav;
