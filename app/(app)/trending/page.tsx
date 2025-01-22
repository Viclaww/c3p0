"use client";
import { useEffect } from "react";
import Chat from "../chat/_components/chat";

import NotLoggedInAlert from "../chat/_components/not-logged-in-alert";
import { useChat } from "../chat/_contexts/chat";

export default function Home() {
  const { setInput, onSubmit } = useChat();

  useEffect(() => {
    setInput("Trending tokens");

    setTimeout(() => {
      onSubmit();
    }, 1000);
  }, []);
  return (
    <div className="h-full w-full">
      <Chat />
      <NotLoggedInAlert />
    </div>
  );
}
