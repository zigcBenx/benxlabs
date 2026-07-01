import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { TERMS_OF_USE } from "@/lib/legal"

export const metadata: Metadata = {
  title: "Dream to Anime — Terms of Use",
  description: "Terms of Use for the Dream to Anime app.",
}

export default function Dream2AnimeTermsPage() {
  return <LegalDoc markdown={TERMS_OF_USE} />
}
