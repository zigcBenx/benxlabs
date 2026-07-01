import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { PRIVACY_POLICY } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Dream to Anime — Privacy Policy",
  description: "Privacy Policy for the Dream to Anime app.",
}

export default function Dream2AnimePrivacyPage() {
  return <LegalDoc markdown={PRIVACY_POLICY} />
}
