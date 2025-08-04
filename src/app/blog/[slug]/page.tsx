import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/blog" className="text-[#003262] hover:text-[#FDB515] mb-6 inline-block transition-colors">
        ← Back to Blog
      </Link>
      
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#003262] mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-500 mb-4">
            <span>{post.date}</span>
            <div className="flex gap-2">
              {post.categories.map(category => (
                <span key={category} className="px-2 py-1 bg-[#003262] text-white text-xs rounded">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xl text-gray-600">{post.description}</p>
        </header>
        
        <div className="mt-8 prose-headings:text-[#003262] prose-a:text-[#003262] prose-a:hover:text-[#FDB515]" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
