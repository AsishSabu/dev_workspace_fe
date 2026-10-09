"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createTask } from "@/lib/api/tasks";
import { queryKeys } from "@/lib/queryKeys";

import type { CreateTaskInput } from "@/types/task";

export const useCreateTask = (projectId: string) => {
  const { getToken } = useAuth();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTaskInput) =>
      createTask(projectId, data, getToken),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.projects.tasks(projectId),
      });
    },
  });
};
