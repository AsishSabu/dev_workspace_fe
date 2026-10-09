"use client";

import { CheckOutlined, PlusOutlined, TeamOutlined } from "@ant-design/icons";

import { Button, Dropdown, Empty, Space, Spin, Typography } from "antd";

import type { MenuProps } from "antd";

import { useEffect, useMemo, useState } from "react";

import { useWorkspaces } from "@/hooks/workspace/useWorkspaces";
import { useActiveWorkspace } from "@/hooks/workspace/useActiveWorkspace";

import CreateWorkspaceModal from "@/components/workspace/CreateWorkspaceModal";

const { Text } = Typography;

const WorkspaceSwitcher = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const { data: workspaces = [], isLoading, isError } = useWorkspaces();

  const { activeWorkspaceId, setActiveWorkspaceId, isWorkspaceLoaded } =
    useActiveWorkspace();

  // Restore the saved workspace or select the first available workspace.
  useEffect(() => {
    if (!isWorkspaceLoaded || isLoading || isError) {
      return;
    }

    if (workspaces.length === 0) {
      if (activeWorkspaceId !== null) {
        setActiveWorkspaceId(null);
      }

      return;
    }

    const savedWorkspaceExists = workspaces.some(
      (workspace) => workspace._id === activeWorkspaceId,
    );

    if (!savedWorkspaceExists) {
      setActiveWorkspaceId(workspaces[0]._id);
    }
  }, [
    workspaces,
    activeWorkspaceId,
    isWorkspaceLoaded,
    isLoading,
    isError,
    setActiveWorkspaceId,
  ]);

  const activeWorkspace = useMemo(
    () => workspaces.find((workspace) => workspace._id === activeWorkspaceId),
    [workspaces, activeWorkspaceId],
  );

  const menuItems: MenuProps["items"] = [
    ...workspaces.map((workspace) => ({
      key: workspace._id,

      icon:
        workspace._id === activeWorkspaceId ? (
          <CheckOutlined />
        ) : (
          <TeamOutlined />
        ),

      label: workspace.name,

      onClick: () => {
        setActiveWorkspaceId(workspace._id);
      },
    })),

    {
      type: "divider",
    },

    {
      key: "create-workspace",

      icon: <PlusOutlined />,

      label: "Create workspace",

      onClick: () => {
        setCreateModalOpen(true);
      },
    },
  ];

  if (isLoading || !isWorkspaceLoaded) {
    return (
      <div style={{ padding: 12 }}>
        <Spin size="small" />
      </div>
    );
  }

  if (isError) {
    return <Text type="danger">Unable to load workspaces</Text>;
  }

  if (workspaces.length === 0) {
    return (
      <>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No workspaces yet"
        />

        <Button
          block
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setCreateModalOpen(true)}
        >
          Create Workspace
        </Button>

        <CreateWorkspaceModal
          open={createModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onCreated={(workspace) => {
            setActiveWorkspaceId(workspace._id);
          }}
        />
      </>
    );
  }

  return (
    <>
      <Dropdown
        trigger={["click"]}
        menu={{
          items: menuItems,
          selectedKeys: activeWorkspaceId ? [activeWorkspaceId] : [],
        }}
      >
        <Button
          type="text"
          block
          style={{
            height: 44,
            padding: "0 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Space size={10}>
            <TeamOutlined style={{ fontSize: 18 }} />

            <Text
              strong
              ellipsis
              style={{
                maxWidth: 170,
              }}
            >
              {activeWorkspace?.name ?? "Select workspace"}
            </Text>
          </Space>
        </Button>
      </Dropdown>

      <CreateWorkspaceModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreated={(workspace) => {
          setActiveWorkspaceId(workspace._id);
        }}
      />
    </>
  );
};

export default WorkspaceSwitcher;
