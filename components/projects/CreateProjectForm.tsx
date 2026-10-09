"use client";
import { Button, Form, Input, message } from "antd";
import { useCreateProject } from "../../hooks/projects/useCreateProject";
import {
  projectFormSchema,
  type ProjectFormValues,
} from "@/schemas/project.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateProjectForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const { mutateAsync, isPending } = useCreateProject();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const onSubmit = async (values: ProjectFormValues) => {
    try {
      await mutateAsync(values);
      messageApi.success("Project created successfully");
      reset();
    } catch {
      messageApi.error("Failed to create project");
    }
  };
  return (
    <>
      {contextHolder}

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Project Name"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Enter project name" />
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
                placeholder="Enter project description"
              />
            )}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={isPending}>
          Create Project
        </Button>
      </Form>
    </>
  );
}
