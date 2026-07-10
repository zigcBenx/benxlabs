import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { TIDYSCROLL_TERMS } from "@/lib/legal"

export const metadata: Metadata = {
  title: "TidyScroll — Terms of Use",
  description: "Terms of Use for the TidyScroll app.",
}

export default function TidyScrollTermsPage() {
  return <LegalDoc markdown={TIDYSCROLL_TERMS} />
}
