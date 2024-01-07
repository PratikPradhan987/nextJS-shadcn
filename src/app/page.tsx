"use client";

import Contactus from "@/components/app-components/contactus";
import Draweer from "@/components/app-components/drawer";
import { ResizableDemo } from "@/components/app-components/modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl">{">"} Hello USER</h1>
      </div>

      <ResizableDemo />
      <div className="mt-4"></div>
      <Draweer />
      <Contactus />
    </main>
  );
}
