import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { HOOPCHAT_TERMS } from "@/lib/legal"

export const metadata: Metadata = {
  title: "HoopChat — Terms of Use",
  description: "Terms of Use for the HoopChat app.",
}

export default function HoopChatTermsPage() {
  return <LegalDoc markdown={HOOPCHAT_TERMS} />
}
