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
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
} from "@mui/icons-material";
import { UserWithRole } from "better-auth/plugins";
import { Box, Button, IconButton, MenuItem, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Prisma } from "@/app/generated/prisma/client";
import { useEffect, useState } from "react";

const columns: MRT_ColumnDef<
  Prisma.CourseCategoryGetPayload<{ include: { parent: true } }>
>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },

  {
    header: "Parent",
    accessorKey: "parent.name",
  },
];

interface Props {
  categories: Prisma.CourseCategoryGetPayload<{ include: { parent: true } }>[];
  limit: number;
  offset: number;
  total: number;
}
export function CategoriesTable({ categories, limit, offset, total }: Props) {
  const router = useRouter();
  const [pagination, setPagination] = useState({
    pageIndex: offset,
    pageSize: limit, //customize the default page size
  });

  useEffect(() => {
    router.push(
      `/dashboard/categories?limit=${pagination.pageSize}&offset=${pagination.pageIndex}`
    );
  }, [pagination.pageIndex, pagination.pageSize]);

  const table = useMaterialReactTable({
    columns,
    data: categories ?? [],
    onPaginationChange: setPagination, //hoist pagination state to your state when it changes internally
    state: { pagination },
    manualPagination: true,
    rowCount: total,
    renderTopToolbarCustomActions: () => (
      <Typography variant="h4">Categories Table</Typography>
    ),
    renderToolbarInternalActions: ({ table }) => (
      <>
        {/* add your own custom print button or something */}

        {/* built-in buttons (must pass in table prop for them to work!) */}
        <Link href="/dashboard/categories/new">
          <Button>Add New Category</Button>
        </Link>
        <MRT_ToggleFullScreenButton table={table} />
        <MRT_GlobalFilterTextField table={table} />
        <MRT_ShowHideColumnsButton table={table} />
        <MRT_ToggleDensePaddingButton table={table} />
        <MRT_ToggleFiltersButton table={table} />
      </>
    ),
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Box>
        <Link href={`/dashboard/categories/${row?.original?.id}`}>
          <IconButton onClick={() => console.info("Edit")}>
            <EditIcon />
          </IconButton>
        </Link>
      </Box>
    ),
  });
  return <MaterialReactTable table={table} />;
}
