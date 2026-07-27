export const SITE_NAME = "Readers of Aurangabad"
export const SITE_TAGLINE = "Igniting the love for reading in Aurangabad"
export const SITE_DESCRIPTION =
  "An open reading community based in Aurangabad — no boundaries of religion, language, age, gender, profession or educational background. Anyone who loves reading, or wants to develop the habit, is welcome."

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/community", label: "Community" },
  { href: "/books", label: "Books" },
  { href: "/meetups", label: "Meetups" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/readers.of.aurangabad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  whatsapp: "https://chat.whatsapp.com/DsTlkqgFef5LX5cLFdm2dO",
  telegram: "https://t.me/readersofaurangabad",
  email: "hello@readersofaurangabad.in",
} as const

export const READING_JOURNEY_STEPS = [
  {
    step: 1,
    title: "Discover",
    description: "Find books that speak to you through curated recommendations from our community.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Meet",
    description: "Join us every Sunday at a new venue across Aurangabad for silent reading and discussion.",
    icon: "Users",
  },
  {
    step: 3,
    title: "Read",
    description: "Spend 45–60 minutes in quiet reading, surrounded by fellow book lovers.",
    icon: "BookOpen",
  },
  {
    step: 4,
    title: "Reflect",
    description: "Share thoughts, exchange ideas, and grow through meaningful conversation over tea.",
    icon: "MessageCircle",
  },
] as const
