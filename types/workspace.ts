export type WorkspaceRole = "owner" | "admin" | "manager" | "member";

export interface Workspace {
  _id: string;
  name: string;
  slug: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkspaceInput {
  name: string;
}

export interface UpdateWorkspaceInput {
  name: string;
}
