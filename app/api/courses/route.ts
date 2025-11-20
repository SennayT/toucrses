import prisma from "@/lib/prisma";
import { Prisma } from "@/app/generated/prisma/client";
import { NextResponse } from "next/server";

type CourseCreatePayload = {
  name?: unknown;
  description?: unknown;
  fee?: unknown;
  topics?: unknown;
  courseInfo?: unknown;
  jobRoles?: unknown;
  courseCode?: unknown;
  trainers?: unknown;
  session?: unknown;
  duration?: unknown;
  venue?: unknown;
  level?: unknown;
  notes?: unknown;
  categoryId?: unknown;
};

const requiredStringFields = [
  "name",
  "description",
  "topics",
  "courseInfo",
  "jobRoles",
  "courseCode",
  "trainers",
  "venue",
  "level",
  "categoryId",
] as const;

function expectString(value: unknown, field: string) {
  if (typeof value !== "string") {
    throw new Error(`Field "${field}" must be a string`);
  }
  const trimmed = value.trim();
  if (!trimmed.length) {
    throw new Error(`Field "${field}" cannot be empty`);
  }
  return trimmed;
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

export async function POST(request: Request) {
  let payload: CourseCreatePayload;
  try {
    payload = (await request.json()) as CourseCreatePayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  const data: Prisma.CourseCreateInput = {} as Prisma.CourseCreateInput;

  try {
    for (const field of requiredStringFields) {
      if (payload[field] === undefined) {
        throw new Error(`Field "${field}" is required`);
      }
    }

    data.name = expectString(payload.name, "name");
    data.description = expectString(payload.description, "description");
    data.topics = expectString(payload.topics, "topics");
    data.courseInfo = expectString(payload.courseInfo, "courseInfo");
    data.jobRoles = expectString(payload.jobRoles, "jobRoles");
    data.courseCode = expectString(payload.courseCode, "courseCode");
    data.trainers = expectString(payload.trainers, "trainers");
    data.venue = expectString(payload.venue, "venue");
    data.level = expectString(payload.level, "level");

    const categoryId = expectString(payload.categoryId, "categoryId");
    data.category = { connect: { id: categoryId } };

    data.fee = coerceNumber(payload.fee, "fee");
    data.session = coerceNumber(payload.session, "session", {
      integer: true,
    });
    data.duration = coerceNumber(payload.duration, "duration", {
      integer: true,
    });
    data.notes = [];

    if (payload.notes !== undefined) {
      data.notes = payload.notes as Prisma.InputJsonValue;
    }
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }

  try {
    const course = await prisma.course.create({ data });
    return NextResponse.json({ data: course }, { status: 201 });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Course with the same unique fields already exists" },
        { status: 409 }
      );
    }

    console.error("[COURSE_CREATE]", error);
    return NextResponse.json(
      { error: "Unable to create course" },
      { status: 500 }
    );
  }
}
