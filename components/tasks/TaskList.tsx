"use client";

import { Empty, Space, Spin } from "antd";

import type { Task, TaskStatus } from "@/types/task";

import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  isLoading: boolean;

  onEdit: (task: Task) => void;

  onDelete: (taskId: string) => void;

  onStatusChange: (taskId: string, status: TaskStatus) => void;

  isDeleting: boolean;
  isUpdating: boolean;
}

const TaskList = ({
  tasks,
  isLoading,
  onEdit,
  onDelete,
  onStatusChange,
  isDeleting,
  isUpdating,
}: TaskListProps) => {
  if (isLoading) {
    return <Spin />;
  }

  if (tasks.length === 0) {
    return <Empty description="No tasks found" />;
  }

  return (
    <Space
      orientation="vertical"
      size="middle"
      style={{
        width: "100%",
      }}
    >
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
          isDeleting={isDeleting}
          isUpdating={isUpdating}
        />
      ))}
    </Space>
  );
};

export default TaskList;
