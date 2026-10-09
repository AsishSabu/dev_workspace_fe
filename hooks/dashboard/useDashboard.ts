"use client";

import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

import { getDashboard } from "@/lib/api/dashboard";

export const useDashboard = () => {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboard(getToken),
    enabled: isLoaded && isSignedIn,
  });
};
