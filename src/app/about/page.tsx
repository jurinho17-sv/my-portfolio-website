export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#003262] mb-8">About Me</h1>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#003262] mb-4">Education</h2>
          <div className="bg-[#003262] text-white p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">UC Berkeley</h3>
            <p className="text-gray-200">B.A. in Statistics in the College of Computing, Data Science, and Society</p>
            <p className="text-gray-300 text-sm">Expected Graduation: 2027</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#003262] mb-4">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#003262] text-white p-4 rounded-lg">
              <h3 className="font-medium mb-2">Computer Science</h3>
              <p className="text-gray-200 text-sm">Data structures, algorithms, software engineering</p>
            </div>
            <div className="bg-[#FDB515] text-[#003262] p-4 rounded-lg">
              <h3 className="font-medium mb-2">Data Science</h3>
              <p className="text-[#003262] text-sm">Statistical analysis, machine learning, data visualization</p>
            </div>
            <div className="bg-white border-2 border-[#003262] text-[#003262] p-4 rounded-lg">
              <h3 className="font-medium mb-2">Artificial Intelligence</h3>
              <p className="text-gray-700 text-sm">Machine learning, deep learning, AI applications</p>
            </div>
            <div className="bg-gray-100 border-2 border-[#FDB515] text-[#003262] p-4 rounded-lg">
              <h3 className="font-medium mb-2">Statistics</h3>
              <p className="text-gray-700 text-sm">Academic research, data analysis, statistical modeling</p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#003262] mb-4">Career Goals</h2>
          <div className="bg-[#FDB515] text-[#003262] p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Silicon Valley</h3>
            <p>
              is my DREAM
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
