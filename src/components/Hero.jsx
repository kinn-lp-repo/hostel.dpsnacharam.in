import { useState } from 'react'
import { getCountries, getCountryCallingCode } from 'libphonenumber-js'
import { getName } from 'country-list'

const Hero = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    curriculum: '',
    admissionType: 'Hostel',
    grades: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Get all countries with their codes and flags
  const getCountryCodes = () => {
    const allCountries = getCountries()
    const countryList = []
    
    allCountries.forEach((countryCode) => {
      try {
        const phoneCode = getCountryCallingCode(countryCode)
        const countryName = getName(countryCode) || countryCode
        const flag = getFlagEmoji(countryCode)
        
        countryList.push({
          code: `+${phoneCode}`,
          country: countryName,
          flag: flag,
          isoCode: countryCode
        })
      } catch (error) {
        // Skip countries that don't have phone codes
      }
    })
    
    // Sort by country name
    return countryList.sort((a, b) => a.country.localeCompare(b.country))
  }

  // Get flag emoji from country code
  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt())
    return String.fromCodePoint(...codePoints)
  }

  const countryCodes = getCountryCodes()

  const validateField = (name, value) => {
    let error = ''
    
    switch (name) {
      case 'studentName':
        if (!value.trim()) {
          error = 'Student name is required'
        } else if (value.trim().length < 2) {
          error = 'Student name must be at least 2 characters'
        }
        break
      case 'parentName':
        if (!value.trim()) {
          error = 'Parent name is required'
        } else if (value.trim().length < 2) {
          error = 'Parent name must be at least 2 characters'
        }
        break
      case 'email':
        if (!value.trim()) {
          error = 'Email address is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'mobile':
        if (!value.trim()) {
          error = 'Mobile number is required'
        } else if (!/^\d{6,15}$/.test(value.replace(/\s+/g, ''))) {
          error = 'Please enter a valid mobile number (6-15 digits)'
        }
        break
      case 'curriculum':
        if (!value) {
          error = 'Please select a curriculum'
        }
        break
      case 'grades':
        if (!value) {
          error = 'Please select a grade'
        }
        break
      default:
        break
    }
    
    return error
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    const allTouched = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'admissionType') {
        allTouched[key] = true
      }
    })
    setTouched(allTouched)

    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'admissionType' && key !== 'countryCode') {
        const error = validateField(key, formData[key])
        if (error) {
          newErrors[key] = error
        }
      }
    })

    // Validate mobile with country code
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^\d{6,15}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      newErrors.mobile = 'Please enter a valid mobile number (6-15 digits)'
    }

    setErrors(newErrors)

    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      const submitData = {
        ...formData,
        mobile: `${formData.countryCode} ${formData.mobile}`
      }
      console.log('Form submitted:', submitData)
      // Handle form submission here (e.g., API call)
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" style={{ overflow: 'visible' }}>
          {/* Left Section - School Information */}
          <div className="lg:col-span-7">
            {/* Green Tag */}
            <div className="mb-4">
              <span className="inline-block text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary">
                Shaping Tomorrow's Leaders Today
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-black">India's First</span>
              <br />
              <span className="text-primary">Career-Oriented Boarding School in Hyderabad</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              At Delhi Public School Nacharam, we don't just educate—we transform. Our holistic CBSE approach combines academic excellence with character building, discipline, and real-world career preparation.
            </p>

            {/* Schedule a Visit Button */}
            <button
              onClick={() => scrollToSection('next-step')}
              className="bg-primary text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-opacity-90 transition-colors mb-10 flex items-center gap-2"
            >
              Schedule a Visit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gray-50 border-1 border-primary rounded-xl p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0.5">4-12</h3>
                <p className="text-sm font-semibold text-primary mb-1">Grades</p>
                <p className="text-xs text-gray-600">Comprehensive Education</p>
              </div>
              <div className="bg-gray-50 border-1 border-primary rounded-xl p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0.5">CBSE & CIE</h3>
                <p className="text-sm font-semibold text-primary mb-1">Affiliated</p>
                <p className="text-xs text-gray-600">National & International Curriculum</p>
              </div>
              <div className="bg-gray-50 border-1 border-primary rounded-xl p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0.5">100%</h3>
                <p className="text-sm font-semibold text-primary mb-1">Vegetarian</p>
                <p className="text-xs text-gray-600">Nutritious Meals</p>
              </div>
              <div className="bg-gray-50 border-1 border-primary rounded-xl p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0.5">100%</h3>
                <p className="text-sm font-semibold text-primary mb-1">Residential</p>
                <p className="text-xs text-gray-600">Boarding Campus</p>
              </div>
            </div>

            {/* Awards and Ratings Section */}
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">Collaberations</h2>
              
              {/* Award Badges - Top Row */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {/* Education Leaders Awards 2024 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="mb-3">
                    <img 
                      src="/collaberations/DELF - DALF logo.jpg" 
                      alt="DELF - DALF logo"
                      className="w-64 h-24 object-contain mx-auto"
                    />
                  </div>
                </div>

                {/* India Merit Awards */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                  <div className="mb-3">
                    <img 
                      src="/collaberations/DELF-logo.png" 
                      alt="India Merit Awards"
                      className="w-64 h-24 object-contain mx-auto"
                    />
                  </div>
                </div>

                {/* ISLE Awards 2022 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1">
                  <div className="mb-3">
                    <img 
                      src="/collaberations/IBDP-logo.png" 
                      alt="ISLE Awards 2022"
                      className="w-64 h-24 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Video and Form */}
          <div className="lg:col-span-5" style={{ overflow: 'visible', padding: '15px' }}>
            {/* Video */}
            <div className="mb-6 rounded-xl overflow-visible relative shadow-primary-rotated shadow-lg" style={{ paddingBottom: '56.25%', height: 0, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <iframe 
                  src="https://player.vimeo.com/video/858580926?autoplay=1&muted=1&controls=0&loop=1&h=56d13f71fe&badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Dps Webslide New"
                />
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-primary-rotated relative shadow-lg" style={{ marginTop: '15px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Enquire Now!</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Student's Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Student's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter student's name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.studentName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.studentName && (
                    <p className="mt-1 text-sm text-red-500">{errors.studentName}</p>
                  )}
                </div>

                {/* Parent Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter parent name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.parentName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="mt-1 text-sm text-red-500">{errors.parentName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter email address"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10">
                      <span className="text-xl">{countryCodes.find(c => c.code === formData.countryCode)?.flag || '🇮🇳'}</span>
                      <div className="relative">
                        <span className="text-sm text-gray-700 font-medium mr-5">
                          {countryCodes.find(c => c.code === formData.countryCode)?.isoCode || 'IN'} {formData.countryCode}
                        </span>
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.isoCode} value={country.code}>
                              {country.isoCode} {country.code}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Enter mobile number"
                      className={`w-full pl-32 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.mobile ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                  )}
                </div>

                {/* Curriculum */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Curriculum <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.curriculum ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select curriculum</option>
                    <option value="CBSE">CBSE</option>
                    <option value="CIE">CIE</option>
                    <option value="CBSE & CIE">CBSE & CIE</option>
                  </select>
                  {errors.curriculum && (
                    <p className="mt-1 text-sm text-red-500">{errors.curriculum}</p>
                  )}
                </div>

                {/* Admission Type - Hidden */}
                <input
                  type="hidden"
                  name="admissionType"
                  value={formData.admissionType}
                />

                {/* Grades */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Grades <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="grades"
                    value={formData.grades}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.grades ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select grade</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                  {errors.grades && (
                    <p className="mt-1 text-sm text-red-500">{errors.grades}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

