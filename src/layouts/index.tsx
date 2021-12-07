import React, { FC } from "react";
import {
  Layout,
  Nav,
  Button,
  Breadcrumb,
  Skeleton,
  Avatar,
} from "@douyinfe/semi-ui";
import {
  IconBell,
  IconHelpCircle,
  IconBytedanceLogo,
  IconHome,
  IconHistogram,
  IconLive,
  IconSetting,
  IconCalendar,
  IconApps,
} from "@douyinfe/semi-icons";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
type Props = {};

export const AppLayout: FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <Layout
      className="h-screen"
      style={{ border: "1px solid var(--semi-color-border)" }}
    >
      <Sider style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
        <Nav
          onClick={({ itemKey }) => {
            navigate(itemKey.toString());
          }}
          defaultSelectedKeys={["Home"]}
          style={{ maxWidth: 220, height: "100%" }}
          items={[
            { itemKey: "/", text: "首页", icon: <IconHome size="large" /> },
            {
              itemKey: "statistic",
              text: "统计数据",
              icon: <IconHistogram size="large" />,
            },
            {
              itemKey: "plan",
              text: "计划列表",
              icon: <IconCalendar size="large" />,
            },
            {
              itemKey: "exercise",
              text: "动作库",
              icon: <IconApps size="large" />,
            },
            {
              itemKey: "settings",
              text: "设置",
              icon: <IconSetting size="large" />,
            },
          ]}
          footer={{
            collapseButton: true,
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "var(--semi-color-bg-1)" }}>
          <Nav mode="horizontal"></Nav>
        </Header>
        <Content
          style={{
            padding: "24px",
            backgroundColor: "var(--semi-color-bg-0)",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            color: "var(--semi-color-text-2)",
            backgroundColor: "rgba(var(--semi-grey-0), 1)",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconBytedanceLogo size="large" style={{ marginRight: "8px" }} />
            <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: "24px" }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  );
};
