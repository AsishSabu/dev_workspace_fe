"use client";

import { Form, Input, Modal, Select, message } from "antd";

import { useEffect } from "react";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import type { Task } from "@/types/task";

import { taskFormSchema, type TaskFormValues } from "@/schemas/task.schema";

import { useUpdateTask } from "@/hooks/tasks/useUpdateTask";

interface EditTaskFormProps {
  projectId: string;
  task: Task | null;
  open: boolean;
  onClose: () => void;
}

const EditTaskForm = ({
  projectId,
  task,
  open,
  onClose,
}: EditTaskFormProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync, isPending } = useUpdateTask(projectId);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),

    defaultValues: {
      title: "",
      description: "",
      status: "todo",
      priority: "medium",
    },
  });

  useEffect(() => {
    if (!task) {
      return;
    }

    reset({
      title: task.title,
      description: task.description ?? "",
      status: task.status,
      priority: task.priority,
    });
  }, [task, reset]);

  const onSubmit = async (values: TaskFormValues) => {
    if (!task) {
      return;
    }

    try {
      await mutateAsync({
        taskId: task._id,
        data: values,
      });

      messageApi.success("Task updated successfully");

      onClose();
    } catch {
      messageApi.error("Failed to update task");
    }
  };

  return (
    <>
      {contextHolder}

      <Modal
        open={open}
        title="Edit Task"
        onCancel={onClose}
        onOk={handleSubmit(onSubmit)}
        confirmLoading={isPending}
        destroyOnHidden
      >
        <Form layout="vertical">
          <Form.Item
            label="Title"
            validateStatus={errors.title ? "error" : ""}
            help={errors.title?.message}
          >
            <Controller
              name="title"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            validateStatus={errors.description ? "error" : ""}
            help={errors.description?.message}
          >
            <Controller
              name="description"
              control={control}
              render={({ field }) => <Input.TextArea {...field} rows={3} />}
            />
          </Form.Item>

          <Form.Item label="Status">
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  style={{
                    width: "100%",
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
              )}
            />
          </Form.Item>

          <Form.Item label="Priority">
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  style={{
                    width: "100%",
                  }}
                  options={[
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
              )}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditTaskForm;
