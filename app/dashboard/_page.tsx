import { redirect } from "next/navigation";

import { headers } from "next/headers";

import { auth } from "@/lib/auth";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (session?.user?.role === "admin") {
    redirect("/dashboard/admin");
  }
  return <p>default dash</p>;
}
