import Link from "next/link"
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import { LogoMark, DomeDivider, ExLibrisStamp } from "@/lib/mughal-patterns"
import { SocialIcons } from "@/components/ui/social-icons"

export function Footer() {
  return (
    <footer className="relative border-t border-[--border-hairline] bg-[--bg-alt]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center text-center mb-8">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <LogoMark className="h-9 w-9" />
              <span className="font-heading text-lg tracking-wider text-[--text-primary]">{SITE_NAME}</span>
              <ExLibrisStamp className="h-6 w-6 text-[--accent-gold-leaf] opacity-70" />
            </Link>
            <p className="text-sm text-[--text-secondary] max-w-md">
              Igniting the love for reading in Aurangabad — one Sunday, one book, one conversation at a time.
            </p>
            <SocialIcons className="mt-4 justify-center" />
          </div>

          <DomeDivider className="mx-auto mb-8 text-[--accent-brass]" />

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm">
            <div>
              <h4 className="mb-3 text-xs tracking-widest uppercase text-[--accent-brass-text] font-heading">Navigate</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[--text-secondary] hover:text-[--accent-brass] transition-colors duration-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs tracking-widest uppercase text-[--accent-brass-text] font-heading">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-[--text-secondary] hover:text-[--accent-brass] transition-colors duration-400">
                    {SOCIAL_LINKS.email}
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-[--text-secondary] hover:text-[--accent-brass] transition-colors duration-400">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[--text-secondary] hover:text-[--accent-brass] transition-colors duration-400">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-[--text-secondary] hover:text-[--accent-brass] transition-colors duration-400">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-3 text-xs tracking-widest uppercase text-[--accent-brass-text] font-heading">About</h4>
              <p className="text-[--text-secondary] leading-relaxed">
                An open reading community in Aurangabad. No boundaries of religion, language, age, or gender — anyone who loves reading is welcome.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-[--border-hairline] text-center">
            <p className="text-xs text-[--text-secondary]">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <p className="mt-1.5 text-xs text-[--text-secondary]/70">
              Crafted for Book Lovers with 💓 by Shoyeb Khan
            </p>
          </div>
        </div>
    </footer>
  )
}
