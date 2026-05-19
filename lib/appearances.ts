export interface Appearance {
  id: string
  title: string
  type: "talk" | "podcast" | "interview" | "panel"
  host: string
  date: string
  location: string
  description: string
  link: string
  link2?: string      // optional second link (e.g. two-part recordings)
  link2Label?: string // label for the second link button
  image?: string      // place image files in /public/images/appearances/
  featured?: boolean
}

export const appearances: Appearance[] = [
  {
    id: "startup-weekend-2023",
    title: "OpenPledge — Startup Weekend Pitch",
    type: "talk",
    host: "Startup Weekend @ School of Economics Ljubljana",
    date: "2023",
    location: "Ljubljana",
    description:
      "First public introduction of OpenPledge, the startup I co-founded. I prepared the pitch deck and presented in front of 250 students, professors, and investors. We won the competition and secured a pre-seed investment of €50K from Fil Rouge Capital.",
    link: "https://lui.si/novice/startup-vikend-2023/",
    image: "/images/appearances/present.jpeg",
    featured: true,
  },
  {
    id: "laravel-meetup-2024",
    title: "Debugger for Laravel — Best Practices & Use Cases",
    type: "talk",
    host: "Laravel Meetup Slovenia",
    date: "2024",
    location: "Ljubljana",
    description:
      "My first meetup talk. I walked the audience through practical use cases and best practices for using the Debugger for Laravel, covering how it speeds up development and simplifies complex debugging scenarios.",
    link: "/files/debugger-talk.pdf",
    image: "/images/appearances/laraveldebugger.jpeg",
    featured: false,
  },
  {
    id: "founder-games-tv-2024",
    title: "Founder Games — Season 1, Episode 2",
    type: "talk",
    host: "Founder Games (reality show)",
    date: "2024",
    location: "Slovenia",
    description:
      "Featured in the second episode of Founder Games, a startup reality show, where I stepped in to help another startup team with their product and strategy.",
    link: "https://voyo.rtl.hr/sadrzaj/founder-games",
    image: "/images/appearances/s1e2.jpeg",
    featured: false,
  },
  {
    id: "founder-games-podcast-2025",
    title: "Our Startup Journey — Founder Games Podcast",
    type: "podcast",
    host: "Founder Games Podcast",
    date: "2025",
    location: "Online",
    description:
      "My co-founder and I were interviewed about the full journey behind our startup — the highs, the hard lessons, and what we'd do differently.",
    link: "https://www.youtube.com/watch?v=U9xkke89K-c",
    image: "/images/appearances/foundergamespodcast.jpeg",
    featured: false,
  },
  {
    id: "ideas-are-cheap-podcast-2025",
    title: "Ideas are cheap: More than just GitHub stars – get paid for your code",
    type: "podcast",
    host: "Robert Šefman",
    date: "2025",
    location: "Online",
    description:
      "Talked about OpenPledge, my role as co-founder, and where the idea originated — exploring how open-source developers can turn their work into a sustainable business.",
    link: "https://www.youtube.com/watch?v=2GR27MQMuww",
    image: "/images/appearances/ideasarecheap.jpg",
    featured: false,
  },
  {
    id: "founder-games-demoday-2025",
    title: "Founder Games Demo Day",
    type: "talk",
    host: "Founder Games",
    date: "2025",
    location: "Live",
    description:
      "My co-founder and I presented our startup in form of 4min investor pitch in front of 100 attendees (investors, startups, business people).",
    link: "#",
    image: "/images/appearances/demoday.jpeg",
    featured: false,
  },
  {
    id: "gluon-syndicate-2025",
    title: "Gluon Syndicate Startup Pitch",
    type: "panel",
    host: "Gluon Syndicate",
    date: "2025",
    location: "Slovenia",
    description:
      "My co-founder and I pitched among 9 startups in front of a panel of investors. We won the competition, but ultimately fell €20K short of our investment target.",
    link: "https://www.youtube.com/watch?v=3Dbgm_LQTC4",
    link2: "https://www.youtube.com/watch?v=0Dnt0-1Bakk",
    link2Label: "Watch Part 2",
    image: "/images/appearances/gluon.jpeg",
    featured: true,
  },
  {
    id: "laravel-meetup-2026",
    title: "Claude Code for Every Team Size",
    type: "talk",
    host: "Laravel Meetup Slovenia",
    date: "2026",
    location: "Ljubljana",
    description:
      "A talk on best practices for using Claude Code across different team contexts — indie projects, startups, and larger corporations — covering workflow integration, prompt strategies, and pitfalls to avoid.",
    link: "/files/claude-talk.pdf",
    image: "/images/appearances/laravelmeetai.jpeg",
    featured: false,
  },
  {
    id: "frekvenca-znanj-2026",
    title: "From Highschool Hobby to Dev Career — Frekvenca Znanja",
    type: "podcast",
    host: "Frekvenca Znanj (Škofijska klasična gimnazija)",
    date: "2026",
    location: "Online",
    description:
      "Invited to the podcast of my highschool to share my early development journey, what got me into programming, and advice for the younger generation just starting out.",
    link: "https://www.youtube.com/watch?v=20RyFO1nlEw",
    image: "/images/appearances/podcastfrekvenca.webp",
    featured: true,
  },
  {
    id: "sportklub-interview-2026",
    title: "Training Logger App — Sportklub Interview",
    type: "interview",
    host: "Sportklub",
    date: "2026",
    location: "Slovenia",
    description:
      "Interviewed by a Sportklub reporter about a training tracking app I built in one month for track and field athletes — letting them log sessions and view a wrapped summary of their season.",
    link: "https://sportklub.n1info.si/atletika/ziga-benko/",
    image: "/images/appearances/sportklub.png",
    featured: false,
  },
]

export const featuredAppearances = appearances.filter((a) => a.featured)
