import { useMemo } from 'react'

// Facilities images
const facilitiesImages = [
  '/hostel/campus.webp',
  '/hostel/01.webp',
  '/hostel/02.webp',
  '/hostel/computerlab.webp',
  '/hostel/03.webp',
  '/hostel/04.webp',
  '/hostel/05.webp',
  '/hostel/06.webp',
  '/hostel/08.webp',
  '/hostel/13.webp',
  '/hostel/bedroom.webp',
  '/hostel/chef.webp',
  '/hostel/food.webp',
  '/hostel/mess_students.webp',
  '/hostel/hall.webp',
  '/hostel/hostel.webp',
  '/hostel/lockers.webp',
  '/hostel/study-hours.webp'
]

// Sports images
const sportsImages = [
  '/hostel/cricket.webp',
  '/hostel/cycle.webp',
  '/hostel/football.webp',
  '/hostel/gym.webp',
  '/hostel/gymm.webp',
  '/hostel/Gymnasium.webp',
  '/hostel/swimming.webp',
  '/hostel/tabletennisboard.webp',
  '/hostel/yogaroom.webp'
]

const VibrantCampus = () => {
  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Function to get shuffled images for a row, ensuring variety
  const getShuffledImages = (array, count) => {
    // Shuffle all images first to get a random order
    const shuffled = shuffleArray(array)
    
    // Build array by cycling through shuffled images
    // This ensures all images are used before any repeats
    const images = []
    for (let i = 0; i < count; i++) {
      images.push({
        id: i + 1,
        url: shuffled[i % shuffled.length],
      })
    }
    return images
  }

  // Create 2 rows - Facilities and Sports
  // Each row uses shuffled images to ensure variety (memoized to prevent re-rendering)
  const facilitiesRowImages = useMemo(() => getShuffledImages(facilitiesImages, 10), []) // Facilities row
  const sportsRowImages = useMemo(() => getShuffledImages(sportsImages, 10), []) // Sports row

  return (
    <section id="campus" className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 px-2">
            <span className="text-black">Our Vibrant</span>{' '}
            <span className="text-[#155b2e]">Campus</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience the vibrant life and beautiful campus of Delhi Public School Nacharam
          </p>
        </div>
      </div>

      {/* Scrolling Image Rows - Full Width */}
      <div className="space-y-4 md:space-y-6 lg:space-y-8 mt-6 md:mt-8">
        {/* Row 1 - Facilities */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-row-1 gap-3 md:gap-4">
            {/* Double duplicate for seamless scrolling */}
            {[...facilitiesRowImages, ...facilitiesRowImages].map((img, idx) => (
              <div
                key={`facilities-${idx}`}
                className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] rounded-lg md:rounded-xl overflow-hidden shadow-lg transition-all duration-300 md:hover:scale-105 md:hover:shadow-xl md:hover:brightness-110 cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={`Campus facility ${img.id}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Sports (reverse direction) */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-row-2 gap-3 md:gap-4">
            {/* Double duplicate for seamless scrolling */}
            {[...sportsRowImages, ...sportsRowImages].map((img, idx) => (
              <div
                key={`sports-${idx}`}
                className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] rounded-lg md:rounded-xl overflow-hidden shadow-lg transition-all duration-300 md:hover:scale-105 md:hover:shadow-xl md:hover:brightness-110 cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={`Sports activity ${img.id}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VibrantCampus

