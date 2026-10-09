"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Layout, Space, Typography } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  const { user } = useUser();

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 24px",
        borderBottom: "1px solid #f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Space>
        <Typography.Text>
          {user?.firstName || user?.username || "User"}
        </Typography.Text>

        <UserButton />
      </Space>
    </Header>
  );
};

export default AppHeader;
