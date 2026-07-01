import Link from "next/link"

// Renders inline **bold** and _italic_ segments within a line of text.
function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g).filter(Boolean)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-${i}`} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith("_") && part.endsWith("_")) {
      return (
        <em key={`${keyPrefix}-${i}`} className="italic">
          {part.slice(1, -1)}
        </em>
      )
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>
  })
}

// Minimal Markdown renderer for our legal docs: headings, paragraphs, and bullet lists.
function renderMarkdown(markdown: string) {
  const lines = markdown.split("\n")
  const blocks: React.ReactNode[] = []
  let list: string[] = []

  const flushList = () => {
    if (list.length === 0) return
    const items = list
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="mb-6 space-y-2 pl-5 list-disc marker:text-slate-500">
        {items.map((item, i) => (
          <li key={i}>{renderInline(item, `li-${blocks.length}-${i}`)}</li>
        ))}
      </ul>,
    )
    list = []
  }

  lines.forEach((raw) => {
    const line = raw.trimEnd()
    if (line.startsWith("- ")) {
      list.push(line.slice(2))
      return
    }
    flushList()
    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={`h2-${blocks.length}`} className="mt-10 mb-3 text-xl font-semibold text-white">
          {renderInline(line.slice(3), `h2-${blocks.length}`)}
        </h2>,
      )
    } else if (line.startsWith("# ")) {
      blocks.push(
        <h1 key={`h1-${blocks.length}`} className="mb-2 text-3xl font-bold text-white">
          {renderInline(line.slice(2), `h1-${blocks.length}`)}
        </h1>,
      )
    } else if (line.trim() === "") {
      // blank line: block separator, nothing to render
    } else {
      blocks.push(
        <p key={`p-${blocks.length}`} className="mb-4 leading-relaxed text-slate-300">
          {renderInline(line, `p-${blocks.length}`)}
        </p>,
      )
    }
  })
  flushList()
  return blocks
}

export function LegalDoc({ markdown }: { markdown: string }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="mb-10 inline-block text-sm text-slate-400 hover:text-white">
          ← BenxLabs
        </Link>
        <article>{renderMarkdown(markdown)}</article>
      </div>
    </div>
  )
}
