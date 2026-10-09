import { GetToken } from "@clerk/nextjs/types";
import { apiClient, getAuthConfig } from "./client";
import {
  CreateProjectInput,
  Project,
  UpdateProjectInput,
} from "../../types/project";

export const getProjects = async (getToken: GetToken): Promise<Project[]> => {
  const config = await getAuthConfig(getToken);
  const response = await apiClient.get<{
    success: boolean;
    data: Project[];
  }>("/api/projects", config);
  return response.data.data;
};

export const getProject = async (
  projectId: string,
  getToken: GetToken,
): Promise<Project> => {
  const config = await getAuthConfig(getToken);
  const response = await apiClient.get<{
    success: boolean;
    data: Project;
  }>(`/api/projects/${projectId}`, config);
  return response.data.data;
};

export const createProject = async (
  data: CreateProjectInput,
  getToken: GetToken,
): Promise<Project> => {
  const config = await getAuthConfig(getToken);
  const response = await apiClient.post<{
    success: boolean;
    data: Project;
  }>("/api/projects", data, config);
  return response.data.data;
};

export const updateProject = async (
  projectId: string,
  data: UpdateProjectInput,
  getToken: GetToken,
): Promise<Project> => {
  const config = await getAuthConfig(getToken);
  const response = await apiClient.patch<{
    success: boolean;
    data: Project;
  }>(`/api/projects/${projectId}`, data, config);
  return response.data.data;
};

export const deleteProject = async (
  projectId: string,
  getToken: GetToken,
): Promise<void> => {
  const config = await getAuthConfig(getToken);
  await apiClient.delete(`/api/projects/${projectId}`, config);
};
