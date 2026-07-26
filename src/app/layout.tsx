import type { Metadata } from "next"
import { Cormorant_Garamond, Inter, Libre_Baskerville } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quote",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Readers of Aurangabad — Igniting the love for reading",
    template: "%s — Readers of Aurangabad",
  },
  description:
    "An open reading community based in Aurangabad. No boundaries of religion, language, age, gender, profession or educational background — anyone who loves reading is welcome.",
  openGraph: {
    title: "Readers of Aurangabad",
    description: "Igniting the love for reading in Aurangabad",
    type: "website",
    locale: "en_IN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable} ${libreBaskerville.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[--bg-base] text-[--text-primary] font-body antialiased">
        <Providers>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
