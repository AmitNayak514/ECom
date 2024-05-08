import { auth } from "@clerk/nextjs/server";
import React from "react";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId: userId,
    },
  });

  if (store) {
    redirect(`${store.id}`);
  }
  return null;
}
