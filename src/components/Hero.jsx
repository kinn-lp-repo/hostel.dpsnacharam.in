import { useState, useEffect } from 'react'
import { getCountries, getCountryCallingCode } from 'libphonenumber-js'
import { getName } from 'country-list'
import { trackFormSubmit } from '../utils/gtmEvents'

const Hero = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    curriculum: '',
    admissionType: '',
    grades: '',
    schoolName: 'DPS Nacharam'
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [availableGrades, setAvailableGrades] = useState([])
  const [mobileStep, setMobileStep] = useState(1)

  // Check if form is valid (all required fields filled and no errors)
  const isFormValid = () => {
    const { studentName, parentName, email, mobile, curriculum, grades } = formData
    
    // Check all required fields are filled
    if (!studentName.trim() || !parentName.trim() || !email.trim() || 
        !mobile.trim() || !curriculum || !grades) {
      return false
    }
    
    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return false
    }
    
    // Check mobile is 10 digits
    if (!/^\d{10}$/.test(mobile)) {
      return false
    }
    
    return true
  }

  // Grade data arrays (hostel only for this landing page)
  const cbseHostelGrades = [
    { id: "465", name: "Grade 5" },
    { id: "16", name: "Grade 6" },
    { id: "17", name: "Grade 7" },
    { id: "18", name: "Grade 8" },
    { id: "19", name: "Grade 9" },
    { id: "20", name: "Grade 10" },
    { id: "21", name: "Grade 11" },
    { id: "22", name: "Grade 12" },
  ]

  const cambridgeHostelGrades = [
    { id: "456", name: "Grade 5" },
    { id: "38", name: "Grade 6" },
    { id: "39", name: "Grade 7" },
    { id: "40", name: "Grade 8" },
    { id: "41", name: "Grade 9" },
    { id: "42", name: "Grade 10" },
    { id: "43", name: "Grade 11" },
    { id: "44", name: "Grade 12" },
  ]

  // Admission type IDs for hostel
  const admissionTypeMapping = {
    "1": "2",  // CBSE -> Hostel(Only for Boys)
    "2": "4",  // Cambridge -> Hostel(Only for Boys)
  }

  // Value mappings for n8n API
  const curriculumValueMapping = {
    "1": "CBSE",
    "2": "Cambridge"
  }

  const admissionTypeValueMapping = {
    "2": "Hostel(Only for Boys)",
    "4": "Hostel(Only for Boys)"
  }

  const gradeValueMapping = {
    "456": "Grade 5", "16": "Grade 6", "17": "Grade 7", "18": "Grade 8", "19": "Grade 9",
    "20": "Grade 10", "21": "Grade 11", "22": "Grade 12",
    "38": "Grade 6", "39": "Grade 7", "40": "Grade 8", "41": "Grade 9",
    "42": "Grade 10", "43": "Grade 11", "44": "Grade 12", "465": "Grade 5"
  }

  // Get URL parameter function
  const getURLParameter = (name) => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      return urlParams.get(name) || ''
    }
    return ''
  }

  // Update grades when curriculum changes
  useEffect(() => {
    if (formData.curriculum) {
      const admissionTypeId = admissionTypeMapping[formData.curriculum]
      setFormData(prev => ({ ...prev, admissionType: admissionTypeId, grades: '' }))
      
      if (formData.curriculum === "1") {
        setAvailableGrades(cbseHostelGrades)
      } else if (formData.curriculum === "2") {
        setAvailableGrades(cambridgeHostelGrades)
      }
    } else {
      setAvailableGrades([])
      setFormData(prev => ({ ...prev, admissionType: '', grades: '' }))
    }
  }, [formData.curriculum])

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
        } else if (!/^\d{10}$/.test(value.replace(/\s+/g, ''))) {
          error = 'Please enter a valid 10-digit mobile number'
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

  const validateFields = (fieldNames) => {
    const newErrors = {}

    fieldNames.forEach((name) => {
      const error = validateField(name, formData[name])
      if (error) newErrors[name] = error
    })

    // Special-case mobile validation
    if (fieldNames.includes('mobile')) {
      if (!formData.mobile.trim()) {
        newErrors.mobile = 'Mobile number is required'
      } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s+/g, ''))) {
        newErrors.mobile = 'Please enter a valid 10-digit mobile number'
      }
    }

    setErrors((prev) => ({ ...prev, ...newErrors }))
    setTouched((prev) => {
      const next = { ...prev }
      fieldNames.forEach((name) => {
        next[name] = true
      })
      return next
    })

    return Object.keys(newErrors).length === 0
  }

  const handleMobileNext = () => {
    if (mobileStep === 1) {
      if (validateFields(['studentName', 'parentName'])) setMobileStep(2)
      return
    }
    if (mobileStep === 2) {
      if (validateFields(['email', 'mobile'])) setMobileStep(3)
    }
  }

  const handleMobileBack = () => setMobileStep((s) => Math.max(1, s - 1))

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Mark all fields as touched
    const allTouched = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'admissionType' && key !== 'schoolName') {
        allTouched[key] = true
      }
    })
    setTouched(allTouched)

    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'admissionType' && key !== 'countryCode' && key !== 'schoolName') {
        const error = validateField(key, formData[key])
        if (error) {
          newErrors[key] = error
        }
      }
    })

    // Validate mobile with country code (10 digits)
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number'
    }

    setErrors(newErrors)

    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)
      await handleFormSubmission()
    }
  }

  // Handle form submission to both APIs
  const handleFormSubmission = async () => {
    const curriculumId = formData.curriculum
    const admissionTypeId = formData.admissionType
    const gradeId = formData.grades

    // Data for EE API (with IDs)
    const eeData = {
      FirstName: formData.studentName,
      Email: formData.email,
      MobileNumber: formData.mobile,
      leadChannel: "20",
      leadSource: getURLParameter('utm_source'),
      leadMedium: getURLParameter('utm_medium'),
      leadCampaign: getURLParameter('utm_campaign'),
      Entity4: gradeId,
      Textb2: "",
      FathersName: formData.parentName,
      Textb3: getURLParameter('gclid'),
      source: "dps-pgos",
      AuthToken: "dps-pgos_27-10-2024",
      schoolName: formData.schoolName,
    }

    // Data for n8n API (with values instead of IDs)
    const n8nData = {
      parentName: formData.parentName,
      childName: formData.studentName,
      mobileNumber: formData.mobile,
      email: formData.email,
      curriculum: curriculumValueMapping[curriculumId] || curriculumId,
      admissionType: admissionTypeValueMapping[admissionTypeId] || admissionTypeId,
      grade: gradeValueMapping[gradeId] || gradeId,
      schoolName: formData.schoolName,
      location: "",
      Textb3: getURLParameter('gclid'),
      leadSource: getURLParameter('utm_source'),
      leadMedium: getURLParameter('utm_medium'),
      leadCampaign: getURLParameter('utm_campaign')
    }

    try {
      // Submit to both APIs in parallel
      const [eeResponse, n8nResponse] = await Promise.allSettled([
        fetch("https://thirdpartyapi.extraaedge.com/api/SaveRequest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eeData),
        }),
        fetch("https://n8n.k-innovative.com/webhook/b2a2a4cc-eea6-45f7-ac56-531550c0478b", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(n8nData),
        })
      ])

      // Check results
      const eeSuccess = eeResponse.status === 'fulfilled' && eeResponse.value.ok
      const n8nSuccess = n8nResponse.status === 'fulfilled' && n8nResponse.value.ok

      console.log('EE API Response:', eeSuccess ? 'Success' : 'Failed')
      console.log('n8n API Response:', n8nSuccess ? 'Success' : 'Failed')

      if (eeSuccess || n8nSuccess) {
        // Track form submission event for GTM
        trackFormSubmit({
          parentName: formData.parentName,
          childName: formData.studentName,
          mobileNumber: formData.mobile,
          email: formData.email,
          curriculum: curriculumValueMapping[curriculumId] || curriculumId,
          admissionType: admissionTypeValueMapping[admissionTypeId] || admissionTypeId,
          grade: gradeValueMapping[gradeId] || gradeId,
          schoolName: formData.schoolName
        }, 'hostel-enquiry-form')
        
        // Reset the form
        setFormData({
          studentName: '',
          parentName: '',
          email: '',
          countryCode: '+91',
          mobile: '',
          curriculum: '',
          admissionType: '',
          grades: '',
          schoolName: 'DPS Nacharam'
        })
        setTouched({})
        setErrors({})
        setAvailableGrades([])
        
        // Show success message or redirect
        alert('Thank you! Your enquiry has been submitted successfully.')
      } else {
        console.error("Both API submissions failed")
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
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
                Comfort. Community. Confidence.
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-black">India's No. 1</span>
              <br />
              <span className="text-primary">Career-Oriented Boys’ Boarding School</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              A modern boys’ residential campus in Nacharam, Hyderabad offering a focused, structured, and globally aligned living experience.
            </p>

            {/* Schedule a Visit Button */}
            <button
              onClick={() => scrollToSection('virtual')}
              className="bg-primary text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-opacity-90 transition-colors mb-10 flex items-center gap-2 cursor-pointer"
            >
              Explore the Campus
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Hide this whole section on mobile */}
            <div className="hidden md:block">
            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
              <div className="bg-gray-50 border-1 border-primary rounded-xl p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0.5">V - XII</h3>
                <p className="text-sm font-semibold text-primary mb-1">Grades</p>
            
              </div>
              <div className="bg-gray-50 border-1 border-primary rounded-xl p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0.5">CBSE & CIE</h3>
                <p className="text-sm font-semibold text-primary mb-1">Affiliated</p>
               
              </div>
              <div className="bg-gray-50 border-1 border-primary rounded-xl p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0.5">26+ Acres</h3>
                <p className="text-sm font-semibold text-primary mb-1">Green Campus</p>
               
              </div>
              <div className="bg-gray-50 border-1 border-primary rounded-xl p-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-0.5">100%</h3>
                <p className="text-sm font-semibold text-primary mb-1">Residential</p>
              </div>
            </div>

            {/* Collaborations */}
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
            <div id="eform" className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-primary-rotated relative shadow-lg" style={{ marginTop: '15px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Enquire Now!</h2>

              {/* Mobile Step Form */}
              <div className="md:hidden">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-600">
                        Step {mobileStep} of 3
                      </p>
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {mobileStep === 1
                          ? "Student & Parent Details"
                          : mobileStep === 2
                            ? "Contact Details"
                            : "Academic Details"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {mobileStep === 1
                          ? "Tell us who you're enquiring for."
                          : mobileStep === 2
                            ? "Where should we reach you?"
                            : "Choose curriculum and grade."}
                      </p>
                    </div>

                  </div>

                  <div className="mt-3 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${(mobileStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* School Name - Hidden */}
                  <input type="hidden" name="schoolName" value={formData.schoolName} />
                  {/* Admission Type - Hidden */}
                  <input type="hidden" name="admissionType" value={formData.admissionType} />

                  {mobileStep === 1 && (
                    <>
                {/* Student's Name */}
                <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                    Student's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter student's name"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.studentName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.studentName && (
                    <p className="mt-1 text-sm text-red-500">{errors.studentName}</p>
                  )}
                </div>

                {/* Parent Name */}
                <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                    Parent Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter parent name"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.parentName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="mt-1 text-sm text-red-500">{errors.parentName}</p>
                  )}
                </div>
                    </>
                  )}

                  {mobileStep === 2 && (
                    <>
                {/* Email Address */}
                <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter email address"
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                      {/* Mobile Number (mobile-optimized stacked UI) */}
                <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                    Mobile Number<span className="text-red-500">*</span>
                  </label>
                        <div className="space-y-2">
                          <div className="relative w-full border border-gray-300 rounded-lg px-3 py-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-lg">
                                  {countryCodes.find(c => c.code === formData.countryCode)?.flag || '🇮🇳'}
                                </span>
                                <span className="text-sm text-gray-700 font-medium truncate">
                          {countryCodes.find(c => c.code === formData.countryCode)?.isoCode || 'IN'} {formData.countryCode}
                        </span>
                              </div>
                              <svg className="w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleInputChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full"
                              aria-label="Country code"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.isoCode} value={country.code}>
                              {country.isoCode} {country.code}
                            </option>
                          ))}
                        </select>
                          </div>

                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '')
                              setFormData(prev => ({ ...prev, mobile: value }))
                              if (touched.mobile) {
                                const error = validateField('mobile', value)
                                setErrors(prev => ({ ...prev, mobile: error }))
                              }
                            }}
                            onKeyPress={(e) => {
                              if (e.which < 48 || e.which > 57) {
                                e.preventDefault()
                              }
                            }}
                            onPaste={(e) => {
                              const pastedText = e.clipboardData.getData('text')
                              const numericOnly = pastedText.replace(/\D/g, '')
                              e.preventDefault()
                              setFormData(prev => ({ ...prev, mobile: numericOnly }))
                            }}
                            onBlur={handleBlur}
                            placeholder="Enter 10-digit mobile number"
                            maxLength={10}
                            className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                              errors.mobile ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                        </div>
                        {errors.mobile && (
                          <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                        )}
                      </div>
                    </>
                  )}

                  {mobileStep === 3 && (
                    <>
                      {/* Curriculum */}
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Curriculum <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="curriculum"
                          value={formData.curriculum}
                          onChange={(e) => {
                            const { name, value } = e.target
                            setFormData(prev => ({ ...prev, [name]: value }))
                            if (touched[name]) {
                              const error = validateField(name, value)
                              setErrors(prev => ({ ...prev, [name]: error }))
                            }
                          }}
                          onBlur={handleBlur}
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.curriculum ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select curriculum</option>
                          <option value="1">CBSE</option>
                          <option value="2">Cambridge</option>
                        </select>
                        {errors.curriculum && (
                          <p className="mt-1 text-sm text-red-500">{errors.curriculum}</p>
                        )}
                      </div>

                      {/* Grades */}
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">
                          Grades <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="grades"
                          value={formData.grades}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          disabled={!formData.curriculum}
                          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.grades ? 'border-red-500' : 'border-gray-300'
                          } ${!formData.curriculum ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                        >
                          <option value="">Select grade</option>
                          {availableGrades.map((grade) => (
                            <option key={grade.id} value={grade.id}>
                              {grade.name}
                            </option>
                          ))}
                        </select>
                        {errors.grades && (
                          <p className="mt-1 text-sm text-red-500">{errors.grades}</p>
                        )}
                      </div>
                    </>
                  )}

                  {/* Step Navigation */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={handleMobileBack}
                      disabled={mobileStep === 1}
                      className={`w-2/5 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                        mobileStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>

                    {mobileStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleMobileNext}
                        className="w-3/5 bg-primary text-white py-3 rounded-lg font-semibold text-sm hover:bg-opacity-90 active:bg-opacity-80 transition-colors flex items-center justify-center gap-2"
                      >
                        Next
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || !isFormValid()}
                        className={`w-3/5 bg-primary text-white py-3 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center gap-2 ${
                          isSubmitting || !isFormValid() ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 cursor-pointer'
                        }`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                        {!isSubmitting && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Desktop Form (unchanged full form) */}
              <div className="hidden md:block">
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {/* School Name - Hidden */}
                  <input type="hidden" name="schoolName" value={formData.schoolName} />
                  {/* Student's Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Student's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Enter student's name"
                      className={`w-full px-3 sm:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.studentName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.studentName && (
                      <p className="mt-1 text-sm text-red-500">{errors.studentName}</p>
                    )}
                  </div>

                  {/* Parent Name */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Parent Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Enter parent name"
                      className={`w-full px-3 sm:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.parentName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.parentName && (
                      <p className="mt-1 text-sm text-red-500">{errors.parentName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Enter email address"
                      className={`w-full px-3 sm:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Mobile Number<span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2 sm:space-y-0 sm:relative">
                      {/* Mobile: stacked country selector + input. Desktop: inline selector overlay. */}
                      <div className="sm:absolute sm:left-3 sm:top-1/2 sm:-translate-y-1/2 sm:flex sm:items-center sm:gap-2 sm:z-10">
                        <div className="relative w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 sm:p-0 sm:border-0">
                          <div className="flex items-center justify-between sm:justify-start sm:gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-lg sm:text-xl">
                                {countryCodes.find(c => c.code === formData.countryCode)?.flag || '🇮🇳'}
                              </span>
                              <span className="text-sm text-gray-700 font-medium truncate">
                                {countryCodes.find(c => c.code === formData.countryCode)?.isoCode || 'IN'} {formData.countryCode}
                              </span>
                            </div>
                            <svg className="w-4 h-4 text-gray-500 sm:w-3 sm:h-3 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            className="absolute inset-0 opacity-0 cursor-pointer w-full"
                            aria-label="Country code"
                          >
                            {countryCodes.map((country) => (
                              <option key={country.isoCode} value={country.code}>
                                {country.isoCode} {country.code}
                              </option>
                            ))}
                          </select>
                      </div>
                    </div>

                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={(e) => {
                        // Only allow numeric input
                        const value = e.target.value.replace(/\D/g, '')
                        setFormData(prev => ({ ...prev, mobile: value }))
                        if (touched.mobile) {
                          const error = validateField('mobile', value)
                          setErrors(prev => ({ ...prev, mobile: error }))
                        }
                      }}
                      onKeyPress={(e) => {
                        // Allow only digits (0-9)
                        if (e.which < 48 || e.which > 57) {
                          e.preventDefault()
                        }
                      }}
                      onPaste={(e) => {
                        // Handle paste - strip non-numeric characters
                        const pastedText = e.clipboardData.getData('text')
                        const numericOnly = pastedText.replace(/\D/g, '')
                        e.preventDefault()
                        setFormData(prev => ({ ...prev, mobile: numericOnly }))
                      }}
                      onBlur={handleBlur}
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                        className={`w-full px-3 sm:pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:pl-32 ${
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
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Curriculum <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={(e) => {
                      const { name, value } = e.target
                      setFormData(prev => ({ ...prev, [name]: value }))
                      if (touched[name]) {
                        const error = validateField(name, value)
                        setErrors(prev => ({ ...prev, [name]: error }))
                      }
                    }}
                    onBlur={handleBlur}
                      className={`w-full px-3 sm:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.curriculum ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select curriculum</option>
                    <option value="1">CBSE</option>
                    <option value="2">Cambridge</option>
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
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Grades <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="grades"
                    value={formData.grades}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    disabled={!formData.curriculum}
                      className={`w-full px-3 sm:px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.grades ? 'border-red-500' : 'border-gray-300'
                    } ${!formData.curriculum ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  >
                    <option value="">Select grade</option>
                    {availableGrades.map((grade) => (
                      <option key={grade.id} value={grade.id}>
                        {grade.name}
                      </option>
                    ))}
                  </select>
                  {errors.grades && (
                    <p className="mt-1 text-sm text-red-500">{errors.grades}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                    className={`w-full bg-primary text-white py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                    isSubmitting || !isFormValid() ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 cursor-pointer'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

