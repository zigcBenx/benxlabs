"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Calendar,
  MapPin,
  Mic,
  MessageSquare,
  Users,
  Radio,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { appearances, type Appearance } from "@/lib/appearances"

const sortedAppearances = [...appearances].sort((a, b) => b.date.localeCompare(a.date))

const typeConfig: Record<
  Appearance["type"],
  { label: string; color: string; icon: React.ElementType }
> = {
  talk: {
    label: "Talk",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: MessageSquare,
  },
  podcast: {
    label: "Podcast",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: Mic,
  },
  interview: {
    label: "Interview",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    icon: Radio,
  },
  panel: {
    label: "Panel",
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    icon: Users,
  },
}

const actionLabel: Record<Appearance["type"], string> = {
  talk: "Watch",
  podcast: "Listen",
  interview: "Read",
  panel: "Watch",
}

export default function AppearancesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  const variants = {
    default: { x: mousePosition.x - 16, y: mousePosition.y - 16 },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      mixBlendMode: "difference" as const,
    },
  }

  const enterButton = () => setCursorVariant("button")
  const leaveButton = () => setCursorVariant("default")

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-emerald-500/30 z-50 pointer-events-none mix-blend-difference hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-emerald-400/5 rounded-full blur-xl animate-pulse delay-500" />
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-500/20" />
        </svg>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500">
                <Image
                  src="/images/logos/benxlabs.png"
                  alt="Žiga"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-semibold">BenxLabs</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#services"
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                About
              </Link>
              <Link
                href="/#content"
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Content
              </Link>
              <Link
                href="/appearances"
                className="text-emerald-400 font-medium"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Appearances
              </Link>
              <Link
                href="/projects"
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Projects
              </Link>
              <Link
                href="/websites"
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Websites
              </Link>
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 bg-transparent"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
                onClick={() => setContactFormOpen(true)}
              >
                Work With Me
              </Button>
            </div>

            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-slate-950 pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
              <Link
                href="/#services"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#content"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Content
              </Link>
              <Link
                href="/appearances"
                className="text-emerald-400 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Appearances
              </Link>
              <Link
                href="/projects"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/websites"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Websites
              </Link>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-900 font-semibold mt-4"
                onClick={() => {
                  setMenuOpen(false)
                  setContactFormOpen(true)
                }}
              >
                Work With Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge
                variant="secondary"
                className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-1.5 text-sm"
              >
                Speaking & Media
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Public <span className="text-emerald-400">Appearances</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Talks, podcasts, and interviews where I share insights on software development, AI, and building
                products. Reach out if you'd like to collaborate on an episode or have me speak at your event.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appearances Grid */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedAppearances.map((appearance, index) => {
              const config = typeConfig[appearance.type]
              const Icon = config.icon
              const hasLink = appearance.link && appearance.link !== "#"
              const hasLink2 = appearance.link2 && appearance.link2 !== "#"

              return (
                <motion.div
                  key={appearance.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <Card className="bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 h-full overflow-hidden flex flex-col">
                    {appearance.image ? (
                      <div className="relative">
                        <Image
                          src={appearance.image}
                          alt={appearance.title}
                          width={400}
                          height={220}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className={config.color}>
                            {config.label}
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="relative bg-slate-900/60 aspect-video flex items-center justify-center border-b border-slate-700/50">
                        <Icon className="h-12 w-12 text-slate-600" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className={config.color}>
                            {config.label}
                          </Badge>
                        </div>
                      </div>
                    )}

                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {appearance.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {appearance.location}
                        </span>
                      </div>

                      <div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-3">
                        {appearance.host}
                      </div>

                      <h3 className="text-lg font-semibold mb-3 leading-snug">{appearance.title}</h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                        {appearance.description}
                      </p>

                      {(hasLink || hasLink2) && (
                        <div className={`flex gap-2 ${hasLink2 ? "flex-col sm:flex-row" : ""}`}>
                          {hasLink && (
                            <Link href={appearance.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                              >
                                {actionLabel[appearance.type]} <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                          {hasLink2 && (
                            <Link href={appearance.link2!} target="_blank" rel="noopener noreferrer" className="flex-1">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                              >
                                {appearance.link2Label ?? "Part 2"} <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
                  Let's Connect
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Me on Your Podcast or Event?</h2>
                <p className="text-slate-400 text-lg">
                  I speak about AI, web development, and building products. If you think your audience would benefit,
                  let's make it happen.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-900 font-semibold"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => setContactFormOpen(true)}
                >
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Back to Homepage
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 lg:px-8 py-12 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500">
                  <Image
                    src="/images/logos/benxlabs.png"
                    alt="Žiga"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-semibold">BenxLabs</span>
              </div>
              <p className="text-slate-400 mb-6">
                Building digital experiences and AI solutions with the developer community.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/appearances"
                    className="text-emerald-400"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Appearances
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/websites"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Websites
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => setContactFormOpen(true)}
                  >
                    Custom Development
                  </button>
                </li>
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => setContactFormOpen(true)}
                  >
                    AI Solutions
                  </button>
                </li>
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => setContactFormOpen(true)}
                  >
                    Consulting
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => setContactFormOpen(true)}
                  >
                    Start a Project
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BenxLabs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </div>
  )
}
