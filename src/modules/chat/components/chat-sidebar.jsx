"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  EllipsisIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  Trash,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import UserButton from "../../components/user-button";

const ChatSidebar = () => {
  return (
    <div className="flex h-full w-64 flex-col  border-r border-border  bg-sidebar">
      <div className="flex items-center justify-between border-b border-sidebar-border px-4 py-3">
        <div className=" flex items-center gap-2">
          <Image src={"/t3logo.jpeg"} alt="Logo" height={100} width={100} />
        </div>
      </div>
      <div className="p-4">
        <Link href={"/"}>
          <Button className={"w-full"}>
            <PlusIcon className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChatSidebar;
