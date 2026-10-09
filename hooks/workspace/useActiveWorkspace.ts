"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "devtask-active-workspace";
const WORKSPACE_EVENT = "devtask-workspace-changed";

export const useActiveWorkspace = () => {
  const [activeWorkspaceId, setActiveWorkspaceIdState] = useState<
    string | null
  >(null);

  const [isWorkspaceLoaded, setIsWorkspaceLoaded] = useState(false);

  useEffect(() => {
    const syncWorkspace = () => {
      const workspaceId = localStorage.getItem(STORAGE_KEY);

      setActiveWorkspaceIdState(workspaceId);
      setIsWorkspaceLoaded(true);
    };

    const handleWorkspaceChange = () => {
      syncWorkspace();
    };

    syncWorkspace();

    window.addEventListener(WORKSPACE_EVENT, handleWorkspaceChange);

    window.addEventListener("storage", handleWorkspaceChange);

    return () => {
      window.removeEventListener(WORKSPACE_EVENT, handleWorkspaceChange);

      window.removeEventListener("storage", handleWorkspaceChange);
    };
  }, []);

  const setActiveWorkspaceId = useCallback((workspaceId: string | null) => {
    if (workspaceId) {
      localStorage.setItem(STORAGE_KEY, workspaceId);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }

    setActiveWorkspaceIdState(workspaceId);

    window.dispatchEvent(new Event(WORKSPACE_EVENT));
  }, []);

  return {
    activeWorkspaceId,
    setActiveWorkspaceId,
    isWorkspaceLoaded,
  };
};
