"use client";

import { Button, Card, Empty, List, Space, Tag, Typography } from "antd";

import { useRouter } from "next/navigation";

interface RecentTask {
  _id: string;
  title: string;
  projectId: string;
  projectName: string;
  status: "todo" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
}

interface RecentTasksProps {
  tasks: RecentTask[];
}

const RecentTasks = ({ tasks }: RecentTasksProps) => {
  const router = useRouter();

  const statusLabel = {
    todo: "To Do",
    in_progress: "In Progress",
    done: "Done",
  };

  return (
    <Card
      title="Recent Tasks"
      extra={
        <Button type="link" onClick={() => router.push("/tasks")}>
          View all
        </Button>
      }
    >
      {tasks.length === 0 ? (
        <Empty description="No recent tasks" />
      ) : (
        <List
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item
              actions={[
                <Button
                  key="open"
                  type="link"
                  onClick={() => router.push(`/projects/${task.projectId}`)}
                >
                  Open
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={task.title}
                description={
                  <Space wrap>
                    <Typography.Text type="secondary">
                      {task.projectName}
                    </Typography.Text>

                    <Tag>{statusLabel[task.status]}</Tag>

                    <Tag>{task.priority}</Tag>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      )}
    </Card>
  );
};

export default RecentTasks;
