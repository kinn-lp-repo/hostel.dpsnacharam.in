import { useMemo } from 'react'

// Array of hostel images (outside component to avoid recreation)
// Note: Some files are .JPG (uppercase) - matching actual file extensions
const hostelImages = [
  '/hostel/01.jpg',
  '/hostel/02.jpg',
  '/hostel/03.jpg',
  '/hostel/04.jpg',
  '/hostel/05.jpg',
  '/hostel/06.jpg',
  '/hostel/07.jpg',
  '/hostel/08.jpg',
  '/hostel/09.JPG',
  '/hostel/10.JPG',
  '/hostel/11.JPG',
  '/hostel/12.JPG',
  '/hostel/13.jpg',
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
  const getShuffledImages = (count) => {
    // Shuffle all images first to get a random order
    const shuffled = shuffleArray(hostelImages)
    
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

  // Create 3 rows with different numbers of images for varied scrolling speeds
  // All complete in same time (40s) but cover different distances = different speeds
  // Each row uses shuffled images to ensure variety (memoized to prevent re-rendering)
  const row1Images = useMemo(() => getShuffledImages(10), []) // Fastest scroll (covers more distance)
  const row2Images = useMemo(() => getShuffledImages(9), [])  // Medium scroll
  const row3Images = useMemo(() => getShuffledImages(9), [])  // Slower scroll (covers less distance)

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
        {/* Row 1 - Fastest scroll (covers more distance in same time) */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-row-1 gap-3 md:gap-4">
            {/* Double duplicate - scrolls full width for fastest speed */}
            {[...row1Images, ...row1Images].map((img, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] rounded-lg md:rounded-xl overflow-hidden shadow-lg transition-all duration-300 md:hover:scale-105 md:hover:shadow-xl md:hover:brightness-110 cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={`Campus activity ${img.id}`}
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

        {/* Row 2 - Medium scroll (reverse direction) */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-row-2 gap-3 md:gap-4">
            {/* Double duplicate for medium scroll distance */}
            {[...row2Images, ...row2Images].map((img, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] rounded-lg md:rounded-xl overflow-hidden shadow-lg transition-all duration-300 md:hover:scale-105 md:hover:shadow-xl md:hover:brightness-110 cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={`Campus activity ${img.id}`}
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

        {/* Row 3 - Slower scroll (covers less distance in same time) */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-row-3 gap-3 md:gap-4">
            {/* Triple duplicate - scrolls 1/3 width for slower speed */}
            {[...row3Images, ...row3Images, ...row3Images].map((img, idx) => (
              <div
                key={`row3-${idx}`}
                className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] rounded-lg md:rounded-xl overflow-hidden shadow-lg transition-all duration-300 md:hover:scale-105 md:hover:shadow-xl md:hover:brightness-110 cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={`Campus activity ${img.id}`}
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

