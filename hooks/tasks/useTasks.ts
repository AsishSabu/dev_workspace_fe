"use client";

import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

import { getTasks } from "@/lib/api/tasks";
import { queryKeys } from "@/lib/queryKeys";

export const useTasks = (projectId: string) => {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: queryKeys.projects.tasks(projectId),

    queryFn: () => getTasks(projectId, getToken),

    enabled: Boolean(projectId) && isLoaded && isSignedIn,
  });
};
