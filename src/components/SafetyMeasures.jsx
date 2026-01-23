import React from 'react'

const SafetyMeasures = () => {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            title: '24×7 Security & CCTV',
            description: 'Round-the-clock security personnel & comprehensive CCTV surveillance'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Dedicated Wardens',
            description: 'Experienced wardens and residential support staff available at all times'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Controlled Access',
            description: 'Strict entry protocols and continuous student movement monitoring'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            title: 'Clean Accommodation',
            description: 'Comfortable living spaces with hygienic dining facilities'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: 'Academic Supervision',
            description: 'Structured study hours with dedicated academic guidance'
        }
    ]

    return (
        <section id="safety" className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
                    {/* Left Column - Hero Image */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden sticky top-24">
                            {/* Mobile Image */}
                            <img
                                src="/hostel/safe-haven.webp"
                                alt="Girls Hostel at DPS Nacharam"
                                className="w-full h-94 md:h-80 lg:h-[642px] object-cover block md:hidden"
                            />
                            {/* Desktop Image */}
                            <img
                                src="/hostel/Ghero.webp"
                                alt="Girls Hostel at DPS Nacharam"
                                className="w-full h-84 md:h-80 lg:h-[642px] object-cover hidden md:block"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="inline-block bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                    🛡️ Safety & Security First
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-7">
                        {/* Main Heading */}
                        <div className="mb-8">
                            <h2 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                <span className="text-gray-900">A Safe Haven for</span>{' '}
                                <span className="text-primary">Your Daughter</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                DPS Nacharam provides separate, secure, and well-managed residential facilities for boys and girls, designed to ensure safety, comfort, discipline, and holistic development.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1 text-xs md:text-sm">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Highlight Box */}
                        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-5 md:p-6 text-center text-white shadow-xl">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-base md:text-lg font-bold">Girls' Hostel Now Open!</span>
                            </div>
                            <p className="text-white/95 text-sm leading-relaxed">
                                The Girls' Hostel is operational from <strong>Grade VI onwards</strong> starting <strong>Academic Year 2026–27</strong>, offering parents complete peace of mind and students a safe, focused residential environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SafetyMeasures
