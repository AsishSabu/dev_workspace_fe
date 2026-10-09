"use client";

import { Card, Empty, Space, Typography } from "antd";

const TasksPage = () => {
  return (
    <div
      style={{
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <Space
        orientation="vertical"
        size="large"
        style={{
          width: "100%",
        }}
      >
        <div>
          <Typography.Title
            level={2}
            style={{
              marginBottom: 4,
            }}
          >
            Tasks
          </Typography.Title>

          <Typography.Text type="secondary">
            View and manage tasks across all your projects.
          </Typography.Text>
        </div>

        <Card>
          <Empty description="Global task view is coming next" />
        </Card>
      </Space>
    </div>
  );
};

export default TasksPage;
