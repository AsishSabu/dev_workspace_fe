"use client";

import { Button, Form, Input, message, Select } from "antd";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { taskFormSchema, type TaskFormValues } from "@/schemas/task.schema";

import { useCreateTask } from "@/hooks/tasks/useCreateTask";

interface CreateTaskFormProps {
  projectId: string;
}

const CreateTaskForm = ({ projectId }: CreateTaskFormProps) => {
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

  const onSubmit = async (values: TaskFormValues) => {
    try {
      await mutateAsync(values);

      messageApi.success("Task created successfully");

      reset();
    } catch {
      messageApi.error("Failed to create task");
    }
  };

  return (
    <>
      {contextHolder}

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Title"
          validateStatus={errors.title ? "error" : ""}
          help={errors.title?.message}
        >
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Enter task title" />
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
                rows={3}
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

        <Button type="primary" htmlType="submit" loading={isPending}>
          Create Task
        </Button>
      </Form>
    </>
  );
};

export default CreateTaskForm;
