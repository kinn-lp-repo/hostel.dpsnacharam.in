const GradeSelection = () => {
  const grades = [
    {
      title: 'Upper Primary',
      gradeRange: 'CLASS V - VI',
      description: 'Play-based learning in a nurturing hostel environment with 24/7 support.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
    },
    {
      title: 'Middle School',
      gradeRange: 'CLASS VII - VIII',
      description: 'Critical thinking and academic foundation with dedicated study hours and mentorship.',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      ),
    },
    {
      title: 'Secondary',
      gradeRange: 'CLASS IX - X',
      description: 'Career exploration, leadership development, and board exam preparation.',
      image: 'https://images.unsplash.com/photo-1522202176988-6627c2bfdab0?w=800&h=600&fit=crop',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
    {
      title: 'Senior Secondary',
      gradeRange: 'CLASS XI - XII',
      description: 'College-prep with competitive exam and board preparation for top universities.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="grades" className="py-10 md:py-10 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Which Grade Is Your Son Applying For?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            Hostel admissions are open for boys from Grade 5 to Grade 12. See exactly what your son will experience, learn, and achieve at each grade level in our residential program.
          </p>
          <p className="text-base text-primary max-w-2xl mx-auto font-semibold">
            Click below to explore curriculum, facilities, and success outcomes →
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {grades.map((grade, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={grade.image}
                    alt={grade.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary shadow-md">
                    {grade.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-black mb-2">{grade.title}</h3>
                  <p className="text-base font-semibold text-primary mb-3">{grade.gradeRange}</p>
                  <p className="text-sm text-gray-700 mb-5 leading-relaxed">{grade.description}</p>
                  <button className="w-full bg-white border-2 border-gray-300 text-gray-800 px-4 py-2.5 rounded-lg font-semibold text-sm hover:border-primary hover:text-primary transition-colors">
                    View Full Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              Still unsure which grade level is right for your son? (Hostel available for Grades 5-12, Boys only)
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg flex items-center gap-2 mx-auto">
              Schedule a Personal Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GradeSelection
