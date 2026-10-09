"use client";

import { Col, Row } from "antd";

import DashboardHeader from "@/components/dashboard/DashboardHeader";

import DashboardStats from "@/components/dashboard/DashboardStats";

import RecentProjects from "@/components/dashboard/RecentProjects";

import RecentTasks from "@/components/dashboard/RecentTasks";

const DashboardPage = () => {
  return (
    <div
      style={{
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <DashboardHeader />

      <DashboardStats
        totalProjects={6}
        totalTasks={42}
        inProgress={8}
        completed={21}
      />

      <div
        style={{
          marginTop: 24,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={14}>
            <RecentProjects projects={[]} />
          </Col>

          <Col xs={24} lg={10}>
            <RecentTasks tasks={[]} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardPage;
