"use client";

import { Button, Card, Col, Empty, Row, Space, Typography } from "antd";

import { useRouter } from "next/navigation";

import DashboardProjectCard from "./DashboardProjectCard";

interface DashboardProject {
  _id: string;
  name: string;
  description: string;
  taskCount: number;
  completedTasks: number;
}

interface RecentProjectsProps {
  projects: DashboardProject[];
}

const RecentProjects = ({ projects }: RecentProjectsProps) => {
  const router = useRouter();

  return (
    <Card
      title="Recent Projects"
      extra={
        <Button type="link" onClick={() => router.push("/projects")}>
          View all
        </Button>
      }
    >
      {projects.length === 0 ? (
        <Empty description="No projects yet" />
      ) : (
        <Row gutter={[16, 16]}>
          {projects.map((project) => (
            <Col key={project._id} xs={24} md={12} lg={8}>
              <DashboardProjectCard
                id={project._id}
                name={project.name}
                description={project.description}
                taskCount={project.taskCount}
                completedTasks={project.completedTasks}
              />
            </Col>
          ))}
        </Row>
      )}
    </Card>
  );
};

export default RecentProjects;
