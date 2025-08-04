export default function ResumePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#003262] mb-8">Resume</h1>
      
      <div className="space-y-6">
        {/* PDF Download Button */}
        <div className="text-center mb-6">
          <a 
            href="https://docs.google.com/document/d/1zyFlTDXWsF4bPJ9JLQ9-5a2UZvizPA5F/export?format=pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#003262] text-white font-medium rounded-lg hover:bg-[#002a52] transition-colors"
          >
            Download PDF Resume
          </a>
        </div>
        
        {/* Embedded Google Docs */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/document/d/1zyFlTDXWsF4bPJ9JLQ9-5a2UZvizPA5F/preview"
            width="100%"
            height="800"
            className="border-0"
            title="Ju Ho Kim Resume"
          />
        </div>
      </div>
    </div>
  )
}
