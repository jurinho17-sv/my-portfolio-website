import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#003262] text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ju Ho Kim</h3>
            <p className="text-sm text-gray-300">
              Statistics (College of Computing, Data Science, and Society) @ UC Berkeley
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-gray-300 hover:text-[#FDB515] transition-colors">
                Home
              </Link>
              <Link href="/blog" className="block text-sm text-gray-300 hover:text-[#FDB515] transition-colors">
                Blog
              </Link>
              <Link href="/projects" className="block text-sm text-gray-300 hover:text-[#FDB515] transition-colors">
                Projects
              </Link>
              <Link href="/resume" className="block text-sm text-gray-300 hover:text-[#FDB515] transition-colors">
                Resume
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://github.com/jurinho17-sv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-sm text-gray-300 hover:text-[#FDB515] transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/justinkim-sv/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-sm text-gray-300 hover:text-[#FDB515] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Ju Ho Kim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 