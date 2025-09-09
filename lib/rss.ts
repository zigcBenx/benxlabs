export interface BlogPost {
  title: string
  description: string
  link: string
  publishedDate: string
  readTime: string
}

export async function fetchSubstackPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/substack-feed')
    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching Substack posts:', error)
    return []
  }
}

// Utility function to estimate read time from content
export function estimateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(' ').length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

// Extract description from HTML content
export function extractDescription(htmlContent: string, maxLength = 150): string {
  // Remove HTML tags and extract plain text
  const textContent = htmlContent.replace(/<[^>]+>/g, '').trim()
  
  if (textContent.length <= maxLength) {
    return textContent
  }
  
  // Find the last complete word within the limit
  const truncated = textContent.substring(0, maxLength)
  const lastSpaceIndex = truncated.lastIndexOf(' ')
  
  return lastSpaceIndex > 0 
    ? truncated.substring(0, lastSpaceIndex) + '...'
    : truncated + '...'
}