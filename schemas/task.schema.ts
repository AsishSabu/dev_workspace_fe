import { z } from "zod";

export const taskFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Task title is required")
    .max(150, "Task title cannot exceed 150 characters"),

  description: z
    .string()
    .trim()
    .max(1000, "Description cannot exceed 1000 characters"),

  status: z.enum(["todo", "in_progress", "done"]),

  priority: z.enum(["low", "medium", "high"]),
});

export type TaskFormValues = z.infer<typeof taskFormSchema>;
