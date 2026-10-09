import { Col, Row } from "antd";

import StatCard from "./StatCard";

interface DashboardStatsProps {
  totalProjects: number;
  totalTasks: number;
  inProgress: number;
  completed: number;
}

const DashboardStats = ({
  totalProjects,
  totalTasks,
  inProgress,
  completed,
}: DashboardStatsProps) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={6}>
        <StatCard title="Total Projects" value={totalProjects} />
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <StatCard title="Total Tasks" value={totalTasks} />
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <StatCard title="In Progress" value={inProgress} />
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <StatCard title="Completed" value={completed} />
      </Col>
    </Row>
  );
};

export default DashboardStats;
