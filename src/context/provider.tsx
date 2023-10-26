"use client";

import { SessionProvider } from "next-auth/react";
import { AppProvider } from "./appContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AppProvider>{children}</AppProvider>
    </SessionProvider>
  );
}
