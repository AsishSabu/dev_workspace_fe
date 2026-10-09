import { GetToken } from "@clerk/nextjs/types";
import {
  CreateWorkspaceInput,
  UpdateWorkspaceInput,
  Workspace,
} from "../../types/workspace";
import { apiClient, getAuthConfig } from "./client";

interface WorkspaceResponse {
  success: boolean;
  data: Workspace;
}

interface WorkspacesResponse {
  success: boolean;
  data: Workspace[];
}
export const getWorkspaces = async (
  getToken: GetToken,
): Promise<Workspace[]> => {
  const config = await getAuthConfig(getToken);
  const response = await apiClient.get<WorkspacesResponse>(
    "/api/workspaces",
    config,
  );
  return response.data.data;
};

export const getWorkspace = async (
  workspaceId: string,
  getToken: GetToken,
): Promise<Workspace> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.get<WorkspaceResponse>(
    `/api/workspaces/${workspaceId}`,
    config,
  );

  return response.data.data;
};

export const createWorkspace = async (
  data: CreateWorkspaceInput,
  getToken: GetToken,
): Promise<Workspace> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.post<WorkspaceResponse>(
    "/api/workspaces",
    data,
    config,
  );

  return response.data.data;
};

export const updateWorkspace = async (
  workspaceId: string,
  data: UpdateWorkspaceInput,
  getToken: GetToken,
): Promise<Workspace> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.patch<WorkspaceResponse>(
    `/api/workspaces/${workspaceId}`,
    data,
    config,
  );

  return response.data.data;
};

export const deleteWorkspace = async (
  workspaceId: string,
  getToken: GetToken,
): Promise<void> => {
  const config = await getAuthConfig(getToken);

  await apiClient.delete(`/api/workspaces/${workspaceId}`, config);
};
