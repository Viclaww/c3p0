"use client";
import { useEffect } from "react";
import Chat from "../chat/_components/chat";

import NotLoggedInAlert from "../chat/_components/not-logged-in-alert";
import { useChat } from "../chat/_contexts/chat";

export default function Home() {
  const { sendMessage } = useChat();

  useEffect(() => {
    sendMessage("Trending tokens");
  }, []);
  return (
    <div className="h-full w-full">
      <Chat />
      <NotLoggedInAlert />
    </div>
  );
}
