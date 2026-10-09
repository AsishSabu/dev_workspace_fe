export const queryKeys = {
  workspaces: {
    all: ["workspaces"] as const,

    detail: (workspaceId: string) => ["workspaces", workspaceId] as const,
  },
  projects: {
    all: ["projects"] as const,

    detail: (projectId: string) => ["projects", projectId] as const,

    tasks: (projectId: string) => ["projects", projectId, "tasks"] as const,

    task: (projectId: string, taskId: string) =>
      ["projects", projectId, "tasks", taskId] as const,
  },
};
