"use client";

import {
  DashboardOutlined,
  FolderOutlined,
  CheckSquareOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import WorkspaceSwitcher from "../workspace/WorkspaceSwitcher";

const { Sider } = Layout;

const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const selectedKey = pathname.startsWith("/projects")
    ? "projects"
    : pathname.startsWith("/tasks")
      ? "tasks"
      : pathname.startsWith("/dashboard")
        ? "dashboard"
        : "";

  return (
    <Sider breakpoint="lg" collapsedWidth="0" theme="light">
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        DevTask
      </div>

      <div
        style={{
          padding: "0 12px 16px",
          borderBottom: "1px solid #f0f0f0",
          marginBottom: 8,
        }}
      >
        <WorkspaceSwitcher />
      </div>

      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        items={[
          {
            key: "dashboard",
            icon: <DashboardOutlined />,
            label: "Dashboard",
            onClick: () => router.push("/dashboard"),
          },
          {
            key: "projects",
            icon: <FolderOutlined />,
            label: "Projects",
            onClick: () => router.push("/projects"),
          },
          {
            key: "tasks",
            icon: <CheckSquareOutlined />,
            label: "Tasks",
            onClick: () => router.push("/tasks"),
          },
          {
            type: "divider",
          },
          {
            key: "settings",
            icon: <SettingOutlined />,
            label: "Settings",
          },
        ]}
      />
    </Sider>
  );
};

export default AppSidebar;
