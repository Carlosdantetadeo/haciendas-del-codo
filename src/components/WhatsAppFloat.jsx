import { WA_LINK } from '../constants'

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:scale-110 transition-transform duration-200"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7 text-white">
        <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.333.613 4.614 1.78 6.613L2.667 29.333l6.927-1.746A13.267 13.267 0 0 0 16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667Zm7.68 18.56c-.32.906-1.573 1.653-2.64 1.866-.7.147-1.614.267-4.693-.987-3.934-1.6-6.48-5.56-6.68-5.813-.2-.267-1.6-2.107-1.6-4.013 0-1.894.987-2.827 1.347-3.2.32-.333.853-.48 1.373-.48.173 0 .32.013.453.013.387.027.587.054.84.654l1.16 2.8c.16.373.32.854.08 1.28-.213.44-.4.64-.6.867-.2.213-.413.44-.2.813.213.373.947 1.573 2.04 2.546 1.4 1.254 2.547 1.654 2.96 1.84.307.133.667.107.893-.133.28-.307.627-.814.987-1.307.253-.347.573-.387.907-.267l2.853 1.347c.333.16.547.24.627.387.08.16.08.907-.24 1.786Z" />
      </svg>
    </a>
  )
}
