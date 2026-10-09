"use client";

import { Input, Select, Space } from "antd";

import type { TaskPriority, TaskStatus } from "@/types/task";

interface TaskFiltersProps {
  search: string;

  status: TaskStatus | "all";

  priority: TaskPriority | "all";

  onSearchChange: (value: string) => void;

  onStatusChange: (value: TaskStatus | "all") => void;

  onPriorityChange: (value: TaskPriority | "all") => void;
}

const TaskFilters = ({
  search,
  status,
  priority,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
}: TaskFiltersProps) => {
  return (
    <Space
      wrap
      style={{
        width: "100%",
        marginBottom: 20,
      }}
    >
      <Input
        placeholder="Search tasks..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        style={{
          width: 250,
        }}
        allowClear
      />

      <Select
        value={status}
        onChange={onStatusChange}
        style={{
          width: 180,
        }}
        options={[
          {
            label: "All Statuses",
            value: "all",
          },
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

      <Select
        value={priority}
        onChange={onPriorityChange}
        style={{
          width: 180,
        }}
        options={[
          {
            label: "All Priorities",
            value: "all",
          },
          {
            label: "Low",
            value: "low",
          },
          {
            label: "Medium",
            value: "medium",
          },
          {
            label: "High",
            value: "high",
          },
        ]}
      />
    </Space>
  );
};

export default TaskFilters;
