"use client";

import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

import { getWorkspaces } from "@/lib/api/workspaces";
import { queryKeys } from "@/lib/queryKeys";

export const useWorkspaces = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: queryKeys.workspaces.all,

    queryFn: () => getWorkspaces(getToken),

    enabled: isLoaded && isSignedIn,
  });
};
