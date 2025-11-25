import { useState, useEffect } from 'react'

const ExploreOurSchool = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCard, setSelectedCard] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCard(null)
    document.body.style.overflow = 'unset'
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  const cards = [
    {
      id: 1,
      title: 'Academic Excellence',
      description: 'Dual curriculum CBSE & Cambridge',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      modal: {
        title: 'Academic Excellence',
        subtitle: 'Dual curriculum CBSE & Cambridge',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
        sectionTitle: 'Campus Curriculum Excellence',
        description: 'The Hyderabad campus offers a dual curriculum of CBSE and Cambridge, providing flexibility and a broad spectrum of academic choices. This combination allows students to access both national and international educational standards, preparing them for success in a global context.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            ),
            text: 'CBSE - New Delhi certification'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 01.787.77l4 1a1 1 0 01.316 1.968l-7 2a1 1 0 01-.788 0l-7-2a1 1 0 01.316-1.968l4-1a1 1 0 01.787-.77l1.94-.831-1.667-.714a1 1 0 10-.788-1.838l4 1.714a1 1 0 01.356.257l6.644 2.843a1 1 0 000-1.838l-7-3z" />
              </svg>
            ),
            text: 'Cambridge Assessment International Education (CAIE - UK)'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Student Progression Plan',
      description: 'Personalized growth tracking',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      modal: {
        title: 'Student Progression Plan',
        subtitle: 'Personalized growth tracking',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
        sectionTitle: 'Personalized Learning Journey',
        description: 'Our comprehensive student progression plan ensures each student receives personalized attention and support. Through regular assessments, one-on-one mentoring, and data-driven insights, we track and enhance every student\'s academic and personal growth journey.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Individual Learning Plans'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Regular Progress Assessments'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Co-curricular Activities',
      description: 'Holistic development beyond academics',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
      modal: {
        title: 'Co-curricular Activities',
        subtitle: 'Holistic development beyond academics',
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop',
        sectionTitle: 'Enriching Extracurricular Programs',
        description: 'Our diverse range of co-curricular activities ensures students develop talents beyond the classroom. From arts and music to sports and technology clubs, we provide opportunities for students to explore their passions, build leadership skills, and create lasting friendships.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2h1a1 1 0 100 2H4a2 2 0 00-2-2V6a4 4 0 014-4h3a1 1 0 100-2H7a4 4 0 00-4 4v2a2 2 0 002 2h1a1 1 0 100-2H4V6h1a1 1 0 001-1zm3 0a1 1 0 011-1h3a1 1 0 110 2h-3a1 1 0 01-1-1zm1 4a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Arts & Creative Programs'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Sports & Athletics'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Life Readiness',
      description: 'Essential life skills development',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      modal: {
        title: 'Life Readiness',
        subtitle: 'Essential life skills development',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
        sectionTitle: 'Preparing for Real-World Success',
        description: 'Our life readiness program equips students with essential skills for independent living and career success. Through workshops, mentorship, and practical experiences, students learn financial literacy, communication skills, problem-solving, and emotional intelligence.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Financial Literacy Programs'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            ),
            text: 'Communication & Leadership'
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Modern Facilities',
      description: 'State-of-the-art infrastructure',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop',
      modal: {
        title: 'Modern Facilities',
        subtitle: 'State-of-the-art infrastructure',
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&h=600&fit=crop',
        sectionTitle: 'World-Class Campus Infrastructure',
        description: 'Our campus features cutting-edge facilities designed to enhance learning and living experiences. From smart classrooms and advanced laboratories to recreational spaces and comfortable boarding accommodations, every facility is thoughtfully designed to support student success.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            ),
            text: 'Smart Classrooms & Labs'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Recreational & Sports Facilities'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Global Community',
      description: 'Diverse international environment',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      modal: {
        title: 'Global Community',
        subtitle: 'Diverse international environment',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop',
        sectionTitle: 'A Truly International Experience',
        description: 'Our school brings together students from diverse cultural backgrounds, creating a rich, multicultural learning environment. This global community fosters understanding, respect, and prepares students to thrive in an interconnected world.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Students from 20+ Countries'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Cultural Exchange Programs'
          }
        ]
      }
    },
    {
      id: 7,
      title: 'Boarding Life',
      description: 'Safe and supportive residential experience',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
      modal: {
        title: 'Boarding Life',
        subtitle: 'Safe and supportive residential experience',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&h=600&fit=crop',
        sectionTitle: 'A Home Away From Home',
        description: 'Our boarding facilities provide a safe, nurturing environment where students learn independence while receiving 24/7 supervision and support. With comfortable accommodations, nutritious meals, and structured routines, students thrive in a home-like atmosphere.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ),
            text: '24/7 Supervision & Support'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Comfortable Accommodations'
          }
        ]
      }
    },
    {
      id: 8,
      title: 'Career Guidance',
      description: 'Expert counseling and mentorship',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      modal: {
        title: 'Career Guidance',
        subtitle: 'Expert counseling and mentorship',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
        sectionTitle: 'Shaping Future Careers',
        description: 'Our dedicated career counseling team works closely with students to identify their strengths, interests, and career aspirations. Through personalized guidance, university preparation, and internship opportunities, we help students make informed decisions about their future.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            ),
            text: 'University Preparation Support'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Internship & Mentorship Programs'
          }
        ]
      }
    },
    {
      id: 9,
      title: 'Technology Integration',
      description: 'Digital learning and innovation',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      modal: {
        title: 'Technology Integration',
        subtitle: 'Digital learning and innovation',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop',
        sectionTitle: 'Future-Ready Digital Learning',
        description: 'We integrate cutting-edge technology into our curriculum to enhance learning experiences. From interactive smart boards and digital resources to coding programs and AI literacy, students develop essential tech skills for the digital age.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Smart Classrooms & Digital Tools'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Coding & AI Literacy Programs'
          }
        ]
      }
    },
    {
      id: 10,
      title: 'Wellness & Support',
      description: 'Holistic health and wellbeing',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      modal: {
        title: 'Wellness & Support',
        subtitle: 'Holistic health and wellbeing',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
        sectionTitle: 'Comprehensive Student Wellness',
        description: 'We prioritize the physical, mental, and emotional wellbeing of every student. Our comprehensive wellness program includes health services, counseling support, mindfulness activities, and recreational programs designed to maintain a healthy balance.',
        certifications: [
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Health & Counseling Services'
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            ),
            text: 'Mindfulness & Recreation'
          }
        ]
      }
    }
  ]

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4
      if (window.innerWidth >= 768) return 2
      return 1
    }
    return 4
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
      setCurrentIndex(0) // Reset to start on resize
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, cards.length - cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const openModal = (card) => {
    setSelectedCard(card)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerView)

  return (
    <section id="explore" className="py-16 md:py-14 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <span className="inline-block text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary">
            Explore Our School
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience the Full Spectrum of{' '}<br />
            <span className="text-[#155b2e]">Delhi Public School Nacharam</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive approach to education that goes beyond academics to shape well-rounded, future-ready leaders.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {cards.length > cardsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Previous cards"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Next cards"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden transition-all duration-300">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => openModal(card)}
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full border-2 border-[#155b2e] flex items-center justify-center text-[#155b2e] z-10">
                    {card.icon}
                  </div>

                  {/* Plus Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openModal(card)
                    }}
                    className="absolute bottom-4 left-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-xl font-light transition-colors z-10"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    +
                  </button>
                </div>

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-white/90">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#155b2e] transition-all duration-300"
                style={{ width: `${((currentIndex + cardsPerView) / cards.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#e8f5e9] rounded-lg border-2 border-[#155b2e] flex items-center justify-center text-[#155b2e] flex-shrink-0">
                  {selectedCard.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedCard.modal.title}</h3>
                  <p className="text-lg text-gray-600">{selectedCard.modal.subtitle}</p>
                </div>
              </div>

              {/* Modal Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedCard.modal.image}
                  alt={selectedCard.modal.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{selectedCard.modal.sectionTitle}</h4>
                <p className="text-gray-700 leading-relaxed mb-6">{selectedCard.modal.description}</p>

                {/* Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCard.modal.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 flex items-start gap-3"
                    >
                      <div className="text-[#155b2e] flex-shrink-0 mt-1">
                        {cert.icon}
                      </div>
                      <p className="text-gray-700">{cert.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="border-t pt-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Learn More?</h4>
                <p className="text-gray-600 mb-6">
                  Get detailed information about our programs and admissions process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-[#155b2e] text-white rounded-lg font-medium hover:bg-[#124a26] transition-colors">
                    Schedule Campus Visit
                  </button>
                  <button className="px-6 py-3 bg-white border-2 border-[#155b2e] text-[#155b2e] rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ExploreOurSchool
