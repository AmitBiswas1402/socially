"use client"; // This ensures it runs on the client

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function AuthNavbar() {
  const { isSignedIn } = useAuth(); // Detects login state dynamically

  return (
    <>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <SignInButton mode="modal">
          <Button variant="default">Sign In</Button>
        </SignInButton>
      )}
    </>
  );
}
