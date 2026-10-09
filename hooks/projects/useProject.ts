"use client";

import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

import { getProject } from "@/lib/api/projects";

export const useProject = (projectId: string) => {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: ["projects", projectId],
    queryFn: () => getProject(projectId, getToken),
    enabled: Boolean(projectId) && isLoaded && isSignedIn,
  });
};
