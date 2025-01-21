import React from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<Props> = ({ className, showText = false }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/c3p0.png"
        alt="Logo"
        width={100}
        height={100}
        className={cn("w-10 h-10 hidden dark:block rounded-full", className)}
      />
      <Image
        src="/cp30.png"
        alt="Logo"
        width={100}
        height={100}
        className={cn("w-10 h-10 block dark:hidden rounded-full", className)}
      />
      {showText && <span className="text-lg font-bold">C-3P0</span>}
    </div>
  );
};

export default Logo;
