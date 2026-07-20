import type { Metadata } from "next"
import { LegalDoc } from "@/components/legal-doc"
import { HOOPCHAT_PRIVACY } from "@/lib/legal"

export const metadata: Metadata = {
  title: "HoopChat — Privacy Policy",
  description: "Privacy Policy for the HoopChat app.",
}

export default function HoopChatPrivacyPage() {
  return <LegalDoc markdown={HOOPCHAT_PRIVACY} />
}
