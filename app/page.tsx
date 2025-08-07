"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Menu,
  X,
  ArrowUpRight,
  Play,
  Code,
  Palette,
  Rocket,
  MessageSquare,
  Youtube,
  Linkedin,
  Twitter,
  ExternalLink,
  Calendar,
  Eye,
  Brain,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [preselectedProject, setPreselectedProject] = useState<string>("")

  // Floating particles state
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>(
    [],
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Initialize floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
    }))
    setParticles(newParticles)

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
          y: particle.y < -10 ? window.innerHeight + 10 : particle.y - particle.speed,
        })),
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
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

  const openContactForm = (projectType?: string) => {
    if (projectType) {
      setPreselectedProject(projectType)
    }
    setContactFormOpen(true)
  }

  const services = [
    {
      title: "AI Business Optimization",
      description: "Automate processes and optimize operations with custom AI solutions",
      icon: Brain,
      projectType: "ai-optimization",
    },
    {
      title: "Custom Websites",
      description: "High-converting websites that turn visitors into customers",
      icon: Code,
      link: "/websites",
    },
    {
      title: "Web Applications",
      description: "Full-stack applications built with modern technologies",
      icon: Palette,
      projectType: "webapp",
    },
    {
      title: "Startup MVPs",
      description: "Rapid prototyping and MVP development for startups",
      icon: Rocket,
      projectType: "mvp",
    },
    {
      title: "Developer 1-on-1",
      description: "Personal mentoring and code reviews for developers",
      icon: MessageSquare,
      projectType: "mentoring",
    },
  ]

  const clients = [
    { name: "OpenPledge", logo: "/images/logos/openpledge.png" },
    { name: "DEWESoft", logo: "/images/logos/dewesoft.png" },
    { name: "Solton", logo: "/images/logos/solton.png" },
    { name: "Ehrana", logo: "/images/logos/ehrana.avif" },
    { name: "CosyLab", logo: "/images/logos/cosylab.png" },
    { name: "SmartNinja", logo: "/images/logos/smartninja.png" },
  ]

  const youtubeVideos = [
    {
      title: "[World's Hardest Game] | How to make a game with Python & Pygame | game development | PART 1",
      views: "2.5K",
      duration: "11:21",
      thumbnail: "/images/yt/05.jpg",
      link: "https://www.youtube.com/watch?v=MgM7Scg-4-I",
    },
    {
      title: "PyQt5 Project - Raspberry pi install and setup NOOBS - Raspbian",
      views: "3.3K",
      duration: "6:07",
      thumbnail: "/images/yt/02.jpg",
      link: "https://youtu.be/fT5RoPB2RU4",
    },
    {
      title: "Python UI application with Qt designer (SQLite with tableWidget) Update and Delete #10",
      views: "9.7K",
      duration: "30:10",
      thumbnail: "/images/yt/04.jpg",
      link: "https://youtu.be/JEY6ZLOJcJQ",
    },
  ]


  const socialLinks = [
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCMZVBPh0FfOJfAfQ47cg8xA",
      color: "text-red-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/%C5%BEiga-benko-a68673151/",
      color: "text-blue-400",
    },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/zigcbenx", color: "text-sky-400" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-emerald-400/20"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {/* Enhanced background effects */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-emerald-400/5 rounded-full blur-xl animate-pulse delay-500" />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-500/20" />
        </svg>

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 right-20 w-4 h-4 border border-emerald-400/30 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-6 h-6 border border-teal-400/30 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-emerald-400/20 rounded-full animate-pulse" />
      </div>

      {/* Custom cursor */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full bg-emerald-500/30 z-50 pointer-events-none mix-blend-difference"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        />
      )}

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
                href="#services"
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                About
              </Link>
              <Link
                href="#content"
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Content
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
                className="hover:text-emerald-400 transition-colors font-medium"
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
                onClick={() => openContactForm()}
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
                href="#services"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#content"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Content
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
                className="hover:text-emerald-400 transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Websites
              </Link>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-900 font-semibold mt-4"
                onClick={() => {
                  setMenuOpen(false)
                  openContactForm()
                }}
              >
                Work With Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge
                variant="secondary"
                className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-1.5 text-sm"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Full-Stack Developer & AI Specialist
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-emerald-400">Žiga</span>
                <br />
                <span className="text-3xl lg:text-4xl text-slate-400 font-normal">
                  Building digital experiences & AI solutions
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed">
                I help businesses grow through modern web development, AI optimization, and share programming knowledge
                with developers worldwide through YouTube and conferences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" passHref>
                  <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-900 font-semibold group"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  >
                  View My Work
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 bg-transparent"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => window.open("https://www.youtube.com/channel/UCMZVBPh0FfOJfAfQ47cg8xA", "_blank")}
                >
                  <Play className="mr-2 h-4 w-4" /> Watch Videos
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`${social.color} hover:scale-110 transition-all duration-200`}
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    target="_blank"
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl opacity-30" />
                <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-3xl overflow-hidden backdrop-blur-sm">
                  <div className="p-8">
                    <div className="flex items-center mb-8">
                      <div className="w-20 h-20 rounded-full overflow-hidden mr-6 border-2 border-emerald-500">
                        <Image
                          src="/images/profile.png"
                          alt="Žiga"
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold">Žiga Benko</h3>
                        <p className="text-slate-400">Full-Stack Developer</p>
                        <p className="text-emerald-400 text-sm">Available for projects</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">50+</div>
                        <div className="text-sm text-slate-400">Projects Delivered</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">€250K+</div>
                        <div className="text-sm text-slate-400">Client Savings</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Laravel", "Vue", "TypeScript", "Linux", "AI/ML"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-slate-700 text-slate-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-900"
                      onMouseEnter={enterButton}
                      onMouseLeave={leaveButton}
                      onClick={() => openContactForm()}
                    >
                      Let's Work Together <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <section className="relative z-10 py-20 border-t border-slate-800/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-400">Companies I've had the privilege to work with</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  title={client.name}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              What I Do
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Services That Drive Results</h2>
            <p className="text-slate-400 text-lg">
              From AI optimization to custom websites, I help businesses and individuals achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                    {service.link ? (
                      <Link href={service.link}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 hover:bg-slate-800 bg-transparent"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-700 hover:bg-slate-800 bg-transparent"
                        onClick={() => openContactForm(service.projectType)}
                      >
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
                  About Me
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Building the Future of Web & AI</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  With over 8 years of experience in full-stack development, I've helped dozens of companies build
                  scalable web applications, optimize their operations with AI, and grow their online presence. I'm
                  passionate about sharing knowledge and helping the developer community grow.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  When I'm not coding, you'll find me creating educational content on YouTube or mentoring the next
                  generation of developers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-900 font-semibold"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm()}
                  >
                    Work With Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {/* <Button
                    variant="outline"
                    className="border-slate-700 hover:bg-slate-800 bg-transparent"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Download Resume <ExternalLink className="ml-2 h-4 w-4" />
                  </Button> */}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-3xl opacity-30" />
                <div className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Years of Experience</span>
                      <span className="text-emerald-400 font-semibold">8+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Projects Completed</span>
                      <span className="text-emerald-400 font-semibold">50+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Client Savings</span>
                      <span className="text-emerald-400 font-semibold">€250K+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">AI Projects</span>
                      <span className="text-emerald-400 font-semibold">10+</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              Tech Stack
            </Badge>
            <h2 className="text-3xl font-bold mb-6">Technologies I Work With</h2>
            <p className="text-slate-400 text-lg mb-12">
              Modern tools and frameworks for building scalable, high-performance applications.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "Vue",
                "Laravel",
                "Tailwind",
                "React",
                "Inertia",
                "Shadcn",
                "TypeScript",
                "Python",
                "PostgreSQL",
                "MySQL",
                "Digital Ocean",
                "Docker",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="text-sm font-medium text-slate-300">{tech}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Content Section */}
      <section id="content" className="relative z-10 py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              Latest Content
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Recent YouTube Videos</h2>
            <p className="text-slate-400 text-lg">
              Educational content to help developers level up their skills and stay current with modern web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <Link
                      href={video.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={320}
                        height={180}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </Link>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="h-4 w-4 text-slate-400" />
                      <span className="text-sm text-slate-400">{video.views} views</span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                    <Link
                      href={video.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-slate-700 hover:bg-slate-800 bg-transparent"
                      >
                      <Youtube className="mr-2 h-4 w-4" /> Watch Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.open("https://www.youtube.com/channel/UCMZVBPh0FfOJfAfQ47cg8xA", "_blank")}
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
            >
              <Youtube className="mr-2 h-4 w-4" /> Subscribe to Channel
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
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
                  Let's Work Together
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
                <p className="text-slate-400 text-lg">
                  Whether you need AI optimization, a high-converting website, a custom web application, or want to
                  level up your development skills, I'm here to help.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-900 font-semibold"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => openContactForm()}
                >
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 bg-transparent"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => openContactForm()}
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
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`${social.color} hover:scale-110 transition-all duration-200`}
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm("ai-optimization")}
                  >
                    AI Business Optimization
                  </button>
                </li>
                <li>
                  <Link
                    href="/websites"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Custom Websites
                  </Link>
                </li>
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm("webapp")}
                  >
                    Web Applications
                  </button>
                </li>
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm("mvp")}
                  >
                    Startup MVPs
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Content</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UCMZVBPh0FfOJfAfQ47cg8xA"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    YouTube Channel
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Blog Posts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    Free Resources
                  </Link>
                </li> */}
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
                    onClick={() => openContactForm()}
                  >
                    Schedule a Call
                  </button>
                </li>
                {/* <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm()}
                  >
                    Book Consultation
                  </button>
                </li> */}
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
      <ContactForm
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
        preselectedProject={preselectedProject}
      />
    </div>
  )
}
