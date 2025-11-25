const NextStep = () => {
  return (
    <section id="next-step" className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join our community of learners and leaders. Start your application today or schedule a campus visit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Schedule a Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Request Information
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="opacity-90">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">admissions@hostel.edu</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="opacity-90">123 Education Lane, City, State</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NextStep

