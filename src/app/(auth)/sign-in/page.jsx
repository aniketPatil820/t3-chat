"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { github } from "better-auth";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className=" flex flex-col items-center justify-center min-h-screen bg-background px-4 py-16 md:py-32">
      <div className="flex flex-row justify-center items-center gap-x-2">
        <h1 className="text-3xl font-extrabold text-foreground">Welcome to</h1>
        <Image src={"/t3logo.jpeg"} alt="logo" width={142} height={142} />
      </div>
      <p className="mt-2 text-lg text-muted-foreground font-semibold">
        Sign in below ( we'll increase your message limits if you do 😆)
      </p>
      <Button
        variant={"default"}
        className={
          "max-w-sm mt-5 w-full px-7 py-7 flex flex-row justify-center items-center cursor-pointer"
        }
        onClick={() =>
          signIn.social({
            provider: "github",
            callbackURL: "/",
          })
        }
      >
        <Image src={"/GitHub.svg"} alt="github" height={24} width={24} />
        <span className="font-bold ml-2">Sign in with github</span>
      </Button>
    </section>
  );
};

export default Page;
