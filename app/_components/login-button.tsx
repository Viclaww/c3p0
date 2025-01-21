"use client";

import React from "react";

import { useLogin, usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

const LoginButton: React.FC = () => {
  const router = useRouter();

  const { authenticated } = usePrivy();

  const { login } = useLogin({
    onComplete: (_, __, wasAlreadyAuthenticated) => {
      if (!wasAlreadyAuthenticated) {
        router.replace("/chat");
      }
    },
  });

  if (authenticated)
    return (
      <Link href="/chat">
        <Button variant={"cp30"}>
          Enter Dashboard{" "}
          <span className="">
            <ChevronRight />
          </span>
        </Button>
      </Link>
    );

  return (
    <Button variant={"cp30"} onClick={() => login()} disabled={authenticated}>
      Login
    </Button>
  );
};

export default LoginButton;
