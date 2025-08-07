"use client"

import { useEffect, useState } from "react"
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
  Code,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Filter,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  status: "finished" | "in-progress"
  url: string
  image: string
  technologies: string[]
  features: string[]
  year: string
  client?: string
  rating: number
  impact?: string
}

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<"all" | "finished" | "in-progress">("all")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      mixBlendMode: "difference" as any,
    },
  }

  const enterButton = () => setCursorVariant("button")
  const leaveButton = () => setCursorVariant("default")

  const projects: Project[] = [
    {
      id: "openpledge",
      title: "OpenPledge",
      description: "Transparent pledging platform connecting pledgers with verified causes",
      longDescription:
        "A comprehensive platform that revolutionizes charitable transparent giving and real-time impact tracking.",
      category: "Web Platform",
      status: "finished",
      url: "https://openpledge.io",
      image: "/images/portfolio/openpledge-screenshot.png",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe API", "Redis"],
      features: ["Real-time tracking", "Github integration", "Impact metrics"],
      year: "2023",
      client: "OpenPledge j.d.o.o.",
      rating: 5,
      impact: "+200% engagement",
    },
    {
      id: "hoodburger",
      title: "Hoodburger Ordering App",
      description: "Modern food ordering system with real-time kitchen integration",
      longDescription:
        "A sleek ordering application that streamlines the food ordering process with real-time kitchen updates and customer notifications.",
      category: "Mobile & web App",
      status: "finished",
      url: "https://order.hoodburger.si",
      image: "/images/portfolio/hoodburger.png",
      technologies: ["React Native", "Vue.js", "Quasar", "Laravel", "Revolut", "MySQL"],
      features: ["Real-time orders", "Payment integration", "Kitchen dashboard", "Customer tracking"],
      year: "2021",
      client: "Hoodburger",
      rating: 5,
      impact: "+150% order efficiency",
    },
    {
      id: "reboot",
      title: "Reboot Hangover Recovery",
      description: "E-commerce platform for innovative hangover recovery products",
      longDescription:
        "A conversion-optimized e-commerce site for Reboot's hangover recovery gel with subscription management and health tracking.",
      category: "E-commerce",
      status: "finished",
      url: "https://reboot.fun",
      image: "/images/portfolio/reboot-screenshot.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Analytics"],
      features: ["Subscription system", "Health tracking", "Auto-delivery", "Customer portal"],
      year: "2024",
      client: "Reboot",
      rating: 5,
      impact: "+180% conversion rate",
    },
    {
      id: "promppal",
      title: "PrompPal Browser Extension",
      description: "AI-powered browser extension for enhanced productivity and prompt management",
      longDescription:
        "A smart browser extension that helps users manage AI prompts, automate repetitive tasks, and boost productivity across web applications.",
      category: "Browser Extension",
      status: "in-progress",
      url: "http://promppal.benxlabs.com/",
      image: "/images/portfolio/promppal.png",
      technologies: ["JavaScript", "Chrome APIs", "AI/ML", "Local Storage", "Manifest V3"],
      features: ["Prompt library", "Auto-completion", "Cross-site sync", "AI integration"],
      year: "2025",
      rating: 4,
      impact: "Beta testing phase",
    },
    {
      id: "ehrana",
      title: "Ehrana",
      description: "Digital platform for sustainable food solutions and nutrition tracking",
      longDescription:
        "A comprehensive platform focused on sustainable nutrition, meal planning, and connecting users with local, eco-friendly food sources.",
      category: "Web Platform",
      status: "finished",
      url: "https://ehrana.si",
      image: "/images/portfolio/ehrana.png",
      technologies: ["Vue.js", "Symfony", "MySQL", "Expo"],
      features: ["Meal planning", "Local sourcing", "Nutrition tracking", "Sustainability metrics"],
      year: "2019",
      client: "Ehrana",
      rating: 5,
      impact: "+120% user engagement",
    },
    {
      id: "aviator",
      title: "Aviator - plane reservations",
      description: "Digital platform for plane reservations and flight management",
      longDescription:
        "A comprehensive platform that simplifies plane reservations, flight management, and customer engagement for aviation companies.",
      category: "Web Platform",
      status: "finished",
      url:"",
      image: "/images/portfolio/aviator.png",
      technologies: ["Blade", "Laravel", "MySQL"],
      features: ["Flight booking", "Customer management", "Real-time updates"],
      year: "2019",
      client: "Solton",
      rating: 5,
      impact: "+120% user engagement",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    return project.status === activeFilter
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Platform":
        return Globe
      case "Mobile App":
        return Smartphone
      case "E-commerce":
        return Zap
      case "Browser Extension":
        return Code
      default:
        return Palette
    }
  }

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
                href="/projects"
                className="text-emerald-400 font-medium"
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
              <Link href="/projects" className="text-emerald-400 font-medium" onClick={() => setMenuOpen(false)}>
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
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
                Portfolio Showcase
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                My <span className="text-emerald-400">Projects</span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                A collection of web applications, platforms, and digital solutions I've built for clients and personal
                projects. Each project represents a unique challenge and innovative solution.
              </p>

              <small>Many projects are under NDA and cannot be disclosed publicly.</small>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Button
                  variant={activeFilter === "all" ? "default" : "outline"}
                  className={
                    activeFilter === "all"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900"
                      : "border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                  }
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => setActiveFilter("all")}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  All Projects ({projects.length})
                </Button>
                <Button
                  variant={activeFilter === "finished" ? "default" : "outline"}
                  className={
                    activeFilter === "finished"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900"
                      : "border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                  }
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => setActiveFilter("finished")}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Finished ({projects.filter((p) => p.status === "finished").length})
                </Button>
                <Button
                  variant={activeFilter === "in-progress" ? "default" : "outline"}
                  className={
                    activeFilter === "in-progress"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900"
                      : "border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                  }
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => setActiveFilter("in-progress")}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  In Progress ({projects.filter((p) => p.status === "in-progress").length})
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => {
                const IconComponent = getCategoryIcon(project.category)
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    <Card className="bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 h-full overflow-hidden">
                      <div className="relative">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full aspect-[4/3] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge
                            className={
                              project.status === "finished"
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }
                          >
                            {project.status === "finished" ? (
                              <CheckCircle className="mr-1 h-3 w-3" />
                            ) : (
                              <Clock className="mr-1 h-3 w-3" />
                            )}
                            {project.status === "finished" ? "Finished" : "In Progress"}
                          </Badge>
                        </div>

                        {/* Impact Badge */}
                        {project.impact && (
                          <div className="absolute bottom-4 left-4 bg-emerald-500 text-slate-900 text-sm font-bold px-3 py-1 rounded-full">
                            {project.impact}
                          </div>
                        )}

                        {/* Category Icon */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-emerald-400" />
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {[...Array(project.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-slate-400">{project.category}</span>
                          <span className="text-sm text-slate-500">• {project.year}</span>
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="border-slate-700 text-slate-400 text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="border-slate-700 text-slate-400 text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-medium text-slate-300 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.slice(0, 2).map((feature) => (
                              <li key={feature} className="flex items-center text-xs text-slate-400">
                                <CheckCircle className="h-3 w-3 text-emerald-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                            onClick={() => window.open(project.url, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Site
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 bg-transparent"
                            onClick={() => setContactFormOpen(true)}
                          >
                            Similar Project
                          </Button>
                        </div>

                        {project.client && (
                          <div className="mt-4 pt-4 border-t border-slate-700/50">
                            <p className="text-xs text-slate-500">
                              Client: <span className="text-slate-400">{project.client}</span>
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-slate-400 mb-6">Try adjusting your filter to see more projects.</p>
              <Button
                variant="outline"
                className="border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                onClick={() => setActiveFilter("all")}
              >
                Show All Projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
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
                  Start Your Project
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
                <p className="text-slate-400 text-lg">
                  Let's discuss your project and create a solution that exceeds your expectations. Every project starts
                  with a conversation.
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
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => setContactFormOpen(true)}
                >
                  <Calendar className="mr-2 h-4 w-4" /> Schedule a Call
                </Button>
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
                    href="/projects"
                    className="text-emerald-400"
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
                {/* <li>
                  <Link
                    href="mailto:hello@benxlabs.com"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    hello@benxlabs.com
                  </Link>
                </li> */}
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
            <div className="flex space-x-6">
              {/* <Link
                href="#"
                className="text-slate-500 hover:text-emerald-400 text-sm"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-emerald-400 text-sm"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Terms of Service
              </Link> */}
            </div>
          </div>
        </div>
      </footer>

      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </div>
  )
}
