"use client";

import { Button, Card, Empty, Input, Space, Typography, message } from "antd";

import { PlusOutlined } from "@ant-design/icons";

import { useMemo, useState } from "react";

import type { Project } from "@/types/project";

import { useProjects } from "@/hooks/projects/useProjects";

import { useDeleteProject } from "@/hooks/projects/useDeleteProject";

import ProjectCard from "@/components/projects/ProjectCard";

import EditProjectForm from "@/components/projects/EditProjectForm";

import CreateProjectModal from "@/components/projects/CreateProjectModal";

const ProjectsPage = () => {
  const [search, setSearch] = useState("");

  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const { data: projects = [], isLoading } = useProjects();

  const { mutateAsync: deleteProject, isPending: isDeleting } =
    useDeleteProject();

  const filteredProjects = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    if (!searchTerm) {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm) ||
        project.description?.toLowerCase().includes(searchTerm),
    );
  }, [projects, search]);

  const handleDelete = async (projectId: string) => {
    try {
      await deleteProject(projectId);

      messageApi.success("Project deleted successfully");
    } catch {
      messageApi.error("Failed to delete project");
    }
  };

  return (
    <>
      {contextHolder}

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <Space
          orientation="vertical"
          size="large"
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div>
              <Typography.Title
                level={2}
                style={{
                  marginBottom: 4,
                }}
              >
                Projects
              </Typography.Title>

              <Typography.Text type="secondary">
                Manage your projects and their tasks.
              </Typography.Text>
            </div>

            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsCreateOpen(true)}
            >
              New Project
            </Button>
          </div>

          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            allowClear
            style={{
              maxWidth: 400,
            }}
          />

          <Card loading={isLoading}>
            {!isLoading && filteredProjects.length === 0 ? (
              <Empty
                description={
                  search ? "No matching projects" : "No projects yet"
                }
              />
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 16,
                }}
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    onEdit={setEditingProject}
                    onDelete={handleDelete}
                    isDeleting={isDeleting}
                  />
                ))}
              </div>
            )}
          </Card>
        </Space>
      </div>

      <CreateProjectModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />

      <EditProjectForm
        project={editingProject}
        open={Boolean(editingProject)}
        onClose={() => setEditingProject(null)}
      />
    </>
  );
};

export default ProjectsPage;
