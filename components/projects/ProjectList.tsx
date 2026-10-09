"use client";

import { Empty, Space, Spin } from "antd";
import { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  isLoading: boolean;
  onEdit: (project: Project) => void;
  onDelete: (projectId: string) => void;
  isDeleting: boolean;
}

const ProjectList = ({
  projects,
  isLoading,
  onEdit,
  onDelete,
  isDeleting,
}: ProjectListProps) => {
  if (isLoading) {
    return <Spin />;
  }
  if (projects.length === 0) {
    return <Empty description="No projects found" />;
  }
  return (
    <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
          isDeleting={isDeleting}
        />
      ))}
    </Space>
  );
};
export default ProjectList;
