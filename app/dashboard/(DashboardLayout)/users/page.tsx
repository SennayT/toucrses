import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { UsersTable } from "./_components/users-table";

export default async function Page() {
  const limit = 10;
  const offset = 0;
  const headersList = await headers();

  const users = await auth.api.listUsers({
    query: {
      limit,
      offset,
    },
    headers: headersList,
  });
  if (!users?.users) return <p>no users</p>;
  return (
    <UsersTable
      users={users.users}
      limit={limit}
      offset={offset}
      total={users.total}
    />
  );
}
