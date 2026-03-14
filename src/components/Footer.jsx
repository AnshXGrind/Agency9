import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bg-navy text-[#F7F4EE] pt-16 pb-8 safe-paddings">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col space-y-4">
            <h2 className="font-serif italic text-[24px]">Launcify</h2>
            <p className="font-sans text-[14px] text-[#F7F4EE]/50 max-w-[250px]">
              AI Automation & Workflow Engineering for modern businesses.
            </p>
            {/* Tiny static version of nodes */}
            <div className="flex gap-2 pt-4">
              <div className="w-4 h-4 bg-sage rounded-[2px]" />
              <div className="w-4 h-4 bg-steel rounded-[2px]" />
              <div className="w-4 h-4 bg-gold rounded-[2px]" />
              <div className="w-4 h-4 bg-terra rounded-[2px]" />
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col space-y-4 md:pl-10">
            <h3 className="font-sans font-medium text-[15px] mb-2 text-[#F7F4EE]/80">Navigation</h3>
            <Link to="/" className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-white transition-colors">Home</Link>
            <Link to="/services" className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-white transition-colors">Services</Link>
            <Link to="/work" className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-white transition-colors">Work</Link>
            <Link to="/about" className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="font-sans text-[14px] text-[#F7F4EE]/60 hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-sans font-medium text-[15px] mb-2 text-[#F7F4EE]/80">Connect</h3>
            <span className="font-serif italic text-[16px] text-[#F7F4EE]">Saksham Garg × Yadyansh</span>
            <div className="flex gap-4 pt-2">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" title="LinkedIn coming soon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" title="Twitter coming soon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[12px] text-[#F7F4EE]/40">© 2026 Launcify.</span>
          <span className="font-mono text-[12px] text-[#F7F4EE]/40">Built with AI, deployed with precision.</span>
        </div>
      </div>
    </footer>
  )
}
