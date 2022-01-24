import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SmileTwoTone,
} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, {useState} from "react";
import HeaderIcons from "./Header/Header";
import "./Layout.scss";
import { MainContent } from "./mainContent/mainContent";

const BookingLayout = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const {Header, Sider, Content} = Layout;
  return (
    <Layout className="def-layout">
      <Sider
        collapsible
        trigger={null}
        theme="light"
        style={{height: "100vh", borderRight: "1px solid #aaaaaa25"}}
        collapsed={collapsed}
      >
        <Menu theme="light" mode="inline" >
          <SubMenu key="sub1" icon={<SmileTwoTone />} title="Đặt cơm">
            <Menu.Item key="3">Danh sách yêu cầu</Menu.Item>
            <Menu.Item key="4">Quán ăn</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{
            padding: 0,
            maxHeight: 48,
            borderBottom: "1px solid #aaaaaa25",
          }}
        >
          <>
            {collapsed ? (
              <MenuUnfoldOutlined
                className="trigger"
                onClick={handleToggleCollapse}
              />
            ) : (
              <MenuFoldOutlined
                className="trigger"
                onClick={handleToggleCollapse}
              />
            )}
            <HeaderIcons />
          </>
        </Header>
        <Content
          className="site-layout-background content mobile-padding"
          style={{
            height: "auto",
          }}
        >
            <MainContent/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default BookingLayout;
