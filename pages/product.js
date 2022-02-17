import Link from "next/link";
import "antd/dist/antd.css";
import Nav from "./layout/header";
import SiderMain from "./layout/sider";
import clsx from "clsx";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getListPostSuccess,
  addPost,
  deletePost,
  updatePost,
} from "../src/redux/actions";

import { CloseSquareOutlined, HighlightOutlined } from "@ant-design/icons";

import {
  Layout,
  Menu,
  Breadcrumb,
  Typography,
  Modal,
  Row,
  Col,
  Input,
  Button,
  Form,
  List,
  Divider,
  message,
} from "antd";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const style = { background: "#0092ff", padding: "30px 0" };
let i;

function Product() {
  const [post, setPost] = useState("");
  const [switchFlag, setSwitchFlag] = useState(true);

  const { postsReducer } = useSelector((state) => state);
  console.log("postReducer:::", postsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect:::");
    dispatch(getListPostSuccess());
  }, [dispatch]);

  // get input value
  function handlerOnchange(e) {
    setPost(e.target.value);
  }

  // submit form
  function handlerOnSubmit(e) {
    e.preventDefault();

    if (!post) return message.error("require post");

    const f = postsReducer.listPost.some((p) => {
      return p.title === post;
    });
    if (f) return message.error("post already exist");

    if (switchFlag) {
      message.success("Add success");
      dispatch(addPost(post));
      setPost("");
    } else {
      message.success("Update success");
      dispatch(
        updatePost({
          postTitle: post,
          idPostFind: i,
        })
      );
      setSwitchFlag(true);
      setPost("");
    }
  }

  function handlerClickDelete(_id) {
    const newPost = postsReducer.listPost.filter((post) => post.id !== _id);
    message.success("Delete success");
    dispatch(deletePost(newPost));
  }

  function handlerClickUpdate(_id) {
    const findPost = postsReducer.listPost.find((post, index) => {
      return post.id === _id;
    });
    setPost(findPost.title);
    i = findPost.id;
    setSwitchFlag((state) => !state);
  }

  return (
    <Layout>
      <Nav styles={styles} value={"2"} />
      <Layout>
        <SiderMain styles={styles} />
        <Layout style={{ padding: "0 24px 12px 12px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
          </Breadcrumb>
          <form style={{ textAlign: "center" }} onSubmit={handlerOnSubmit}>
            <input
              placeholder="name post"
              style={{ width: "300px", outline: "none" }}
              autoFocus
              name="inputNamePost"
              value={post}
              onChange={handlerOnchange}
            />
            <button type="submit">{switchFlag ? "Add" : "Update"}</button>
          </form>
          <Divider orientation="left">List Post</Divider>
          <List
            footer={<div>. . . . . . .</div>}
            bordered
            dataSource={postsReducer.listPost}
            renderItem={(p) => (
              <List.Item>
                <CloseSquareOutlined
                  style={{ cursor: "pointer", color: "red" }}
                  onClick={() => handlerClickDelete(p?.id)}
                />
                <HighlightOutlined
                  style={{ cursor: "pointer", margin: "0 5px" }}
                  onClick={() => handlerClickUpdate(p?.id)}
                />
                {"  "}
                {p?.title}
              </List.Item>
            )}
          />
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2022 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Product;
