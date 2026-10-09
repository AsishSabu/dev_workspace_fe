"use client";

import { Form, Input, Modal, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import type { Project } from "@/types/project";

import {
  projectFormSchema,
  type ProjectFormValues,
} from "@/schemas/project.schema";

import { useUpdateProject } from "@/hooks/projects/useUpdateProject";

interface EditProjectFormProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const EditProjectForm = ({ project, open, onClose }: EditProjectFormProps) => {
  const [messageApi, contextHolder] = message.useMessage();

  const { mutateAsync, isPending } = useUpdateProject();

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
    if (project) {
      reset({
        name: project.name,
        description: project.description ?? "",
      });
    }
  }, [project, reset]);

  const onSubmit = async (values: ProjectFormValues) => {
    if (!project) return;

    try {
      await mutateAsync({
        projectId: project._id,
        data: values,
      });

      messageApi.success("Project updated successfully");

      onClose();
    } catch {
      messageApi.error("Failed to update project");
    }
  };

  return (
    <>
      {contextHolder}

      <Modal
        open={open}
        title="Edit Project"
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
        </Form>
      </Modal>
    </>
  );
};

export default EditProjectForm;
