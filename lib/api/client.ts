import { GetToken } from "@clerk/nextjs/types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthConfig = async (getToken: GetToken) => {
  const token = await getToken();

  if (!token) {
    throw new Error("Authentication token not available");
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
