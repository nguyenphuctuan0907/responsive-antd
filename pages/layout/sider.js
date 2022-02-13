import Link from "next/link";
import { Layout } from "antd";
import clsx from "clsx";

import { Menu, Typography, Avatar } from "antd";
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
  // const [isSiderVisible, setIsSiderVisible] = useState(true);

  // click icon menu show sider
  function handlerClickIcon() {
    // setIsSiderVisible(!isSiderVisible);
  }

  // close sider
  function handleCancel() {
    // setIsSiderVisible(!isSiderVisible);
  }
  return (
    <>
      <div className={clsx(styles.sider_icon)} onClick={handlerClickIcon}>
        <MenuOutlined
        // style={{ display: isSiderVisible ? "none" : "block" }}
        />
      </div>
      <Sider
        // collapsedWidth={0}
        // trigger={null}
        width={200}
        theme="dark"
        // collapsible
        // collapsed={{ isSiderVisible }}
        // style={{ display: isSiderVisible ? "block" : "none" }}
        className={clsx(styles.sider)}
      >
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
              onClick={handleCancel}
              className={clsx(styles.close)}
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
    </>
  );
}

export default SiderMain;
