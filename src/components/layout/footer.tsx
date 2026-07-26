import Link from "next/link"
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import { LogoMark, DomeDivider } from "@/lib/mughal-patterns"

export function Footer() {
  return (
    <footer className="relative border-t border-[--border-hairline] bg-[--bg-alt]">
      <div className="jali-bg">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <LogoMark className="mb-4 h-10 w-10 text-[--accent-gold]" />
            <h3 className="font-heading text-xl tracking-wider text-[--text-primary]">{SITE_NAME}</h3>
            <p className="mt-1 text-sm text-[--text-secondary]">
              Igniting the love for reading in Aurangabad
            </p>
          </div>

          <DomeDivider className="mx-auto my-8 text-[--accent-gold]" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="mb-3 font-heading text-sm tracking-widest uppercase text-[--accent-gold]">Navigate</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[--text-secondary] hover:text-[--accent-gold] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-heading text-sm tracking-widest uppercase text-[--accent-gold]">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-sm text-[--text-secondary] hover:text-[--accent-gold] transition-colors">
                    {SOCIAL_LINKS.email}
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[--text-secondary] hover:text-[--accent-gold] transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-[--text-secondary] hover:text-[--accent-gold] transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-heading text-sm tracking-widest uppercase text-[--accent-gold]">About</h4>
              <p className="text-sm leading-relaxed text-[--text-secondary]">
                An open reading community in Aurangabad. No boundaries of religion, language, age, or gender — anyone who loves reading is welcome.
              </p>
            </div>
          </div>

          <DomeDivider className="mx-auto my-8 text-[--accent-gold]" />

          <div className="text-center">
            <p className="text-xs text-[--text-secondary]">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
