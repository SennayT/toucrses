"use client";
import { Prisma } from "@/app/generated/prisma/client";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CategoryEditorProps {
  category?: Prisma.CourseCategoryGetPayload<{ include: null }> | null;
}

export const CategoryEditor = ({ category }: CategoryEditorProps) => {
  return <p>hi</p>
};
