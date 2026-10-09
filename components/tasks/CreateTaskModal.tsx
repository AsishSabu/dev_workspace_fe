"use client";

import { Form, Input, Modal, Select, message } from "antd";

import { useEffect } from "react";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { taskFormSchema, type TaskFormValues } from "@/schemas/task.schema";

import { useCreateTask } from "@/hooks/tasks/useCreateTask";

interface CreateTaskModalProps {
  projectId: string;
  open: boolean;
  onClose: () => void;
}

const CreateTaskModal = ({
  projectId,
  open,
  onClose,
}: CreateTaskModalProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync, isPending } = useCreateTask(projectId);

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
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const onSubmit = async (values: TaskFormValues) => {
    try {
      await mutateAsync(values);

      messageApi.success("Task created successfully");

      reset();
      onClose();
    } catch {
      messageApi.error("Failed to create task");
    }
  };

  return (
    <>
      {contextHolder}

      <Modal
        open={open}
        title="Create Task"
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
              render={({ field }) => (
                <Input {...field} placeholder="Enter task title" autoFocus />
              )}
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
              render={({ field }) => (
                <Input.TextArea
                  {...field}
                  rows={4}
                  placeholder="Enter task description"
                />
              )}
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

export default CreateTaskModal;
