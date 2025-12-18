import { useState, useEffect } from 'react'

const ExploreOurSchool = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  const cards = [
    {
      id: 1,
      title: 'Board Exams Support',
      description: 'Daily extra classes & supervised study hours',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      image: '/hostel/13.webp',
      hoverContent: [
        'Daily extra classes',
        'Supervised study hours',
        'Digital library & study zones',
        'Micro-prep sessions and mock tests'
      ],
      modal: {
        title: 'Board Exams Support',
        subtitle: 'Daily extra classes & more',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
        sectionTitle: 'Helping You Ace Board Exams',
        description: 'A well-rounded academic support program to ensure you are fully prepared for board exams.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            ),
            text: 'Daily extra classes'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 01.787.77l4 1a1 1 0 01.316 1.968l-7 2a1 1 0 01-.788 0l-7-2a1 1 0 01.316-1.968l4-1a1 1 0 01.787-.77l1.94-.831-1.667-.714a1 1 0 10-.788-1.838l4 1.714a1 1 0 01.356.257l6.644 2.843a1 1 0 000-1.838l-7-3z" />
              </svg>
            ),
            text: 'Supervised study hours'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              </svg>
            ),
            text: 'Digital library & study zones'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
                <path d="M6 13l2-2 2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            ),
            text: 'Micro-prep sessions and mock tests'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Sports Freedom',
      description: 'Daily sports access & pro coaching',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      image: '/hostel/cricket.webp',
      hoverContent: [
        'MS Dhoni Cricket Academy',
        'YAMA Skating Academy',
        'Hyderabad Football Club',
        'Malka Komaraiah\'s Badminton Academy',
        'Basketball, Open Gym & Swimming'
    
      ],
      modal: {
        title: 'Sports Freedom',
        subtitle: 'Daily access & sports collaborations',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
        sectionTitle: 'Professional Coaching & Sports Facilities',
        description: 'Choose from a wide range of daily sports activities and unique pro-collaborations.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
                <path d="M5 10h10" stroke="currentColor" strokeWidth="2" />
              </svg>
            ),
            text: 'MS Dhoni Cricket Academy'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            ),
            text: 'YAMA Skating Academy'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <rect x="4" y="7" width="12" height="6" rx="2" />
              </svg>
            ),
            text: 'Hyderabad Football Club'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" />
              </svg>
            ),
            text: 'Basketball'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <ellipse cx="10" cy="10" rx="7" ry="3" />
              </svg>
            ),
            text: 'Swimming'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <rect x="6" y="4" width="8" height="2" rx="1" />
                <rect x="8" y="6" width="4" height="10" rx="2" />
              </svg>
            ),
            text: 'Malka Komaraiah’s Badminton Academy'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <rect x="5" y="11" width="10" height="4" rx="2" />
              </svg>
            ),
            text: 'Open gym'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Our Hall of Excellence',
      description: 'Where alumni become achievers',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
      hoverContent: [
        'State & national level athletes',
        'IIT & medicine aspirants',
        'Olympiad rankers, Academic toppers,',
        'All-rounders in sports, leadership and academics'
      ],
      modal: {
        title: 'Our Hall of Excellence',
        subtitle: 'Achievers who once lived here',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop',
        sectionTitle: 'Where Legends Begin',
        description: 'Our alumni once lived and trained in this very hostel and grew into:',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <rect x="3" y="7" width="14" height="6" rx="2" />
              </svg>
            ),
            text: 'State & national level athletes'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" />
              </svg>
            ),
            text: 'IIT & medicine aspirants'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <polygon points="10,3 13,17 10,14 7,17" />
              </svg>
            ),
            text: 'Olympiad rankers'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <rect x="6" y="6" width="8" height="8" rx="2" />
              </svg>
            ),
            text: 'Academic toppers'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2v16M2 10h16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            text: 'All-rounders in sports, leadership and academics'
          }
        ]
      }
    },
    // The rest of the cards will represent the daily life, hostel, and dining experience.
    {
      id: 4,
      title: 'Rooms & Spaces',
      description: 'Shared, bright, comfortable rooms & community lounge',
      icon: (
        <span role="img" aria-label="bed">🛏️</span>
      ),
      image: '/hostel/01.webp',
      hoverContent: [
        'Air-conditioning',
        'Individual storage',
        'Study areas, Fresh Linen',
        'Daily housekeeping',
        'Community Lounge'
      ],
      modal: {
        title: 'Rooms & Spaces',
        subtitle: 'Shared rooms & community spaces',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
        sectionTitle: 'Comfort. Community. Convenience.',
        description: 'We offer bright, organised and comfortable shared rooms with modern amenities and a vibrant community lounge.',
        certifications: [
          { icon: <span role="img" aria-label="ac-room">❄️</span>, text: 'Air-conditioning' },
          { icon: <span role="img" aria-label="locker">🔒</span>, text: 'Individual storage' },
          { icon: <span role="img" aria-label="study">📚</span>, text: 'Study areas' },
          { icon: <span role="img" aria-label="linen">🧺</span>, text: 'Fresh linen' },
          { icon: <span role="img" aria-label="housekeeping">🧹</span>, text: 'Daily housekeeping' },
          { icon: <span role="img" aria-label="lounge">🛋️</span>, text: 'Community Lounge: relax, unwind & recharge' }
        ]
      }
    },
    {
      id: 5,
      title: 'Dining',
      description: 'Balanced multi-cuisine meals, hygiene & quality checks',
      icon: (
        <span role="img" aria-label="dining">🍽️</span>
      ),
      image: '/hostel/chef.webp',
      hoverContent: [
        'Balanced meals',
        'Multi-cuisine options available',
        'Hygiene and quality checks maintained throughout the week'
      ],
      modal: {
        title: 'Dining',
        subtitle: 'Balanced meals & variety',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200&h=600&fit=crop',
        sectionTitle: 'Meal Experiences',
        description: 'Nutritious, multi-cuisine meals with hygiene and quality checks maintained throughout the week.',
        certifications: [
          { icon: <span role="img" aria-label="meal">🥗</span>, text: 'Balanced meals' },
          { icon: <span role="img" aria-label="variety">🍱</span>, text: 'Multi-cuisine options' },
          { icon: <span role="img" aria-label="hygiene">🧼</span>, text: 'Strict hygiene & quality checks' }
        ]
      }
    },
    {
      id: 6,
      title: 'Daily Life',
      description: 'Wellness, learning, and recreation routines',
      icon: (
        <span role="img" aria-label="leaf">🌿</span>
      ),
      image: '/hostel/gym.webp',
      hoverContent: [
        'Morning exercise & yoga',
        'Balanced meals',
        'Library & computer labs',
        'Sports & recreation',
        'Supervised study slots'
      ],
      modal: {
        title: 'Daily Life',
        subtitle: 'Active, healthy, and balanced',
        image: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=1200&h=600&fit=crop',
        sectionTitle: 'A Day in the Hostel',
        description: 'A structured routine to ensure holistic growth — mind, body, and soul.',
        certifications: [
          { icon: <span role="img" aria-label="yoga">🧘‍♂️</span>, text: 'Morning exercise & yoga' },
          { icon: <span role="img" aria-label="balanced">🥗</span>, text: 'Balanced meals' },
          { icon: <span role="img" aria-label="library">📖</span>, text: 'Library & computer labs' },
          { icon: <span role="img" aria-label="sports">🏸</span>, text: 'Sports & recreation' },
          { icon: <span role="img" aria-label="study">📅</span>, text: 'Supervised study slots' }
        ]
      }
    }
  ]

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4
      if (window.innerWidth >= 768) return 2
      return 1
    }
    return 4
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
      setCurrentIndex(0) // Reset to start on resize
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, cards.length - cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX
    const walk = x - startX
    const threshold = 80 // Minimum drag distance to trigger slide change
    
    if (Math.abs(walk) > threshold) {
      if (walk > 0) {
        // Swipe right - go to previous (loop)
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
        setIsDragging(false)
      } else {
        // Swipe left - go to next (loop)
        setCurrentIndex((prev) => (prev + 1) % cards.length)
        setIsDragging(false)
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX
    const walk = x - startX
    const threshold = 80
    
    if (Math.abs(walk) > threshold) {
      if (walk > 0) {
        // Swipe right - go to previous (loop)
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length)
        setIsDragging(false)
      } else {
        // Swipe left - go to next (loop)
        setCurrentIndex((prev) => (prev + 1) % cards.length)
        setIsDragging(false)
      }
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Get visible cards with looping support
  const getVisibleCards = () => {
    const visible = []
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % cards.length
      visible.push(cards[index])
    }
    return visible
  }

  const visibleCards = getVisibleCards()

  return (
    <section id="explore" className="py-16 md:py-14 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <span className="inline-block text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary">
            About The Campus
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience the Full Spectrum of{' '}<br />
            <span className="text-[#155b2e]">Delhi Public School Nacharam</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Students live in well-designed shared spaces, access exceptional sports facilities, and stay within a safe, supervised and professionally managed environment.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Grid - Draggable */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden transition-all duration-300 select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ 
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              WebkitUserSelect: 'none'
            }}
          >
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="relative rounded-2xl overflow-hidden group"
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full border-2 border-[#155b2e] flex items-center justify-center text-[#155b2e] z-10 group-hover:opacity-0 transition-opacity duration-300">
                    {card.icon}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#155b2e]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center p-6">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                      <ul className="space-y-1.8 text-sm md:text-base text-left max-h-48 overflow-y-auto">
                        {card.hoverContent?.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-white/90 mt-1.5 flex-shrink-0">•</span>
                            <span className="text-white/95 font-medium leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Content - Hidden on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-white/90">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators - One per card */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {cards.map((card, index) => {
              // Check if this card is currently visible (works with looping)
              const isVisible = visibleCards.some(visibleCard => visibleCard.id === card.id)
              // Check if this card is the first visible card (active)
              const isActive = index === currentIndex
              
              return (
                <button
                  key={card.id}
                  onClick={() => {
                    // Navigate to show this card as the first visible card
                    setCurrentIndex(index)
                  }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-3 h-3 bg-[#155b2e]'
                      : isVisible
                      ? 'w-2.5 h-2.5 bg-[#155b2e]/50'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to ${card.title}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreOurSchool
