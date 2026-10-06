import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { SHARP_TERMS } from "@/lib/legal"

export const metadata: Metadata = {
  title: "SharpMaxx — Terms of Use",
  description: "Terms of Use for the SharpMaxx app.",
}

export default function SharpTermsPage() {
  return <LegalDoc markdown={SHARP_TERMS} />
}
