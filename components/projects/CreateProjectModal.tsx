"use client";

import { Form, Input, Modal, message } from "antd";

import { useEffect } from "react";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  projectFormSchema,
  type ProjectFormValues,
} from "@/schemas/project.schema";

import { useCreateProject } from "@/hooks/projects/useCreateProject";

interface CreateProjectModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateProjectModal = ({ open, onClose }: CreateProjectModalProps) => {
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

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  const onSubmit = async (values: ProjectFormValues) => {
    try {
      await mutateAsync(values);

      messageApi.success("Project created successfully");

      reset();
      onClose();
    } catch {
      messageApi.error("Failed to create project");
    }
  };

  return (
    <>
      {contextHolder}

      <Modal
        open={open}
        title="Create Project"
        onCancel={onClose}
        onOk={handleSubmit(onSubmit)}
        confirmLoading={isPending}
        destroyOnHidden
      >
        <Form layout="vertical">
          <Form.Item
            label="Project Name"
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Enter project name" autoFocus />
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
        </Form>
      </Modal>
    </>
  );
};

export default CreateProjectModal;
