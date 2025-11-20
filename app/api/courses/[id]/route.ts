import prisma from "@/lib/prisma";
import { Prisma } from "@/app/generated/prisma/client";
import { NextResponse } from "next/server";

type RouteContext = {
  params: {
    id: string;
  };
};

type CourseUpdatePayload = Record<string, unknown>;

function assertString(value: unknown, field: string) {
  if (typeof value !== "string") {
    throw new Error(`Field "${field}" must be a string`);
  }
  return value.trim();
}

function coerceNumber(
  value: unknown,
  field: string,
  options?: { integer?: boolean }
) {
  const coerced = Number(value);
  if (!Number.isFinite(coerced)) {
    throw new Error(`Field "${field}" must be a number`);
  }
  if (options?.integer && !Number.isInteger(coerced)) {
    throw new Error(`Field "${field}" must be an integer`);
  }
  return coerced;
}

function buildUpdateData(payload: CourseUpdatePayload) {
  const data: Prisma.CourseUpdateInput = {};

  if (payload.name !== undefined) {
    const value = assertString(payload.name, "name");
    if (!value.length) throw new Error('Field "name" cannot be empty');
    data.name = value;
  }

  if (payload.description !== undefined) {
    const value = assertString(payload.description, "description");
    if (!value.length) throw new Error('Field "description" cannot be empty');
    data.description = value;
  }

  if (payload.topics !== undefined) {
    const value = assertString(payload.topics, "topics");
    if (!value.length) throw new Error('Field "topics" cannot be empty');
    data.topics = value;
  }

  if (payload.courseInfo !== undefined) {
    const value = assertString(payload.courseInfo, "courseInfo");
    if (!value.length) throw new Error('Field "courseInfo" cannot be empty');
    data.courseInfo = value;
  }

  if (payload.jobRoles !== undefined) {
    const value = assertString(payload.jobRoles, "jobRoles");
    if (!value.length) throw new Error('Field "jobRoles" cannot be empty');
    data.jobRoles = value;
  }

  if (payload.courseCode !== undefined) {
    const value = assertString(payload.courseCode, "courseCode");
    if (!value.length) throw new Error('Field "courseCode" cannot be empty');
    data.courseCode = value;
  }

  if (payload.trainers !== undefined) {
    const value = assertString(payload.trainers, "trainers");
    if (!value.length) throw new Error('Field "trainers" cannot be empty');
    data.trainers = value;
  }

  if (payload.venue !== undefined) {
    const value = assertString(payload.venue, "venue");
    if (!value.length) throw new Error('Field "venue" cannot be empty');
    data.venue = value;
  }

  if (payload.level !== undefined) {
    const value = assertString(payload.level, "level");
    if (!value.length) throw new Error('Field "level" cannot be empty');
    data.level = value;
  }

  if (payload.categoryId !== undefined) {
    const value = assertString(payload.categoryId, "categoryId");
    if (!value.length) throw new Error('Field "categoryId" cannot be empty');
    data.category = { connect: { id: value } };
  }

  if (payload.fee !== undefined) {
    data.fee = coerceNumber(payload.fee, "fee");
  }

  if (payload.session !== undefined) {
    data.session = coerceNumber(payload.session, "session", { integer: true });
  }

  if (payload.duration !== undefined) {
    data.duration = coerceNumber(payload.duration, "duration", {
      integer: true,
    });
  }

  if (payload.notes !== undefined) {
    data.notes = payload.notes as Prisma.InputJsonValue;
  }

  return data;
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const courseId = (await context.params)?.id;

  if (!courseId) {
    return NextResponse.json(
      { error: "Course id is required in the route parameter" },
      { status: 400 }
    );
  }

  let body: CourseUpdatePayload;
  try {
    body = (await request.json()) as CourseUpdatePayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  let data: Prisma.CourseUpdateInput;
  try {
    data = buildUpdateData(body);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }

  if (!Object.keys(data).length) {
    return NextResponse.json(
      { error: "At least one field must be provided for update" },
      { status: 400 }
    );
  }

  try {
    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data,
    });

    return NextResponse.json({ data: updatedCourse }, { status: 200 });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    console.error("[COURSE_UPDATE]", error);
    return NextResponse.json(
      { error: "Unable to update course" },
      { status: 500 }
    );
  }
}
