"use client";

import { Layout } from "antd";

import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <AppSidebar />

      <Layout>
        <AppHeader />

        <Layout.Content
          style={{
            padding: 24,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default ProtectedLayout;
