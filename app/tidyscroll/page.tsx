"use client"

import { useState } from "react"
import Link from "next/link"

const faqs = [
  {
    q: "Which apps can it lock?",
    a: "Anything you pick — social, video, games, the news app you doom-refresh. TidyScroll uses Apple's Screen Time permissions, so the block holds even if you force-quit it.",
  },
  {
    q: "Can I fake the cleaning?",
    a: "The after photo is compared against the before photo. Moving one mug or re-shooting the same corner won't pass — no minutes, no unlock.",
  },
  {
    q: "What if I need an app urgently?",
    a: "You can whitelist calls, maps, and anything essential. There's also one emergency override per day, no questions asked.",
  },
  {
    q: "Do the minutes expire?",
    a: "Earned minutes roll over for 24 hours, so a big Sunday tidy can fund your Monday commute.",
  },
]

export default function TidyScrollPage() {
  const [open, setOpen] = useState(0)

  return (
    <div className="ts-root">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@85,700;85,800;100,600&family=Instrument+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{css}</style>

      <header className="ts-header">
        <div className="ts-header-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tidyscroll/icon.png" alt="TidyScroll" className="ts-logo" />
          <span className="ts-wordmark">TidyScroll</span>
          <nav className="ts-nav">
            <a href="#how" className="ts-navlink">How it works</a>
            <a href="#proof" className="ts-navlink">Before / after</a>
            <a href="#faq" className="ts-navlink">FAQ</a>
            <a href="#get" className="ts-btn ts-btn-pill">Get the app</a>
          </nav>
        </div>
      </header>

      <section className="ts-hero">
        <div className="ts-hero-glow" />
        <div className="ts-hero-copy">
          <div className="ts-badge">
            <span className="ts-badge-dot" />
            Free on iPhone
          </div>
          <h1 className="ts-h1">
            Clean your space.<br />
            <span className="ts-accent-text">Earn your scroll.</span>
          </h1>
          <p className="ts-lead">
            TidyScroll locks the apps that eat your day. Snap your mess, tidy up, snap again — every minute of
            cleaning buys you one minute of scrolling.
          </p>
          <div className="ts-cta-row">
            <a href="#get" className="ts-btn ts-btn-lg">
              Download on the App Store
              <span className="ts-btn-arrow">→</span>
            </a>
            <span className="ts-fineprint">Free · In-app purchases · iOS 17+</span>
          </div>
        </div>
        <div className="ts-hero-shot">
          <div className="ts-hero-shot-glow" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tidyscroll/shot-1.png" alt="TidyScroll unlock timer" className="ts-float ts-shot-hero" />
        </div>
      </section>

      <section className="ts-equation">
        <div className="ts-equation-inner">
          <span className="ts-equation-term">1 minute cleaning</span>
          <span className="ts-equation-eq">=</span>
          <span className="ts-equation-term">1 minute scrolling</span>
        </div>
      </section>

      <section id="how" className="ts-how">
        <h2 className="ts-h2">How it works</h2>
        <p className="ts-section-lead">Four steps, three minutes, and your feed is open again.</p>
        <div className="ts-steps">
          <div className="ts-step">
            <span className="ts-step-num">STEP 01</span>
            <h3 className="ts-step-title">Snap before</h3>
            <p className="ts-step-copy">Photograph the desk, the floor, the pile of laundry. That&apos;s your starting line.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tidyscroll/shot-2.png" alt="Snap a photo of your space" className="ts-step-img" />
          </div>
          <div className="ts-step">
            <span className="ts-step-num">STEP 02</span>
            <h3 className="ts-step-title">Tidy 3 minutes</h3>
            <p className="ts-step-copy">The timer runs while you work. Stop whenever — the clock is your currency.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tidyscroll/shot-4.png" alt="Apps locked by TidyScroll" className="ts-step-img" />
          </div>
          <div className="ts-step">
            <span className="ts-step-num">STEP 03</span>
            <h3 className="ts-step-title">AI checks it</h3>
            <p className="ts-step-copy">Snap the after shot. TidyScroll compares the two and grades the difference.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/tidyscroll/shot-3.png" alt="AI judging your tidy-up" className="ts-step-img" />
          </div>
        </div>
        <div className="ts-step4">
          <span className="ts-step-num">STEP 04</span>
          <h3 className="ts-step4-title">Scroll, guilt free</h3>
          <p className="ts-step4-copy">
            Your earned minutes unlock the apps you chose. When they run out, the lock comes back on.
          </p>
        </div>
      </section>

      <section id="proof" className="ts-proof">
        <div className="ts-proof-card">
          <div>
            <h2 className="ts-h2">Watch your home transform</h2>
            <p className="ts-proof-copy">
              Every session is saved as a before-and-after pair. Weeks later, the gallery is the proof: a cleaner
              place, and hours you didn&apos;t lose to the feed.
            </p>
            <div className="ts-stats">
              <div>
                <div className="ts-stat-num">3 min</div>
                <div className="ts-stat-label">average session</div>
              </div>
              <div>
                <div className="ts-stat-num">0</div>
                <div className="ts-stat-label">ways to cheat</div>
              </div>
              <div>
                <div className="ts-stat-num">1:1</div>
                <div className="ts-stat-label">clean to scroll</div>
              </div>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tidyscroll/shot-5.png" alt="Before and after your space" className="ts-proof-img" />
        </div>
      </section>

      <section id="faq" className="ts-faq">
        <h2 className="ts-h2 ts-faq-title">Questions</h2>
        <div className="ts-faq-list">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="ts-faq-item"
                onClick={() => setOpen((v) => (v === i ? -1 : i))}
              >
                <div className="ts-faq-row">
                  <span className="ts-faq-q">{item.q}</span>
                  <span className="ts-faq-sign">{isOpen ? "–" : "+"}</span>
                </div>
                {isOpen && <p className="ts-faq-a">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </section>

      <section id="get" className="ts-get">
        <div className="ts-get-glow" />
        <div className="ts-get-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/tidyscroll/icon.png" alt="TidyScroll" className="ts-get-icon" />
          <h2 className="ts-get-title">
            Tidy space,<br />tidy mind.
          </h2>
          <p className="ts-get-copy">Stop negotiating with yourself. Start trading minutes.</p>
          <a href="#get" className="ts-btn ts-btn-lg">
            Download on the App Store
            <span className="ts-btn-arrow">→</span>
          </a>
        </div>
      </section>

      <footer className="ts-footer">
        <div className="ts-footer-inner">
          <span className="ts-copy">© 2026 TidyScroll</span>
          <div className="ts-footer-links">
            <Link href="/tidyscroll/privacy" className="ts-footer-link">Privacy</Link>
            <Link href="/tidyscroll/terms" className="ts-footer-link">Terms</Link>
            <a href="mailto:ziga@benxlabs.com" className="ts-footer-link">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

const css = `
.ts-root {
  --ts-accent: #cfe986;
  background: #0a0c09;
  color: #f2f1e8;
  font-family: 'Instrument Sans', system-ui, sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}
.ts-root a { color: var(--ts-accent); text-decoration: none; }
.ts-root a:hover { color: #e3f5ac; }
@keyframes ts-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.ts-float { animation: ts-float 7s ease-in-out infinite; }

.ts-header { position: sticky; top: 0; z-index: 20; backdrop-filter: blur(14px); background: rgba(10,12,9,0.72); border-bottom: 1px solid rgba(242,241,232,0.07); }
.ts-header-inner { max-width: 1140px; margin: 0 auto; padding: 14px 28px; display: flex; align-items: center; gap: 14px; }
.ts-logo { width: 34px; height: 34px; border-radius: 9px; display: block; }
.ts-wordmark { font-family: Archivo, sans-serif; font-weight: 800; font-size: 19px; letter-spacing: -0.01em; }
.ts-nav { margin-left: auto; display: flex; align-items: center; gap: 26px; }
.ts-navlink { color: #98a48f !important; font-size: 14.5px; font-weight: 500; }
.ts-navlink:hover { color: #f2f1e8 !important; }

.ts-btn { display: inline-flex; align-items: center; gap: 12px; background: var(--ts-accent); color: #141a10 !important; font-weight: 600; border-radius: 999px; transition: background 0.15s ease; }
.ts-btn:hover { background: #dcf29c; color: #141a10 !important; }
.ts-btn-pill { font-size: 14.5px; padding: 9px 18px; }
.ts-btn-lg { font-size: 17px; padding: 15px 26px; }
.ts-btn-arrow { display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: #141a10; color: var(--ts-accent); font-size: 13px; }

.ts-hero { position: relative; max-width: 1140px; margin: 0 auto; padding: 76px 28px 90px; display: grid; grid-template-columns: 1.08fr 0.92fr; gap: 48px; align-items: center; }
.ts-hero-glow { position: absolute; top: -160px; left: 38%; width: 640px; height: 420px; background: radial-gradient(ellipse at center, rgba(160,200,90,0.22), rgba(10,12,9,0) 68%); filter: blur(20px); pointer-events: none; }
.ts-hero-copy { position: relative; }
.ts-badge { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(207,233,134,0.28); color: var(--ts-accent); font-size: 13px; font-weight: 600; padding: 6px 13px; border-radius: 999px; margin-bottom: 26px; }
.ts-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--ts-accent); display: block; }
.ts-h1 { font-family: Archivo, sans-serif; font-weight: 800; font-size: 76px; line-height: 0.94; letter-spacing: -0.02em; text-transform: uppercase; margin: 0 0 22px; text-wrap: balance; }
.ts-accent-text { color: var(--ts-accent); }
.ts-lead { font-size: 19px; line-height: 1.55; color: #a3ad9a; margin: 0 0 34px; max-width: 460px; text-wrap: pretty; }
.ts-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
.ts-fineprint { font-size: 14px; color: #727c6b; }
.ts-hero-shot { position: relative; display: flex; justify-content: center; }
.ts-hero-shot-glow { position: absolute; bottom: 0; width: 330px; height: 330px; border-radius: 50%; background: radial-gradient(circle, rgba(44,58,43,0.9), rgba(10,12,9,0) 70%); }
.ts-shot-hero { position: relative; width: 330px; max-width: 100%; border-radius: 26px; display: block; -webkit-mask-image: linear-gradient(#000 76%, transparent); mask-image: linear-gradient(#000 76%, transparent); }

.ts-equation { background: var(--ts-accent); color: #141a10; }
.ts-equation-inner { max-width: 1140px; margin: 0 auto; padding: 30px 28px; display: flex; align-items: center; justify-content: center; gap: 22px; flex-wrap: wrap; }
.ts-equation-term { font-family: Archivo, sans-serif; font-weight: 800; font-size: 31px; text-transform: uppercase; letter-spacing: -0.01em; }
.ts-equation-eq { font-family: Archivo, sans-serif; font-weight: 700; font-size: 31px; opacity: 0.45; }

.ts-how { max-width: 1140px; margin: 0 auto; padding: 96px 28px 20px; }
.ts-h2 { font-family: Archivo, sans-serif; font-weight: 800; font-size: 46px; line-height: 1; text-transform: uppercase; letter-spacing: -0.02em; margin: 0 0 14px; }
.ts-section-lead { font-size: 18px; color: #a3ad9a; margin: 0 0 52px; max-width: 520px; }
.ts-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.ts-step { background: #12160f; border: 1px solid rgba(242,241,232,0.07); border-radius: 24px; padding: 30px 28px 0; overflow: hidden; }
.ts-step-num { font-family: Archivo, sans-serif; font-weight: 800; font-size: 14px; color: var(--ts-accent); letter-spacing: 0.12em; }
.ts-step-title { font-family: Archivo, sans-serif; font-weight: 800; font-size: 27px; text-transform: uppercase; line-height: 1.02; margin: 12px 0 10px; }
.ts-step-copy { font-size: 15.5px; line-height: 1.55; color: #98a48f; margin: 0 0 22px; }
.ts-step-img { width: 100%; display: block; border-radius: 16px 16px 0 0; -webkit-mask-image: linear-gradient(#000 72%, transparent); mask-image: linear-gradient(#000 72%, transparent); }
.ts-step4 { margin-top: 22px; background: linear-gradient(100deg, #1b2417, #12160f); border: 1px solid rgba(207,233,134,0.18); border-radius: 24px; padding: 34px 36px; display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
.ts-step4-title { font-family: Archivo, sans-serif; font-weight: 800; font-size: 31px; text-transform: uppercase; line-height: 1; margin: 0; }
.ts-step4-copy { font-size: 16px; line-height: 1.5; color: #a3ad9a; margin: 0; flex: 1; min-width: 260px; }

.ts-proof { max-width: 1140px; margin: 0 auto; padding: 96px 28px; }
.ts-proof-card { background: #12160f; border: 1px solid rgba(242,241,232,0.07); border-radius: 28px; padding: 52px 48px; display: grid; grid-template-columns: 1fr 320px; gap: 44px; align-items: center; }
.ts-proof-copy { font-size: 18px; line-height: 1.55; color: #a3ad9a; margin: 0 0 30px; max-width: 440px; }
.ts-stats { display: grid; grid-template-columns: repeat(3, max-content); gap: 38px; }
.ts-stat-num { font-family: Archivo, sans-serif; font-weight: 800; font-size: 36px; color: var(--ts-accent); line-height: 1; }
.ts-stat-label { font-size: 14px; color: #727c6b; margin-top: 4px; }
.ts-proof-img { width: 100%; border-radius: 22px; display: block; -webkit-mask-image: linear-gradient(#000 80%, transparent); mask-image: linear-gradient(#000 80%, transparent); }

.ts-faq { max-width: 820px; margin: 0 auto; padding: 0 28px 96px; }
.ts-faq-title { text-align: center; margin-bottom: 34px; }
.ts-faq-list { display: flex; flex-direction: column; gap: 12px; }
.ts-faq-item { background: #12160f; border: 1px solid rgba(242,241,232,0.07); border-radius: 18px; padding: 22px 26px; cursor: pointer; transition: border-color 0.15s ease; }
.ts-faq-item:hover { border-color: rgba(207,233,134,0.28); }
.ts-faq-row { display: flex; align-items: center; gap: 18px; }
.ts-faq-q { font-family: Archivo, sans-serif; font-weight: 700; font-size: 19px; flex: 1; }
.ts-faq-sign { color: var(--ts-accent); font-size: 20px; line-height: 1; }
.ts-faq-a { font-size: 16px; line-height: 1.6; color: #98a48f; margin: 12px 52px 0 0; }

.ts-get { position: relative; overflow: hidden; background: #12160f; border-top: 1px solid rgba(242,241,232,0.07); }
.ts-get-glow { position: absolute; top: -220px; left: 50%; transform: translateX(-50%); width: 760px; height: 460px; background: radial-gradient(ellipse at center, rgba(160,200,90,0.2), rgba(18,22,15,0) 68%); pointer-events: none; }
.ts-get-inner { position: relative; max-width: 1140px; margin: 0 auto; padding: 96px 28px; text-align: center; }
.ts-get-icon { width: 76px; height: 76px; border-radius: 19px; display: block; margin: 0 auto 26px; }
.ts-get-title { font-family: Archivo, sans-serif; font-weight: 800; font-size: 62px; line-height: 0.96; text-transform: uppercase; letter-spacing: -0.02em; margin: 0 0 18px; text-wrap: balance; }
.ts-get-copy { font-size: 18px; color: #a3ad9a; margin: 0 0 34px; }
.ts-get .ts-btn-lg { margin: 0 auto; }

.ts-footer { border-top: 1px solid rgba(242,241,232,0.07); }
.ts-footer-inner { max-width: 1140px; margin: 0 auto; padding: 26px 28px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
.ts-copy { font-size: 14px; color: #5f6959; }
.ts-footer-links { margin-left: auto; display: flex; gap: 24px; }
.ts-footer-link { font-size: 14px; color: #727c6b !important; }
.ts-footer-link:hover { color: #f2f1e8 !important; }

@media (max-width: 900px) {
  .ts-hero { grid-template-columns: 1fr; gap: 40px; padding-top: 52px; }
  .ts-h1 { font-size: 56px; }
  .ts-steps { grid-template-columns: 1fr; }
  .ts-proof-card { grid-template-columns: 1fr; padding: 40px 28px; }
  .ts-get-title { font-size: 46px; }
}
@media (max-width: 560px) {
  .ts-nav { gap: 16px; }
  .ts-navlink { display: none; }
  .ts-h1 { font-size: 44px; }
  .ts-h2, .ts-faq-title { font-size: 36px; }
  .ts-equation-term, .ts-equation-eq { font-size: 24px; }
  .ts-stats { gap: 24px; }
}
`
