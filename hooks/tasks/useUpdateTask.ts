"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTask } from "@/lib/api/tasks";
import { queryKeys } from "@/lib/queryKeys";

import type { UpdateTaskInput } from "@/types/task";

export const useUpdateTask = (projectId: string) => {
  const { getToken } = useAuth();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, data }: { taskId: string; data: UpdateTaskInput }) =>
      updateTask(projectId, taskId, data, getToken),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.projects.tasks(projectId),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.projects.task(projectId, variables.taskId),
      });
    },
  });
};
