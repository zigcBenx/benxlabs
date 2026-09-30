import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { HANDSTANDDUEL_TERMS } from "@/lib/legal"

export const metadata: Metadata = {
  title: "HandStandDuel — Terms of Use",
  description: "Terms of Use for the HandStandDuel app.",
}

export default function HandStandDuelTermsPage() {
  return <LegalDoc markdown={HANDSTANDDUEL_TERMS} />
}
