const VirtualExperience = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      title: 'Lush Green',
      description: 'Campus with Premium Amenities',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 20c8 0 14-6 14-14v-1h-1C12 5 6 11 6 19v1h1Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 19c2-3 6-7 12-11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'State-of-Art',
      description: 'Classrooms & Labs',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 19h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 9h8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Independent',
      description: (
        <>
          Boarding for Boys{' '}
          <span className="text-[10px] sm:text-xs text-red-600 font-semibold">
            (Boys Only)
          </span>
        </>
      ),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 21v-4a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: 'Culture Inclusive',
      description: 'Modern Campus',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-gradient-to-br from-white to-primary/5 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl border border-gray-100/80 hover:border-primary/20 transition-all duration-300 text-center flex flex-col items-center justify-between min-h-[140px] sm:min-h-[160px] md:min-h-[180px] md:hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/15 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-extrabold text-primary mb-1.5 text-base sm:text-lg md:text-xl leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  {feature.description}
                </p>
              </div>
            ))}
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

