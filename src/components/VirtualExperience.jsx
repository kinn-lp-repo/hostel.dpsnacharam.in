const VirtualExperience = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="virtual" className="py-10 md:py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-6">
            <span className="inline-block text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary">
              Virtual Experience
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gray-800">Step Inside the Future of</span>
              <br />
              <span className="text-primary">Educational Excellence</span>
            </h2>
          </div>

          {/* Description */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Take a complete walkthrough of our campus and see all the world-class facilities that make our school extraordinary. Get your first understanding of the learning environment where your child will thrive and grow.
              <br /><span className="text-primary font-semibold block mt-2">Note: Hostel facilities are available for <span className="font-bold">boys only</span>.</span>
            </p>
          </div>

          {/* Video Player */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-lg bg-white mx-auto max-w-3xl">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/GjS-n4b9OLs?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&playsinline=1&controls=1"
                title="Delhi Public School Nacharam Video Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Four Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <h3 className="font-bold text-primary mb-2 text-xl">
                Lush Green
              </h3>
              <p className="text-sm text-gray-600">
                Campus with Premium Amenities
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <h3 className="font-bold text-primary mb-2 text-xl">
                State-of-Art
              </h3>
              <p className="text-sm text-gray-600">
                Classrooms & Labs
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <h3 className="font-bold text-primary mb-2 text-xl">
                Independent
              </h3>
              <p className="text-sm text-gray-600">
                Boarding for Boys <span className="text-xs text-red-600 font-semibold">(Boys Only)</span>
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
              <h3 className="font-bold text-primary mb-2 text-xl">
                Culture Inclusive
              </h3>
              <p className="text-sm text-gray-600">
                Modern Campus
              </p>
            </div>
          </div>

          {/* Button and Footer Text */}
          <div className="text-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-primary text-white px-8 py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-opacity-90 transition-colors mb-3 flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              Book Campus Tour in Person
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <p className="text-sm text-gray-500">
              Experience digitally first, then visit us in person<br/>
              <span className="text-primary font-semibold">Hostel admissions are for boys only.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VirtualExperience

