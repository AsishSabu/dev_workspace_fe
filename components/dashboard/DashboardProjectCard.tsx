"use client";

import { Button, Card, Space, Tag, Typography } from "antd";

import { useRouter } from "next/navigation";

interface DashboardProjectCardProps {
  id: string;
  name: string;
  description: string;
  taskCount: number;
  completedTasks: number;
}

const DashboardProjectCard = ({
  id,
  name,
  description,
  taskCount,
  completedTasks,
}: DashboardProjectCardProps) => {
  const router = useRouter();

  const progress =
    taskCount > 0 ? Math.round((completedTasks / taskCount) * 100) : 0;

  return (
    <Card>
      <Space
        orientation="vertical"
        style={{
          width: "100%",
        }}
      >
        <Typography.Title level={4} style={{ margin: 0 }}>
          {name}
        </Typography.Title>

        <Typography.Paragraph
          type="secondary"
          ellipsis={{
            rows: 2,
          }}
          style={{
            minHeight: 44,
          }}
        >
          {description || "No description"}
        </Typography.Paragraph>

        <Space>
          <Tag>{taskCount} Tasks</Tag>

          <Tag>{completedTasks} Completed</Tag>
        </Space>

        <Typography.Text type="secondary">
          Progress: {progress}%
        </Typography.Text>

        <Button
          type="link"
          style={{
            padding: 0,
          }}
          onClick={() => router.push(`/projects/${id}`)}
        >
          Open Project →
        </Button>
      </Space>
    </Card>
  );
};

export default DashboardProjectCard;
