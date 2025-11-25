import Header from './components/Header'
import Hero from './components/Hero'
import ExploreOurSchool from './components/ExploreOurSchool'
import VirtualExperience from './components/VirtualExperience'
import GradeSelection from './components/GradeSelection'
import SuccessStories from './components/SuccessStories'
import CareerPreparation from './components/CareerPreparation'
import VibrantCampus from './components/VibrantCampus'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExploreOurSchool />
        <VirtualExperience />
        <GradeSelection />
        <SuccessStories />
        <CareerPreparation />
        <VibrantCampus />
      </main>
      <Footer />
    </div>
  )
}

export default App

