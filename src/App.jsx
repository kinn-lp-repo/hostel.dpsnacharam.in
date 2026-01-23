import { useEffect } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import ExploreOurSchool from './components/ExploreOurSchool'
import SafetyMeasures from './components/SafetyMeasures'
import VirtualExperience from './components/VirtualExperience'
import GradeSelection from './components/GradeSelection'
import SuccessStories from './components/SuccessStories'
import CareerPreparation from './components/CareerPreparation'
import VibrantCampus from './components/VibrantCampus'
import Footer from './components/Footer'
import { initializeGTMEvents } from './utils/gtmEvents'

function App() {
  // Initialize GTM events system on app load
  useEffect(() => {
    initializeGTMEvents()
  }, [])

  return (
    <div className="min-h-screen">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <ExploreOurSchool />
        <SafetyMeasures />
        <VibrantCampus />
        <CareerPreparation />
        {/* <GradeSelection /> */}
        <VirtualExperience />
        {/* <SuccessStories /> */}
      </main>
      <Footer />
    </div>
  )
}
export default App