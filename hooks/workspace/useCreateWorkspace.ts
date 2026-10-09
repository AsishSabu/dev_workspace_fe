"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createWorkspace } from "@/lib/api/workspaces";
import { queryKeys } from "@/lib/queryKeys";
import type { CreateWorkspaceInput } from "@/types/workspace";

export const useCreateWorkspace = () => {
  const { getToken } = useAuth();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateWorkspaceInput) => createWorkspace(data, getToken),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.workspaces.all,
      });
    },
  });
};
