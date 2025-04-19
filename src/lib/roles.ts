import { Roles } from "@/types/globals";
import { useUser } from "@clerk/nextjs";

export const CheckRole = (role: Roles) => {
  const { user } = useUser();
  return user?.publicMetadata.role === role;
};
