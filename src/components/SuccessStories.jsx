import { useState, useEffect } from 'react'

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const stories = [
    {
      name: 'Ayush Jishnu',
      category: 'Management',
      achievement: 'Admission into Indian Institute of Management (IIM-B) Bangalore',
      institution: 'भारतीय प्रबंध संस्थान बेंगलूर INDIAN INSTITUTE OF MANAGEMENT BANGALORE',
      quote: 'The comprehensive preparation and guidance here helped me achieve my dream of getting into IIM Bangalore.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    },
    {
      name: 'Poorv Mittal',
      category: 'Commerce',
      achievement: 'Successfully cleared the CA Foundation Exam',
      institution: 'CA Foundation Cleared',
      logo: 'CA FOUNDATION',
      quote: 'The structured approach and expert guidance made my CA Foundation journey successful.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    },
    {
      name: 'Priya Sharma',
      category: 'Design',
      achievement: 'Admission into National Institute of Design (NID)',
      institution: 'NATIONAL INSTITUTE OF DESIGN',
      quote: 'The creative environment and mentorship helped me develop my design skills and get into NID.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [stories.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Get visible cards (current, previous, next)
  const getVisibleCards = () => {
    const cards = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + stories.length) % stories.length
      cards.push({ ...stories[index], position: i })
    }
    return cards
  }

  return (
    <section id="stories" className="py-6 md:py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Success Stories Badge */}
        <div className="text-center mb-6">
          <span className="inline-block text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary">
            Success Stories
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="text-black">Excellence</span>{' '}
            <span className="text-primary">Achieved</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our students excel at India's most prestigious institutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto mt-8 md:mt-12">
          {/* Mobile View - All Cards Stacked */}
          <div className="md:hidden space-y-6">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border-1 border-primary">
                {/* Image Section - Top */}
                <div className="relative w-full h-64 bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Category Tag - Bottom Center */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                    <span className="text-sm font-semibold text-black">{story.category}</span>
                  </div>
                </div>

                {/* Content Section - Bottom */}
                <div className="p-5 space-y-3">
                  <h3 className="text-2xl font-bold text-black">
                    {story.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary leading-tight">
                    {story.achievement}
                  </p>
                  <p className="text-sm text-black font-medium">
                    {story.institution}
                  </p>
                  
                  {/* Logo Section (for CA Foundation) */}
                  {story.logo && (
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-primary rounded-lg">
                        <span className="text-white font-bold text-lg">{story.logo.split(' ')[0]}</span>
                        <span className="text-white font-semibold text-sm">{story.logo.split(' ')[1]}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-gray-600 italic text-sm leading-relaxed pt-2">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Three Card Carousel */}
          <div className="hidden md:block relative h-[360px] overflow-visible">
            {/* Cards Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {getVisibleCards().map((story, idx) => {
                const isCenter = story.position === 0
                const scale = isCenter ? 1 : 0.7
                const opacity = isCenter ? 1 : 0.4
                const translateX = story.position * 30
                const translateY = isCenter ? 0 : Math.abs(story.position) * 10

                return (
                  <div
                    key={`${story.name}-${idx}`}
                    className="absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      transform: `translateX(calc(${translateX}% + ${story.position * 15}px)) translateY(${translateY}px) scale(${scale})`,
                      opacity: opacity,
                      zIndex: isCenter ? 10 : 5 - Math.abs(story.position),
                      width: isCenter ? '90%' : '70%',
                      maxWidth: '900px',
                      pointerEvents: isCenter ? 'auto' : 'none',
                      willChange: 'transform, opacity',
                    }}
                  >
                    <div 
                      className="bg-white rounded-3xl shadow-xl overflow-hidden h-[340px] flex flex-row border-1 border-primary transition-shadow duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" 
                      style={{
                        boxShadow: isCenter 
                          ? '0 20px 40px -12px rgba(0, 0, 0, 0.15)' 
                          : '0 10px 20px -8px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {/* Image Section - Left Side */}
                      <div className="relative w-[42%] h-full bg-gray-100 flex-shrink-0">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-full h-full object-cover object-center"
                        />
                        {/* Category Tag */}
                        <div className="absolute top-5 left-5 bg-white rounded-lg px-3 py-1.5 shadow-sm z-10">
                          <span className="text-sm font-semibold text-black">{story.category}</span>
                        </div>
                        {/* Background Pattern (for design effect) */}
                        {story.category === 'Design' && (
                          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                            <div className="absolute inset-0 text-black text-xs font-bold" style={{
                              transform: 'rotate(-45deg)',
                              transformOrigin: 'center',
                              whiteSpace: 'nowrap',
                              lineHeight: '2',
                            }}>
                              {'UNIVERSITY THE ACADEMY '.repeat(20)}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content Section - Right Side */}
                      <div className="w-[58%] p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold text-black mb-3">
                            {story.name}
                          </h3>
                          <p className="text-xl font-semibold text-primary mb-3">
                            {story.achievement}
                          </p>
                          <p className="text-base text-black mb-4 font-medium leading-relaxed">
                            {story.institution}
                          </p>
                          
                          {/* Logo Section (for CA Foundation) */}
                          {story.logo && (
                            <div className="mb-5">
                              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-primary rounded-lg">
                                <span className="text-white font-bold text-xl">{story.logo.split(' ')[0]}</span>
                                <span className="text-white font-semibold text-sm">{story.logo.split(' ')[1]}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div>
                          <p className="text-gray-600 italic text-lg leading-relaxed">
                            "{story.quote}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Desktop Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-lg text-gray-700 flex items-center justify-center transition-all duration-200 hover:scale-110 z-20 border border-gray-200"
              aria-label="Previous story"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-50 shadow-lg text-gray-700 flex items-center justify-center transition-all duration-200 hover:scale-110 z-20 border border-gray-200"
              aria-label="Next story"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          {/* <div className="flex justify-center items-center gap-2.5 mt-12">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-2.5 h-2.5 bg-primary'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories

