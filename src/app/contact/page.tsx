export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#003262] mb-8">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-[#003262] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            I&apos;m always interested in new opportunities, collaborations, and interesting projects. 
            Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-gray-500">Email:</span>
              <a href="mailto:juhokim@berkeley.edu" className="text-[#003262] hover:text-[#FDB515] transition-colors">
                juhokim@berkeley.edu
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-500">LinkedIn:</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#003262] hover:text-[#FDB515] transition-colors">
                linkedin.com/in/juhokim
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-gray-500">GitHub:</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#003262] hover:text-[#FDB515] transition-colors">
                github.com/juhokim
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-[#003262] text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Say hi to me!</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FDB515] text-gray-900 placeholder-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FDB515] text-gray-900 placeholder-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FDB515] text-gray-900 placeholder-white"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#FDB515] text-[#003262] py-2 px-4 rounded-md hover:bg-[#f0a800] transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
