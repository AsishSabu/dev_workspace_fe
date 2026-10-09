"use client";

import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateProjectInput } from "../../types/project";
import { createProject } from "../../lib/api/projects";

export const useCreateProject = () => {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProjectInput) => createProject(data, getToken),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });
};
