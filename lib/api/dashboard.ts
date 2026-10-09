import type { DashboardData } from "@/types/dashboard";
import { GetToken } from "@clerk/nextjs/types";

import { apiClient, getAuthConfig } from "./client";

export const getDashboard = async (
  getToken: GetToken,
): Promise<DashboardData> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.get<{
    success: boolean;
    data: DashboardData;
  }>("/api/dashboard", config);

  return response.data.data;
};
