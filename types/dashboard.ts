import type { TaskPriority, TaskStatus } from "@/types/task";

export interface DashboardStats {
  totalProjects: number;
  totalTasks: number;
  inProgress: number;
  completed: number;
}

export interface DashboardProject {
  _id: string;
  name: string;
  description: string;
  taskCount: number;
  completedTasks: number;
}

export interface DashboardTask {
  _id: string;
  title: string;
  projectId: string;
  projectName: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export interface DashboardData {
  stats: DashboardStats;
  recentProjects: DashboardProject[];
  recentTasks: DashboardTask[];
}
