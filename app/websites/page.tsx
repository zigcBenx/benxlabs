"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  ArrowUpRight,
  CheckCircle,
  LineChart,
  BarChart3,
  Zap,
  Star,
  AlertTriangle,
  TrendingDown,
  Clock,
  Users,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export default function WebsitesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [preselectedProject, setPreselectedProject] = useState<string>("")

  // Scarcity counters
  const [lostCustomers, setLostCustomers] = useState(1247)
  const [lostRevenue, setLostRevenue] = useState(89432)
  const [spotsLeft, setSpotsLeft] = useState(2)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Simulate live counters
  useEffect(() => {
    const interval = setInterval(() => {
      setLostCustomers((prev) => prev + Math.floor(Math.random() * 3) + 1)
      setLostRevenue((prev) => prev + Math.floor(Math.random() * 500) + 100)
    }, 5000)

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

  const clients = [
    { name: "OpenPledge", logo: "/images/logos/openpledge.png" },
    { name: "DEWESoft", logo: "/images/logos/dewesoft.png" },
    { name: "Solton", logo: "/images/logos/solton.png" },
    { name: "Ehrana", logo: "/images/logos/ehrana.avif" },
    { name: "CosyLab", logo: "/images/logos/cosylab.png" },
    { name: "SmartNinja", logo: "/images/logos/smartninja.png" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-emerald-500/30 z-50 pointer-events-none mix-blend-difference hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

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
                className="hover:text-emerald-400 transition-colors"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                Projects
              </Link>
              <Link
                href="/websites"
                className="text-emerald-400 font-medium"
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
                Claim Your Spot
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
            className="fixed inset-0 z-30 bg-slate-950 pt-28"
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
                href="/projects"
                className="hover:text-emerald-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
              <Link href="/websites" className="text-emerald-400 font-medium" onClick={() => setMenuOpen(false)}>
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
                Claim Your Spot
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-400/5 rounded-full blur-xl animate-pulse delay-500" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Urgency badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-red-600/20 text-red-400 border-red-500/30 px-4 py-1.5 animate-pulse">
                  <Clock className="mr-2 h-4 w-4" />
                  Only {spotsLeft} Spots Left This Month
                </Badge>
                <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-500/30 px-4 py-1.5">
                  <TrendingDown className="mr-2 h-4 w-4" />
                  Your Competitors Are Winning
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Stop Losing <span className="text-red-400">Customers</span> to Outdated Websites
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Every second your website is slow, confusing, or unprofessional, potential customers are clicking away
                to your competitors.
                <span className="text-red-400 font-semibold"> Don't let another sale slip away.</span>
              </p>

              {/* Live stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-red-400 mr-2" />
                    <span className="text-2xl font-bold text-red-400">{lostCustomers.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-slate-400">Customers lost today due to poor websites</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="h-6 w-6 text-red-400 mr-2" />
                    <span className="text-2xl font-bold text-red-400">€{lostRevenue.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-slate-400">Revenue lost today</p>
                </div>
                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="h-6 w-6 text-emerald-400 mr-2" />
                    <span className="text-2xl font-bold text-emerald-400">93%</span>
                  </div>
                  <p className="text-sm text-slate-400">Conversion increase with our websites</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold group animate-pulse"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => openContactForm()}
                >
                  Stop Losing Money Now
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 bg-transparent"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                  onClick={() => openContactForm()}
                >
                  See Success Stories <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Device Mockups */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Desktop mockup */}
            <div className="relative z-10 bg-slate-800 rounded-lg shadow-2xl overflow-hidden border border-slate-700">
              <div className="h-6 bg-slate-900 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                {/* Website preview */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                  <div className="h-12 bg-slate-900/80 backdrop-blur-sm flex items-center px-4 justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold">
                        B
                      </div>
                      <div className="w-20 h-3 bg-slate-700 rounded-full" />
                    </div>
                    <div className="flex space-x-6">
                      <div className="w-12 h-2 bg-slate-700 rounded-full" />
                      <div className="w-12 h-2 bg-slate-700 rounded-full" />
                      <div className="w-12 h-2 bg-slate-700 rounded-full" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="w-2/3 h-8 bg-white/10 rounded-lg mb-6" />
                    <div className="w-full h-40 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg mb-6" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-white/10 rounded-lg" />
                      <div className="h-24 bg-white/10 rounded-lg" />
                      <div className="h-24 bg-white/10 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile mockup */}
            <div className="absolute -bottom-10 -right-10 z-20 w-1/3">
              <div className="bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-slate-700">
                <div className="h-4 bg-slate-900 flex items-center justify-center">
                  <div className="w-16 h-1 rounded-full bg-slate-700" />
                </div>
                <div className="aspect-[9/19] bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                  {/* Mobile website preview */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                    <div className="h-6 bg-slate-900/80 backdrop-blur-sm flex items-center px-2 justify-center">
                      <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[6px] font-bold">
                        B
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="w-2/3 h-3 bg-white/10 rounded-sm mb-3" />
                      <div className="w-full h-20 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-md mb-3" />
                      <div className="space-y-2">
                        <div className="h-8 bg-white/10 rounded-sm" />
                        <div className="h-8 bg-white/10 rounded-sm" />
                        <div className="h-8 bg-white/10 rounded-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-4 bg-slate-900 flex items-center justify-center">
                  <div className="w-8 h-1 rounded-full bg-slate-700" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              Our Process
            </Badge>
            <h2 className="text-4xl font-bold mb-6">How We Build Websites That Generate Revenue</h2>
            <p className="text-slate-400 text-lg">
              We don't just design pretty websites. We engineer conversion machines that actively work to grow your
              business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Research",
                description: "We analyze your audience, competitors, and industry to create a data-driven strategy.",
                icon: LineChart,
                features: ["Competitor analysis", "User research", "Conversion mapping"],
              },
              {
                title: "Conversion Design",
                description: "Every element is strategically designed to guide visitors toward taking action.",
                icon: BarChart3,
                features: ["Psychological triggers", "Clear CTAs", "Trust elements"],
              },
              {
                title: "Performance Engineering",
                description: "Lightning-fast websites that rank higher and convert better than your competitors.",
                icon: Zap,
                features: ["Sub-2s load times", "SEO optimization", "Mobile-first design"],
              },
            ].map((service, index) => (
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
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden h-full hover:border-emerald-500/50 transition-all duration-300">
                  <div className="p-8">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-slate-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              Our Work
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Websites That Drive Business Growth</h2>
            <p className="text-slate-400 text-lg">
              See how we've helped businesses like yours increase leads, sales, and revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "OpenPledge Platform",
                category: "Web Application",
                rating: 5,
                stats: "+200% Engagement",
                image: "/images/portfolio/openpledge-screenshot.png",
              },
              {
                title: "REBOOT Landing Page",
                category: "Product Launch",
                rating: 5,
                stats: "+150% Conversions",
                image: "/images/portfolio/reboot-screenshot.png",
              },
              {
                title: "Solton Flight School",
                category: "Business Website",
                rating: 5,
                stats: "+89% Inquiries",
                image: "/images/portfolio/solton-screenshot.png",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
              >
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 bg-emerald-500 text-slate-900 text-sm font-bold px-3 py-1 rounded-full">
                      {project.stats}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-slate-400">{project.category}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">Strategic design with conversion-focused elements</p>
                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-slate-700 hover:bg-slate-800 bg-transparent text-white"
                      onClick={() => openContactForm()}
                    >
                      View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* <Button
              className="bg-transparent border border-slate-700 hover:bg-slate-800 text-white"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
              onClick={() => openContactForm()}
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="relative z-10 py-20 bg-slate-900/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              Our Clients
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-400">Companies that have experienced the BenxLabs difference</p>
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
                  className="h-10 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing with Scarcity */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="bg-red-600/20 text-red-400 border-red-500/30 mb-4 animate-pulse">
              <Clock className="mr-2 h-4 w-4" />
              Limited Time - Only {spotsLeft} Spots Left
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Stop the Revenue Bleeding Now</h2>
            <p className="text-slate-400 text-lg">
              Every day you wait is money lost to competitors. Secure your spot before it's too late.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <div className="text-emerald-400 font-semibold mb-2">Basic Website</div>
              <div className="text-3xl font-bold mb-1">€1,999</div>
              <div className="text-sm text-slate-400 mb-6">One-time investment</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>5-7 Page Website</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Mobile Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Basic SEO Setup</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Contact Form</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>1 Week Delivery</span>
                </li>
              </ul>
              <Button
                className="w-full bg-transparent border border-slate-700 hover:bg-slate-800 text-white"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
                onClick={() => openContactForm("basic-website")}
              >
                Claim This Spot
              </Button>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-8 relative lg:scale-110 z-10 shadow-xl shadow-emerald-500/10">
              <div className="absolute -top-3 right-6 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                LAST {spotsLeft} SPOTS
              </div>
              <div className="text-emerald-400 font-semibold mb-2">Growth Website</div>
              <div className="text-3xl font-bold mb-1">€3,999</div>
              <div className="text-sm text-slate-400 mb-6">One-time investment</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>8-12 Page Website</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Advanced SEO Package</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Lead Generation System</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Analytics Dashboard</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>3 Weeks Delivery</span>
                </li>
              </ul>
              <Button
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white animate-pulse"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
                onClick={() => openContactForm("growth-website")}
              >
                Secure Your Spot Now
              </Button>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <div className="text-emerald-400 font-semibold mb-2">E-commerce Website</div>
              <div className="text-3xl font-bold mb-1">€6,999</div>
              <div className="text-sm text-slate-400 mb-6">One-time investment</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Full Online Store</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Product Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Payment Processing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>Inventory System</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  <span>6 Weeks Delivery</span>
                </li>
              </ul>
              <Button
                className="w-full bg-transparent border border-slate-700 hover:bg-slate-800 text-white"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
                onClick={() => openContactForm("ecommerce-website")}
              >
                Claim This Spot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Maximum Urgency */}
      <section className="relative z-10 py-20 bg-red-900/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-12">
              <div className="flex justify-center mb-6">
                <Badge className="bg-red-600/20 text-red-400 border-red-500/30 animate-pulse text-lg px-6 py-2">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  URGENT: Only {spotsLeft} Spots Remaining
                </Badge>
              </div>
              <h2 className="text-4xl font-bold mb-4">Your Competitors Are Booking Their Spots Right Now</h2>
              <p className="text-slate-400 text-lg mb-8">
                While you're reading this, potential customers are choosing your competitors.
                <span className="text-red-400 font-semibold"> Don't let another day of lost revenue pass by.</span>
              </p>

              <div className="bg-slate-900/50 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">What You're Losing Every Day:</h4>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• Potential customers to competitors</li>
                      <li>• Revenue from poor conversions</li>
                      <li>• Search engine rankings</li>
                      <li>• Brand credibility and trust</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">What You'll Gain:</h4>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• 93% average conversion increase</li>
                      <li>• Professional brand presence</li>
                      <li>• Mobile-optimized experience</li>
                      <li>• SEO-ready foundation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold text-xl px-12 py-4 animate-pulse"
                onMouseEnter={enterButton}
                onMouseLeave={leaveButton}
                onClick={() => openContactForm()}
              >
                Secure My Spot Before It's Gone <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-slate-500 mt-4">
                * Spots are filled on a first-come, first-served basis. Once they're gone, the next available slot is in
                3 months.
              </p>
            </div>
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
                Creating websites that convert visitors into customers and grow your business.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm()}
                  >
                    Website Development
                  </button>
                </li>
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm("ecommerce-website")}
                  >
                    E-commerce
                  </button>
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
              </ul>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm()}
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left"
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                    onClick={() => openContactForm()}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div> */}

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
                    Emergency Booking
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
      <ContactForm
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
        preselectedProject={preselectedProject}
      />
    </div>
  )
}
