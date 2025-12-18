const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center md:justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
            <img 
              src="/hostel/header.webp" 
              alt="Hostel" 
              className="w-44 h-10 sm:w-48 sm:h-12 md:w-56 md:h-11 lg:w-80 lg:h-12 object-contain" 
            />
            <img 
              src="https://cbse.dpsnacharam.in/assets/img/CBSE%20Logo.webp" 
              alt="CBSE Logo" 
              className="h-10 w-auto sm:h-12 md:h-11 lg:h-12 object-contain flex-shrink-0" 
            />
            <img 
              src="https://cbse.dpsnacharam.in/assets/img/Cambridge%20logo%202024.webp" 
              alt="Cambridge Logo" 
              className="h-10 w-auto sm:h-12 md:h-11 lg:h-12 object-contain flex-shrink-0" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-black hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('explore')}
              className="text-black hover:text-primary transition-colors cursor-pointer"
            >
              Explore
            </button>
            <button
              onClick={() => scrollToSection('virtual')}
              className="text-black hover:text-primary transition-colors cursor-pointer"
            >
              Virtual Tour
            </button>
            {/* <button
              onClick={() => scrollToSection('grades')}
              className="text-black hover:text-primary transition-colors"
            >
              Grades
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="text-black hover:text-primary transition-colors"
            >
              Journey
            </button> */}
            {/* <button
              onClick={() => scrollToSection('stories')}
              className="text-black hover:text-primary transition-colors"
            >
              Stories
            </button> */}
            <button
              onClick={() => scrollToSection('career')}
              className="text-black hover:text-primary transition-colors cursor-pointer"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection('campus')}
              className="text-black hover:text-primary transition-colors cursor-pointer"
            >
              Campus
            </button>
            <button
              onClick={() => scrollToSection('eform')}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

