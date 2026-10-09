"use client";

import { useUser } from "@clerk/nextjs";
import { Button, Space, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const { user } = useUser();
  const router = useRouter();

  const name = user?.firstName || user?.username || "there";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        marginBottom: 24,
      }}
    >
      <div>
        <Typography.Title level={2} style={{ marginBottom: 4 }}>
          Good morning, {name} 👋
        </Typography.Title>

        <Typography.Text type="secondary">
          {" "}
          Here&apos;s what&apos;s happening with your projects and tasks.
        </Typography.Text>
      </div>

      <Space>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => router.push("/projects")}
        >
          New Project
        </Button>
      </Space>
    </div>
  );
};

export default DashboardHeader;
