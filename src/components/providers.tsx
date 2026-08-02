"use client"

import { ThemeProvider } from "next-themes"
import { type ReactNode } from "react"
import { AuthProvider } from "@/components/auth-provider"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}
