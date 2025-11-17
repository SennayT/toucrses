"use client";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  useMaterialReactTable,
} from "material-react-table";

import { UserWithRole } from "better-auth/plugins";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

const columns: MRT_ColumnDef<UserWithRole>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Email Verified",
    accessorKey: "emailVerified",
    accessorFn({ emailVerified }) {
      if (emailVerified) return "Yes";
      else return "No";
    },
  },
  {
    header: "Role",
    accessorKey: "role",
  },
];

interface Props {
  users: UserWithRole[];
  total: number;
  limit: number;
  offset: number;
}
export function UsersTable({ users }: Props) {
  const router = useRouter();
  const table = useMaterialReactTable({
    columns,
    data: users ?? [],
    renderTopToolbarCustomActions: () => (
      <Typography variant="h4">Users Table</Typography>
    ),
    renderToolbarInternalActions: ({ table }) => (
      <>
        {/* add your own custom print button or something */}

        {/* built-in buttons (must pass in table prop for them to work!) */}
        <Link href="/dashboard/users/new">
          <Button>Add User</Button>
        </Link>
        <MRT_ToggleFullScreenButton table={table} />
        <MRT_GlobalFilterTextField table={table} />
        <MRT_ShowHideColumnsButton table={table} />
        <MRT_ToggleDensePaddingButton table={table} />
        <MRT_ToggleFiltersButton table={table} />
      </>
    ),
  });
  return <MaterialReactTable table={table} />;
}
