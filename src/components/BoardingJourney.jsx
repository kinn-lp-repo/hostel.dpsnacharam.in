const BoardingJourney = () => {
  const drivers = [
    {
      title: 'Academic Excellence',
      description: 'Pursuing the highest standards in education and preparing for top universities.',
      icon: '🎓',
    },
    {
      title: 'Personal Growth',
      description: 'Developing independence, resilience, and leadership skills.',
      icon: '🌱',
    },
    {
      title: 'Global Perspective',
      description: 'Building cultural awareness and international connections.',
      icon: '🌐',
    },
    {
      title: 'Character Development',
      description: 'Fostering integrity, responsibility, and ethical values.',
      icon: '💎',
    },
    {
      title: 'Future Opportunities',
      description: 'Opening doors to prestigious universities and career paths.',
      icon: '🚀',
    },
    {
      title: 'Lifelong Friendships',
      description: 'Creating bonds that last a lifetime in a supportive community.',
      icon: '🤝',
    },
  ]

  return (
    <section id="journey" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What's Driving Your Boarding School Journey?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the motivations and benefits that make boarding school a transformative experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drivers.map((driver, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{driver.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{driver.title}</h3>
                <p className="text-gray-700">{driver.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoardingJourney

