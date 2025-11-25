import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Hostel</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-black hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('explore')}
              className="text-black hover:text-primary transition-colors"
            >
              Explore
            </button>
            <button
              onClick={() => scrollToSection('virtual')}
              className="text-black hover:text-primary transition-colors"
            >
              Virtual Tour
            </button>
            <button
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
            </button>
            <button
              onClick={() => scrollToSection('stories')}
              className="text-black hover:text-primary transition-colors"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection('career')}
              className="text-black hover:text-primary transition-colors"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection('campus')}
              className="text-black hover:text-primary transition-colors"
            >
              Campus
            </button>
            <button
              onClick={() => scrollToSection('next-step')}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-black hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('explore')}
                className="text-left text-black hover:text-primary transition-colors"
              >
                Explore
              </button>
              <button
                onClick={() => scrollToSection('virtual')}
                className="text-left text-black hover:text-primary transition-colors"
              >
                Virtual Tour
              </button>
              <button
                onClick={() => scrollToSection('grades')}
                className="text-left text-black hover:text-primary transition-colors"
              >
                Grades
              </button>
              <button
                onClick={() => scrollToSection('journey')}
                className="text-left text-black hover:text-primary transition-colors"
              >
                Journey
              </button>
              <button
                onClick={() => scrollToSection('stories')}
                className="text-left text-black hover:text-primary transition-colors"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection('career')}
                className="text-left text-black hover:text-primary transition-colors"
              >
                Career
              </button>
              <button
                onClick={() => scrollToSection('campus')}
                className="text-left text-black hover:text-primary transition-colors"
              >
                Campus
              </button>
              <button
                onClick={() => scrollToSection('next-step')}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-full"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

