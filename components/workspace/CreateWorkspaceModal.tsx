"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Input, Modal, message } from "antd";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { useCreateWorkspace } from "@/hooks/workspace/useCreateWorkspace";
import {
  workspaceFormSchema,
  type WorkspaceFormValues,
} from "@/schemas/workspace.schema";
import type { Workspace } from "@/types/workspace";

interface CreateWorkspaceModalProps {
  open: boolean;
  onClose: () => void;
  onCreated?: (workspace: Workspace) => void;
}

const CreateWorkspaceModal = ({
  open,
  onClose,
  onCreated,
}: CreateWorkspaceModalProps) => {
  const createWorkspaceMutation = useCreateWorkspace();

  const { control, handleSubmit, reset } = useForm<WorkspaceFormValues>({
    resolver: zodResolver(workspaceFormSchema),

    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        name: "",
      });
    }
  }, [open, reset]);

  const onSubmit = async (values: WorkspaceFormValues) => {
    try {
      const workspace = await createWorkspaceMutation.mutateAsync(values);

      message.success("Workspace created successfully");

      reset();

      onCreated?.(workspace);

      onClose();
    } catch (error) {
      console.error("Create workspace failed:", error);

      message.error("Failed to create workspace");
    }
  };

  return (
    <Modal
      title="Create Workspace"
      open={open}
      onCancel={onClose}
      onOk={handleSubmit(onSubmit)}
      okText="Create Workspace"
      confirmLoading={createWorkspaceMutation.isPending}
      destroyOnHidden
    >
      <Form layout="vertical">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Form.Item
              label="Workspace name"
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error?.message}
            >
              <Input
                {...field}
                placeholder="e.g. DevTask Team"
                maxLength={100}
                showCount
              />
            </Form.Item>
          )}
        />
      </Form>
    </Modal>
  );
};

export default CreateWorkspaceModal;
