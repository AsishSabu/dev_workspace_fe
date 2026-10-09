export interface Project {
  _id: string;
  name: string;
  description: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProjectInput {
  name: string;
  description: string;
}

export interface UpdateProjectInput {
  name: string;
  description: string;
}
