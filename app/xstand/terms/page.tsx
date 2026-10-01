import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { XSTAND_TERMS } from "@/lib/legal"

export const metadata: Metadata = {
  title: "XStand — Terms of Use",
  description: "Terms of Use for the XStand app.",
}

export default function XStandTermsPage() {
  return <LegalDoc markdown={XSTAND_TERMS} />
}
