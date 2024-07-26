"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          footer: "hidden",
        },
      }}
      path="/sign-in"
    />
  );
}
