import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { SHARP_PRIVACY } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Sharp — Privacy Policy",
  description: "Privacy Policy for the Sharp app.",
}

export default function SharpPrivacyPage() {
  return <LegalDoc markdown={SHARP_PRIVACY} />
}
