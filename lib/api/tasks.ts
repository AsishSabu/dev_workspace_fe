import { GetToken } from "@clerk/nextjs/types";
import { CreateTaskInput, Task, UpdateTaskInput } from "../../types/task";
import { apiClient, getAuthConfig } from "./client";

export const getTasks = async (
  projectId: string,
  getToken: GetToken,
): Promise<Task[]> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.get<{
    success: boolean;
    data: Task[];
  }>(`/api/tasks/projects/${projectId}/tasks`, config);
  return response.data.data;
};

export const getTask = async (
  projectId: string,
  taskId: string,
  getToken: GetToken,
): Promise<Task> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.get<{
    success: boolean;
    data: Task;
  }>(`/api/tasks/projects/${projectId}/tasks/${taskId}`, config);
  return response.data.data;
};

export const createTask = async (
  projectId: string,
  data: CreateTaskInput,
  getToken: GetToken,
) => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.post<{
    success: boolean;
    data: Task;
  }>(`/api/tasks/projects/${projectId}/tasks`, data, config);
  return response.data.data;
};

export const updateTask = async (
  projectId: string,
  taskId: string,
  data: UpdateTaskInput,
  getToken: GetToken,
): Promise<Task> => {
  const config = await getAuthConfig(getToken);

  const response = await apiClient.patch<{
    success: boolean;
    data: Task;
  }>(`/api/tasks/projects/${projectId}/tasks/${taskId}`, data, config);
  return response.data.data;
};

export const deleteTask = async (
  projectId: string,
  taskId: string,
  getToken: GetToken,
): Promise<void> => {
  const config = await getAuthConfig(getToken);
  await apiClient.delete(
    `/api/tasks/projects/${projectId}/tasks/${taskId}`,
    config,
  );
};
