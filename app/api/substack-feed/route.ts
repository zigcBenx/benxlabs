import { NextResponse } from 'next/server'
import { extractDescription, estimateReadTime } from '@/lib/rss'

interface RSSItem {
  title: string
  link: string
  description: string
  content?: string
  pubDate: string
}

export async function GET() {
  try {
    // Fetch the RSS feed
    const response = await fetch('https://benxlabs.substack.com/feed', {
      headers: {
        'User-Agent': 'BenxLabs Website RSS Reader',
      },
      // Cache for 5 minutes
      next: { revalidate: 300 }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const xmlText = await response.text()
    
    // Parse XML manually (simple approach for RSS)
    const items = parseRSSItems(xmlText)
    
    // Transform to our format and limit to 3 latest posts
    const blogPosts = items.slice(0, 3).map(item => ({
      title: item.title,
      description: extractDescription(item.description || item.content || '', 120),
      link: item.link,
      publishedDate: formatDate(item.pubDate),
      readTime: estimateReadTime(item.content || item.description || ''),
    }))

    return NextResponse.json(blogPosts)
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed' },
      { status: 500 }
    )
  }
}

function parseRSSItems(xmlText: string): RSSItem[] {
  const items: RSSItem[] = []
  
  // Extract all <item> blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match

  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemXml = match[1]
    
    const item: RSSItem = {
      title: extractXMLContent(itemXml, 'title') || '',
      link: extractXMLContent(itemXml, 'link') || '',
      description: extractXMLContent(itemXml, 'description') || '',
      content: extractXMLContent(itemXml, 'content:encoded') || '',
      pubDate: extractXMLContent(itemXml, 'pubDate') || '',
    }
    
    items.push(item)
  }
  
  return items
}

function extractXMLContent(xml: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}(?:[^>]*)>([\\s\\S]*?)<\/${tag}>`, 'i')
  const match = xml.match(regex)
  
  if (match && match[1]) {
    // Decode HTML entities and clean up
    return match[1]
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim()
  }
  
  return null
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    console.error('Error parsing date:', dateString, error)
    return dateString
  }
}