"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject } from "../../lib/api/projects";

export const useDeleteProject = () => {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (projectId: string) => deleteProject(projectId, getToken),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });
};
