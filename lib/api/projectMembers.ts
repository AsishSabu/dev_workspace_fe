import { updateProject } from "./projects";
import { GetToken } from "@clerk/nextjs/types";
import {
  AddProjectMemberInput,
  ProjectMember,
  UpdateProjectMemberInput,
} from "../../types/projectMember";
import { apiClient, getAuthConfig } from "./client";

export const getProjectMembers = async (
  projectId: string,
  getToken: GetToken,
): Promise<ProjectMember[]> => {
  const config = await getAuthConfig(getToken);
  const response = await apiClient.get<{
    success: boolean;
    data: ProjectMember[];
  }>(`/api/projects/${projectId}/members`, config);
  return response.data.data;
};

export const addProjectMember = async (
  projectId: string,
  data: AddProjectMemberInput,
  getToken: GetToken,
): Promise<ProjectMember> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.post<{
    success: boolean;
    data: ProjectMember;
  }>(`/api/projects/${projectId}/members`, data, config);
  return response.data.data;
};

export const updateProjectMember = async (
  projectId: string,
  userId: string,
  data: UpdateProjectMemberInput,
  getToken: GetToken,
): Promise<ProjectMember> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.patch<{
    success: boolean;
    data: ProjectMember;
  }>(`/api/projects/${projectId}/members/${userId}`, data, config);

  return response.data.data;
};
