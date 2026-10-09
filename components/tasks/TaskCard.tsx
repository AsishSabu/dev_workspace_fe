"use client";

import { Button, Card, Popconfirm, Select, Space, Tag, Typography } from "antd";

import type { Task, TaskStatus } from "@/types/task";

interface TaskCardProps {
  task: Task;

  onEdit: (task: Task) => void;

  onDelete: (taskId: string) => void;

  onStatusChange: (taskId: string, status: TaskStatus) => void;

  isDeleting: boolean;
  isUpdating: boolean;
}

const TaskCard = ({
  task,
  onEdit,
  onDelete,
  onStatusChange,
  isDeleting,
  isUpdating,
}: TaskCardProps) => {
  const priorityLabel = {
    low: "Low",
    medium: "Medium",
    high: "High",
  }[task.priority];

  return (
    <Card
      title={task.title}
      extra={
        <Space>
          <Button onClick={() => onEdit(task)}>Edit</Button>

          <Popconfirm
            title="Delete this task?"
            description="This action cannot be undone."
            okText="Delete"
            cancelText="Cancel"
            onConfirm={() => onDelete(task._id)}
          >
            <Button danger loading={isDeleting}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      }
    >
      <Space
        orientation="vertical"
        size="middle"
        style={{
          width: "100%",
        }}
      >
        <Typography.Paragraph
          type={task.description ? undefined : "secondary"}
          style={{
            marginBottom: 0,
          }}
        >
          {task.description || "No description"}
        </Typography.Paragraph>

        <Space wrap>
          <Select
            value={task.status}
            onChange={(value) => onStatusChange(task._id, value)}
            loading={isUpdating}
            style={{
              width: 140,
            }}
            options={[
              {
                label: "To Do",
                value: "todo",
              },
              {
                label: "In Progress",
                value: "in_progress",
              },
              {
                label: "Done",
                value: "done",
              },
            ]}
          />

          <Tag>Priority: {priorityLabel}</Tag>
        </Space>
      </Space>
    </Card>
  );
};

export default TaskCard;
