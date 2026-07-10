import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { TIDYSCROLL_PRIVACY } from "@/lib/legal"

export const metadata: Metadata = {
  title: "TidyScroll — Privacy Policy",
  description: "Privacy Policy for the TidyScroll app.",
}

export default function TidyScrollPrivacyPage() {
  return <LegalDoc markdown={TIDYSCROLL_PRIVACY} />
}
