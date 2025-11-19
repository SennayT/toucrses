"use client";

import { Prisma } from "@/app/generated/prisma/client";
import { Editor } from "@/components/editor/editor";
import axios from "axios";
import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";

interface Props {
  course: Prisma.CourseGetPayload<{ include: null }> | null;
}
export function CourseEditor({ course }: Props) {
  const [description, setDescripton] = useState(course?.description ?? "");
  const [topics, setTopics] = useState(course?.topics ?? "");
  const [courseInfo, setCourseInfo] = useState(course?.courseInfo ?? "");
  const [jobRoles, setJobRoles] = useState(course?.jobRoles ?? "");
  const [trainers, setTrainers] = useState(course?.trainers ?? "");

  const [courseName, setCourseName] = useState(course?.name ?? "");
  const [fee, setFee] = useState(course?.fee ?? "");
  const [courseCode, setCourseCode] = useState(course?.courseCode ?? "");
  const [session, setSession] = useState(course?.session ?? "");
  const [duration, setDuration] = useState(course?.duration ?? "");
  const [venue, setVenue] = useState(course?.venue ?? "");
  const [level, setLevel] = useState(course?.level ?? "");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!course?.id) return;
    setIsSubmitting(true);
    try {
      await axios.patch(`/api/courses/${course.id}`, {
        name: courseName,
        description,
        topics,
        courseInfo,
        jobRoles,
        trainers,
        courseCode,
        fee: typeof fee === "number" ? fee : Number(fee),
        session: Number(session) || 0,
        duration: Number(duration) || 0,
        venue,
        level,
      });
      enqueueSnackbar("Course updated successfully", { variant: "success" });
    } catch (err) {
      console.error("Failed to update course", err);
      enqueueSnackbar("Could Not Update Course", { variant: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography>Course Name</Typography>
        <TextField
          value={courseName}
          onChange={(e) => setCourseName(e?.target?.value)}
          fullWidth
        />
      </Grid>

      <Grid size={4}>
        <Typography>Course Fee</Typography>
        <TextField
          value={fee}
          onChange={(e) => setFee(Number(e?.target?.value))}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <Typography>Course Code</Typography>
        <TextField
          value={courseCode}
          onChange={(e) => setCourseCode(e?.target?.value)}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <Typography>Course Session</Typography>
        <TextField
          value={session}
          onChange={(e) => setSession(e?.target?.value)}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <Typography>Course Duration</Typography>
        <TextField
          value={duration}
          onChange={(e) => setDuration(e?.target?.value)}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <Typography>Course Venue</Typography>
        <TextField
          value={venue}
          onChange={(e) => setVenue(e?.target?.value)}
          fullWidth
        />
      </Grid>
      <Grid size={4}>
        <Typography>Course Level</Typography>
        <TextField
          value={level}
          onChange={(e) => setLevel(e?.target?.value)}
          fullWidth
        />
      </Grid>
      <Grid size={12}>
        <Typography>Description</Typography>
        <Editor
          initialValue={course?.description ?? ""}
          onChange={(val) => {
            setDescripton(val);
          }}
        />
      </Grid>
      <Grid size={12}>
        <Typography>Trainers</Typography>
        <Editor
          initialValue={course?.trainers ?? ""}
          onChange={(val) => {
            setTrainers(val);
          }}
        />
      </Grid>

      <Grid size={12}>
        <Typography>Topics</Typography>
        <Editor
          initialValue={course?.topics ?? ""}
          onChange={(val) => {
            setTopics(val);
          }}
        />
      </Grid>
      <Grid size={12}>
        <Typography>Course Info</Typography>
        <Editor
          initialValue={course?.courseInfo ?? ""}
          onChange={(val) => {
            setCourseInfo(val);
          }}
        />
      </Grid>
      <Grid size={12}>
        <Typography>Job Roles</Typography>
        <Editor
          initialValue={course?.jobRoles ?? ""}
          onChange={(val) => {
            setJobRoles(val);
          }}
        />
      </Grid>
      <Grid size={12}>
        <Button
          loading={isSubmitting}
          variant="contained"
          onClick={submit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </Grid>
    </Grid>
  );
}
