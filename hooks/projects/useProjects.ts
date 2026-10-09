"use client";

import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

import { getProjects } from "@/lib/api/projects";

export const useProjects = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(getToken),
    enabled: isLoaded && isSignedIn,
  });
};
