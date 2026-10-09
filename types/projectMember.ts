export type ProjectMemberRole = "admin" | "member";

export interface ProjectMember {
  _id: string;
  projectId: string;
  userId: string;
  role: ProjectMemberRole;
  createdAt: string;
  updatedAt: string;
}

export interface AddProjectMemberInput {
  userId: string;
  role: ProjectMemberRole;
}

export interface UpdateProjectMemberInput {
  role: ProjectMemberRole;
}
