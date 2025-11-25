import { useState } from 'react'

const CareerPreparation = () => {
  const [imageErrors, setImageErrors] = useState({})
  const partners = [
    {
      name: 'Allen',
      subtitle: 'IIT & NEET Preparation',
      description: "India's leading coaching institute for engineering and medical entrance exams",
      exams: ['JEE Main', 'JEE Advanced', 'NEET'],
      borderColor: 'border-blue-500',
      logoPath: '/partners/aakash-logo.png'
    },
    {
      name: 'MODe',
      subtitle: 'Design Entrance Preparation',
      description: 'Expert coaching for design and architecture entrance examinations',
      exams: ['NATA', 'NID', 'NIFT', 'UCEED'],
      borderColor: 'border-purple-500',
      logoPath: '/partners/resonance-logo.png'
    },
    {
      name: 'Trisha',
      subtitle: 'Professional Course Preparation',
      description: 'Comprehensive preparation for law, management and commerce entrance exams',
      exams: ['CA', 'CLAT', 'IPMAT'],
      borderColor: 'border-red-500',
      logoPath: '/partners/patashala-logo.png'
    }
  ]

  return (
    <section id="career" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-5 py-2 rounded-full text-sm font-semibold shadow-sm border border-green-200/50">
              Career Preparation Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Prepare for your dream career from Grade 11
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From Grade 11 onwards, our students embark on a journey of focused career preparation. Choose your dream path and excel in competitive examinations with industry-leading coaching partners.
          </p>
        </div>

        {/* Two Column Cards Section */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative">
            {/* Left Card - Board Exam Preparation */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100/80 relative z-10">
              <div className="relative">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7M5 12h14" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      Intensive Board Exam Preparation by School
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Our school delivers comprehensive and rigorous preparation for Grade 11 and 12 board examinations, ensuring every student achieves academic excellence and builds a solid foundation for their future.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-5 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed pt-0.5">Rigorous curriculum perfectly aligned with board standards</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed pt-0.5">Regular assessments and comprehensive mock examinations</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed pt-0.5">Personalized attention and dedicated doubt-clearing sessions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Plus Button */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
              <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl border-2 border-gray-200">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {/* Right Card - Coaching Excellence */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100/80 relative z-10">
              <div className="relative">
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      Focused Coaching Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      Experience unparalleled competitive exam preparation with expert coaching faculty residing on campus, ensuring continuous guidance and mentorship for your success journey.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-5 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed pt-0.5">Expert coaching faculty residing within campus premises</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed pt-0.5">Periodic performance analysis and detailed progress reports</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed pt-0.5">Comprehensive mock tests and exam series to ace competitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coaching Partners Section */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Our Coaching Excellence Partners
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md border-t-4 ${partner.borderColor} overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
              >
                <div className="p-6">
                  {/* Logo */}
                  <div className="mb-5 flex items-center">
                    {!imageErrors[partner.logoPath] ? (
                      <img 
                        src={partner.logoPath} 
                        alt={`${partner.name} logo`}
                        className="h-12 w-auto object-contain max-w-full"
                        style={{ display: 'block' }}
                        onError={(e) => {
                          console.error(`Failed to load image: ${partner.logoPath}`, e)
                          setImageErrors(prev => ({ ...prev, [partner.logoPath]: true }))
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded image: ${partner.logoPath}`)
                        }}
                      />
                    ) : (
                      <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                        Logo
                      </div>
                    )}
                  </div>
                  
                  {/* Title and Subtitle */}
                  {/* <h4 className="text-2xl font-bold text-black mb-1">
                    {partner.name}
                  </h4> */}
                  <p className="text-base text-black mb-4 font-normal">
                    {partner.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-base">
                    {partner.description}
                  </p>
                  
                  {/* Entrance Exams */}
                  <div>
                    <h5 className="text-sm font-semibold text-black mb-3">
                      Entrance Exams Covered:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {partner.exams.map((exam, examIndex) => (
                        <span
                          key={examIndex}
                          className="px-3 py-1.5 bg-gray-100 text-primary rounded-lg text-sm"
                        >
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerPreparation
