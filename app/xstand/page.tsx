"use client"

import { useState } from "react"
import Link from "next/link"
import { Send, CheckCircle } from "lucide-react"

const SUPPORT_EMAIL = "ziga@benxlabs.com"

export default function XStandSupportPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, project: "XStand Support" }),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("sent")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-xl px-6 py-16">
        <Link href="/" className="mb-10 inline-block text-sm text-slate-400 hover:text-white">
          ← BenxLabs
        </Link>

        <h1 className="mb-2 text-3xl font-bold">XStand Support</h1>
        <p className="mb-8 leading-relaxed text-slate-300">
          Have a question, found a bug, or want to report a problem with a duel? Send us a message and we&apos;ll
          get back to you. You can also email us directly at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-orange-400 hover:underline">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>

        {status === "sent" ? (
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-8 text-center">
            <CheckCircle className="mx-auto mb-4 h-14 w-14 text-orange-400" />
            <h2 className="mb-1 text-xl font-semibold">Message sent</h2>
            <p className="text-slate-400">We&apos;ll get back to you as soon as we can.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-slate-400 hover:text-white"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                How can we help? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Describe your question or issue..."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again, or email {SUPPORT_EMAIL} directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 py-3 font-semibold text-slate-900 hover:from-orange-600 hover:to-amber-600 disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-slate-900" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send message
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-10 flex gap-4 text-sm text-slate-500">
          <Link href="/xstand/privacy" className="hover:text-slate-300">
            Privacy Policy
          </Link>
          <Link href="/xstand/terms" className="hover:text-slate-300">
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  )
}
