import { Link } from 'react-router-dom'
import HeroIllustration from '../illustrations/HeroIllustration'

export default function Footer() {
  return (
    <>
      <footer className="bg-text-primary text-white py-16 px-6 md:px-10 overflow-hidden relative">
        <div className="max-w-[1100px] mx-auto z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            
            {/* Col 1 */}
            <div>
              <Link to="/" className="text-[24px] tracking-tight font-display italic text-white block mb-2">
                Launcify
              </Link>
              <p className="text-[14px] text-white/50 font-body mb-8">
                Built with AI. Deployed with precision.
              </p>
              <div className="w-[120px] opacity-20 filter grayscale contrast-200">
                {/* Simplified aesthetic version for footer */}
                <HeroIllustration />
              </div>
            </div>

            {/* Col 2 */}
            <div className="md:ml-auto">
              <ul className="space-y-3">
                {['Services', 'Work', 'About', 'Contact'].map(link => (
                  <li key={link}>
                    <Link to={`/${link.toLowerCase()}`} className="text-[15px] font-body text-white/60 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div className="md:ml-auto">
              <p className="text-[14px] text-white/60 mb-2 font-body">Made by</p>
              <p className="text-[15px] font-body text-white mb-6">
                Saksham Garg &<br />Yadyansh
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-mono text-white/40">
            <p>© {new Date().getFullYear()} Launcify. All rights reserved.</p>
            <p>Saksham Garg × Yadyansh</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-t border-border py-4 px-6 flex justify-between items-center z-40">
        <span className="text-[14px] font-body text-text-secondary">Ready to launch?</span>
        <Link to="/contact" className="px-5 py-2 bg-accent-primary text-white rounded-full text-[14px] font-body font-semibold">
          Start a Project
        </Link>
      </div>
    </>
  )
}
