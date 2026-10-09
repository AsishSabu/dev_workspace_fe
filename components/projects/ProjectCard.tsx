"use client";

import { Button, Card, Popconfirm, Space, Typography } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";

import { useRouter } from "next/navigation";

import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;

  onEdit: (project: Project) => void;

  onDelete: (projectId: string) => void;

  isDeleting: boolean;
}

const ProjectCard = ({
  project,
  onEdit,
  onDelete,
  isDeleting,
}: ProjectCardProps) => {
  const router = useRouter();

  return (
    <Card
      hoverable
      actions={[
        <Button
          key="open"
          type="link"
          icon={<ArrowRightOutlined />}
          onClick={() => router.push(`/projects/${project._id}`)}
        >
          Open
        </Button>,

        <Button key="edit" type="link" onClick={() => onEdit(project)}>
          Edit
        </Button>,

        <Popconfirm
          key="delete"
          title="Delete this project?"
          description="This action cannot be undone."
          okText="Delete"
          cancelText="Cancel"
          onConfirm={() => onDelete(project._id)}
        >
          <Button type="link" danger loading={isDeleting}>
            Delete
          </Button>
        </Popconfirm>,
      ]}
    >
      <Card.Meta
        title={project.name}
        description={
          <Typography.Paragraph
            type="secondary"
            ellipsis={{
              rows: 3,
            }}
            style={{
              minHeight: 66,
              marginBottom: 0,
            }}
          >
            {project.description || "No description"}
          </Typography.Paragraph>
        }
      />
    </Card>
  );
};

export default ProjectCard;
