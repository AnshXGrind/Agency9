import { Link } from 'react-router-dom'

export default function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-[64px] bg-bg/90 backdrop-blur-[12px] border-t border-border z-40 flex items-center justify-between px-6">
      <span className="font-sans text-[14px] text-text-muted">Ready to launch?</span>
      <Link
        to="/contact"
        className="px-[#18px] py-[8px] bg-terra text-white font-sans font-medium text-[13px] rounded-full"
        style={{ padding: '8px 18px' }}
      >
        Start a Project
      </Link>
    </div>
  )
}
