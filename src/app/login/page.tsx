import type { Metadata } from "next"
import { LogoMark } from "@/lib/mughal-patterns"
import { LoginButton } from "@/components/ui/auth-buttons"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to Readers of Aurangabad",
}

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-lg border border-[--border-hairline] bg-[--surface-card] p-8 amber-shadow text-center">
        <LogoMark className="mx-auto h-12 w-12 text-[--accent-brass]" />
        <h1 className="mt-4 font-heading text-xl tracking-wide text-[--text-primary]">
          Welcome to Readers of Aurangabad
        </h1>
        <p className="mt-2 text-sm text-[--text-secondary]">
          Sign in to suggest books, write reviews, and join the conversation.
        </p>
        <div className="mt-8">
          <LoginButton className="w-full justify-center" />
        </div>
        <p className="mt-6 text-xs text-[--text-secondary]">
          By signing in, you agree to our community guidelines.
        </p>
      </div>
    </div>
  )
}
