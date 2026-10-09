import { auth } from "@clerk/nextjs/server";
import ProtectedLayout from "@/components/layout/ProtectedLayout";
interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedRouteLayout({
  children,
}: ProtectedLayoutProps) {
  await auth.protect();
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
