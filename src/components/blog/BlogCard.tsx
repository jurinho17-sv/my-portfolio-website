import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '@/types'
import Card from '@/components/ui/Card'

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export default function BlogCard({ post, className = '' }: BlogCardProps) {
  return (
    <Card hover className={className}>
      <Link href={`/blog/${post.slug}`}>
        <article>
          <header className="mb-4">
            <h2 className="text-xl font-semibold text-[#003262] mb-2 hover:text-[#FDB515] transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-3 line-clamp-3">
              {post.description}
            </p>
          </header>
          
          <footer className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMM dd, yyyy')}
              </time>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>
            
            <div className="flex gap-2">
              {post.categories.slice(0, 2).map(category => (
                <span 
                  key={category} 
                  className="px-2 py-1 bg-[#003262] text-white text-xs rounded"
                >
                  {category}
                </span>
              ))}
              {post.categories.length > 2 && (
                <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded">
                  +{post.categories.length - 2}
                </span>
              )}
            </div>
          </footer>
        </article>
      </Link>
    </Card>
  )
} 