"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateProjectInput } from "../../types/project";
import { updateProject } from "../../lib/api/projects";

export const useUpdateProject = () => {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      projectId,
      data,
    }: {
      projectId: string;
      data: UpdateProjectInput;
    }) => updateProject(projectId, data, getToken),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({
        queryKey: ["projects", variables.projectId],
      });
    },
  });
};
