"use client";

import React, { createContext, useContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import SmoothScrollWrapper from "./SmoothScrollWrapper";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<Record<string, unknown>>({});

export const useAppContext = () => useContext(AppContext);

export default function ContextProvider({ children }: ContextProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{}}>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        <Toaster richColors position="top-right" closeButton />
      </AppContext.Provider>
    </QueryClientProvider>
  );
}
