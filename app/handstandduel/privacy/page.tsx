import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { HANDSTANDDUEL_PRIVACY } from "@/lib/legal"

export const metadata: Metadata = {
  title: "HandStandDuel — Privacy Policy",
  description: "Privacy Policy for the HandStandDuel app.",
}

export default function HandStandDuelPrivacyPage() {
  return <LegalDoc markdown={HANDSTANDDUEL_PRIVACY} />
}
