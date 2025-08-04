import Button from '@/components/ui/Button'
import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#003262] mb-6">
          Hi 👋 I'm {siteConfig.name}
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          {siteConfig.author.major} @ {siteConfig.author.university}
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            href="/projects" 
            variant="primary"
            size="lg"
          >
            View Projects
          </Button>
          <Button 
            href="/blog" 
            variant="secondary"
            size="lg"
          >
            Read Blog
          </Button>
        </div>
      </div>
    </div>
  )
}
