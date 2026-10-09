"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteTask } from "@/lib/api/tasks";
import { queryKeys } from "@/lib/queryKeys";

export const useDeleteTask = (projectId: string) => {
  const { getToken } = useAuth();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (taskId: string) => deleteTask(projectId, taskId, getToken),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.projects.tasks(projectId),
      });
    },
  });
};
