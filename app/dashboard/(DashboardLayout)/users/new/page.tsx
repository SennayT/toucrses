"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Alert,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

// Define validation schema
const userSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.enum(["user", "admin"]),
});

type UserFormData = z.infer<typeof userSchema>;

export default function CreateUserPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: "user",
    },
  });

  const onSubmit = async (data: UserFormData) => {
    try {
      setIsSubmitting(true);
      // Replace with your actual API call
      await authClient.admin.createUser({
        email: data.email,
        password: data.password,
        name: data.name,
        role: data.role,
      });
      // const response = await fetch("/api/users", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to create user");
      // }

      setSnackbar({
        open: true,
        message: "User created successfully!",
        severity: "success",
      });

      // Reset form and redirect after a short delay
      reset();
      setTimeout(() => {
        router.push("/dashboard/users");
      }, 1500);
    } catch (error) {
      console.error("Error creating user:", error);
      setSnackbar({
        open: true,
        message:
          error instanceof Error ? error.message : "Failed to create user",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Typography variant="h4" component="h1" className="font-bold text-2xl">
          Create New User
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Add a new user to the system
        </Typography>
      </div>

      <Paper className="p-6 max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  className="bg-white"
                />
              )}
            />

            {/* Email Field */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  className="bg-white"
                />
              )}
            />

            {/* Password Field */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={!!errors.password}
                  helperText={
                    errors.password?.message ||
                    "At least 8 characters with uppercase, lowercase, number, and special character"
                  }
                  className="bg-white"
                />
              )}
            />

            {/* Role Field */}
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <FormControl
                  fullWidth
                  error={!!errors.role}
                  className="bg-white"
                >
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    {...field}
                    labelId="role-label"
                    label="Role"
                    error={!!errors.role}
                  >
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="instructor">Instructor</MenuItem>
                  </Select>
                  {errors.role && (
                    <FormHelperText>{errors.role.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button
              variant="outlined"
              onClick={() => router.push("/dashboard/users")}
              disabled={isSubmitting}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              className="px-6"
              startIcon={
                isSubmitting ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null
              }
            >
              {isSubmitting ? "Creating..." : "Create User"}
            </Button>
          </div>
        </form>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          className="w-full"
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
