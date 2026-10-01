import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { XSTAND_PRIVACY } from "@/lib/legal"

export const metadata: Metadata = {
  title: "XStand — Privacy Policy",
  description: "Privacy Policy for the XStand app.",
}

export default function XStandPrivacyPage() {
  return <LegalDoc markdown={XSTAND_PRIVACY} />
}
