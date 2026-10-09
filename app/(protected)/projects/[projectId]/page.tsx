"use client";

import { Alert, Card, Divider, Spin, Typography, message } from "antd";

import { useParams } from "next/navigation";

import { useState } from "react";

import type { Task, TaskPriority, TaskStatus } from "@/types/task";

import { useProject } from "@/hooks/projects/useProject";

import { useTasks } from "@/hooks/tasks/useTasks";

import { useDeleteTask } from "@/hooks/tasks/useDeleteTask";

import { useUpdateTask } from "@/hooks/tasks/useUpdateTask";

import CreateTaskForm from "@/components/tasks/CreateTaskForm";

import EditTaskForm from "@/components/tasks/EditTaskForm";

import TaskFilters from "@/components/tasks/TaskFilters";

import TaskList from "@/components/tasks/TaskList";

const ProjectDetailPage = () => {
  const params = useParams();

  const projectId = params.projectId as string;

  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<TaskStatus | "all">("all");

  const [priority, setPriority] = useState<TaskPriority | "all">("all");

  const [messageApi, contextHolder] = message.useMessage();

  const {
    data: project,
    isLoading: isProjectLoading,
    isError: isProjectError,
  } = useProject(projectId);

  const { data: tasks = [], isLoading: isTasksLoading } = useTasks(projectId);

  const { mutateAsync: deleteTask, isPending: isDeleting } =
    useDeleteTask(projectId);

  const { mutateAsync: updateTask, isPending: isUpdating } =
    useUpdateTask(projectId);

  const filteredTasks = tasks.filter((task) => {
    const searchTerm = search.trim().toLowerCase();

    const matchesSearch =
      !searchTerm ||
      task.title.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm);

    const matchesStatus = status === "all" || task.status === status;

    const matchesPriority = priority === "all" || task.priority === priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleDelete = async (taskId: string) => {
    try {
      await deleteTask(taskId);

      messageApi.success("Task deleted successfully");
    } catch {
      messageApi.error("Failed to delete task");
    }
  };

  const handleStatusChange = async (taskId: string, newStatus: TaskStatus) => {
    try {
      await updateTask({
        taskId,
        data: {
          status: newStatus,
        },
      });

      messageApi.success("Task status updated");
    } catch {
      messageApi.error("Failed to update task status");
    }
  };

  if (isProjectLoading) {
    return <Spin />;
  }

  if (isProjectError || !project) {
    return <Alert type="error" title="Project not found" />;
  }

  return (
    <>
      {contextHolder}

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: 24,
        }}
      >
        <Card>
          <Typography.Title level={2}>{project.name}</Typography.Title>

          <Typography.Paragraph>
            {project.description || "No description"}
          </Typography.Paragraph>
        </Card>

        <Divider />

        <Card title="Create Task">
          <CreateTaskForm projectId={projectId} />
        </Card>

        <Divider />

        <Card title="Tasks">
          <Typography.Text type="secondary">
            Showing {filteredTasks.length} of {tasks.length} tasks
          </Typography.Text>

          <div
            style={{
              marginTop: 16,
            }}
          >
            <TaskFilters
              search={search}
              status={status}
              priority={priority}
              onSearchChange={setSearch}
              onStatusChange={setStatus}
              onPriorityChange={setPriority}
            />

            <TaskList
              tasks={filteredTasks}
              isLoading={isTasksLoading}
              onEdit={setEditingTask}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
              isDeleting={isDeleting}
              isUpdating={isUpdating}
            />
          </div>
        </Card>

        <EditTaskForm
          projectId={projectId}
          task={editingTask}
          open={Boolean(editingTask)}
          onClose={() => setEditingTask(null)}
        />
      </div>
    </>
  );
};

export default ProjectDetailPage;
