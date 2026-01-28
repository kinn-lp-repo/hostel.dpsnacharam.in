import { trackPhoneClick, trackEmailClick } from '../utils/gtmEvents'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: School Logo and Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* Logo */}
              <img
                src="/hostel/dps-emblum.webp"
                alt="Delhi Public School Nacharam Logo"
                className="w-12 h-12 object-contain flex-shrink-0"
              />
              <div>
                <h3 className="text-white font-bold text-base">DELHI PUBLIC SCHOOL</h3>
                <p className="text-gray-300 text-xs">NACHARAM</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              The Best Boarding School in Hyderabad, is nurturing dreams and is committed to achieve their highest potential.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="tel:1800212999999"
                  onClick={() => trackPhoneClick('1800212999999', 'Landline: 1800 212 999999')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Landline: 1800 212 999999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">
                  Mobile:{' '}
                  <a
                    href="tel:7670900348"
                    onClick={() => trackPhoneClick('7670900348', 'Mobile: 7670900348')}
                    className="hover:text-white transition-colors"
                  >
                    7670900348
                  </a>
                  {' '},{' '}
                  <a
                    href="tel:9100975725"
                    onClick={() => trackPhoneClick('9100975725', 'Mobile: 9100975725')}
                    className="hover:text-white transition-colors"
                  >
                    9100975725
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="mailto:admission@dpssecunderabad.in"
                  onClick={() => trackEmailClick('admission@dpssecunderabad.in', 'admission@dpssecunderabad.in')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  admission@dpssecunderabad.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Address */}
          <div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-gray-300 leading-relaxed">
                Plot No.44, Uppal Mandal, 42A, behind BSNL Telephone exchange, Durga Nagar, Nacharam, Hyderabad, Secunderabad, Telangana 500076
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-xs text-gray-500">
            © 2025 DELHI PUBLIC SCHOOL, NACHARAM. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

