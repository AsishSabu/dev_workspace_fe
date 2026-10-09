import { z } from "zod";

export const workspaceFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Workspace name is required")
    .max(100, "Workspace name cannot exceed 100 characters"),
});

export type WorkspaceFormValues = z.infer<typeof workspaceFormSchema>;
