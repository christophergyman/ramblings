import { marked } from 'marked'

export interface Post {
  slug: string
  title: string
  date: string
  category: string
  description: string
  content: string
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }

  const meta: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
    meta[key] = val
  }

  return { meta, body: match[2] }
}

const modules = import.meta.glob('/content/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

export const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.replace('/content/', '').replace('.md', '')
    const { meta, body } = parseFrontmatter(raw)
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      category: meta.category || '',
      description: meta.description || '',
      content: marked.parse(body) as string,
    }
  })
  .sort((a, b) => (b.date > a.date ? 1 : -1))

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
