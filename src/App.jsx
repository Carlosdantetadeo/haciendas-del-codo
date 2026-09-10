import { useState, useEffect, useRef } from 'react'
import { WA_LINK } from './constants'
import WhatsAppFloat from './components/WhatsAppFloat'
import Contacto from './components/Contacto'

/* ─── Scroll animation hook ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [settled, setSettled] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          setTimeout(() => setSettled(true), 900)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible, settled }
}

/* Generates animation classes for individual items inside a section */
function animCls(visible, settled, delay = 0) {
  const style = { transitionDelay: visible && !settled ? `${delay}ms` : '0ms' }
  if (settled) {
    return { className: 'opacity-100', style: { transitionDelay: '0ms' } }
  }
  return {
    className: `transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
    style,
  }
}

/* ─── SVG Icons ─── */
const IconTrend = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)
const IconMoney = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M14.5 9H9.5a2 2 0 000 4h5a2 2 0 010 4H9" />
    <line x1="12" y1="7" x2="12" y2="9" /><line x1="12" y1="17" x2="12" y2="19" />
  </svg>
)
const IconLeaf = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0118 13C18 8 16 5 11 3c0 0-2 3-2 7v10z" />
    <path d="M11 20c0-5-2.5-8-4-9" />
  </svg>
)
const IconHome = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const IconSeedling = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12" />
    <path d="M17 8.5C17 5.5 14.5 3 12 3S7 5.5 7 8.5c0 3 5 3.5 5 3.5s5-.5 5-3.5z" />
  </svg>
)
const IconSunrise = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 18a5 5 0 00-10 0" />
    <line x1="12" y1="2" x2="12" y2="9" />
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
    <line x1="1" y1="18" x2="3" y2="18" /><line x1="21" y1="18" x2="23" y2="18" />
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
    <polyline points="8 6 12 2 16 6" />
  </svg>
)
const IconRocket = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)
const IconBuilding = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z" />
    <path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2" />
    <line x1="10" y1="7" x2="14" y2="7" /><line x1="10" y1="11" x2="14" y2="11" /><line x1="10" y1="15" x2="14" y2="15" />
  </svg>
)
const IconShield = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)
const IconUser = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)
const IconWA = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

/* ─── Sticky CTA bar (mobile) ─── */
function StickyCtaBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed bottom-0 inset-x-0 z-40 md:hidden transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-[#0f2619]/97 backdrop-blur-sm border-t border-[#c9a84c]/30 px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm leading-none">Haciendas del Codo</p>
          <p className="text-[#c9a84c] text-xs mt-0.5">Solo 10 haciendas · Desde S/ 45,000</p>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-[#c9a84c] text-[#1a3a2a] font-bold text-sm px-4 py-2.5 rounded-full whitespace-nowrap hover:bg-[#e8c96a] transition-colors flex-shrink-0"
        >
          <IconWA className="w-4 h-4" />
          Reservar
        </a>
      </div>
    </div>
  )
}

/* ─── Inline CTA component ─── */
function CtaBtn({ href = WA_LINK, children, variant = 'gold', className = '' }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5'
  const variants = {
    gold: 'bg-[#c9a84c] text-[#1a3a2a] px-8 py-3.5 hover:bg-[#e8c96a] shadow-lg shadow-[#c9a84c]/20',
    outline: 'border-2 border-[#1a3a2a] text-[#1a3a2a] px-8 py-3.5 hover:bg-[#1a3a2a] hover:text-white',
    outlineLight: 'border-2 border-[#c9a84c] text-[#c9a84c] px-8 py-3.5 hover:bg-[#c9a84c] hover:text-[#1a3a2a]',
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f2619]/97 backdrop-blur-sm shadow-lg shadow-black/20 py-2' : 'bg-[#1a3a2a]/95 backdrop-blur-sm py-3'} border-b border-white/10`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold text-white tracking-wide">HACIENDAS</span>
          <span className="text-[0.65rem] text-[#c9a84c] tracking-[0.2em] uppercase">DEL CODO</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#proyecto" className="hover:text-white transition-colors">El proyecto</a>
          <a href="#precio" className="hover:text-white transition-colors">Precios</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-[#c9a84c] text-[#1a3a2a] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#e8c96a] transition-colors duration-200"
        >
          <IconWA className="w-4 h-4" />
          <span>Reservar ahora</span>
        </a>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src="/imgs/zoom_p9_1.jpeg"
        alt="Vista aérea Haciendas del Codo"
        className="absolute inset-0 w-full h-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f14]/95 via-[#1a3a2a]/80 to-[#1a3a2a]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/70 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="max-w-xl">
          <div className="fade-up inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#e8c96a] text-sm font-medium px-4 py-1.5 rounded-full mb-6" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-[#e8c96a] inline-block" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
            Solo 10 haciendas en prelanzamiento
          </div>
          <h1 className="fade-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5" style={{ animationDelay: '0.2s' }}>
            El privilegio<br />de vivir bien
          </h1>
          <p className="fade-up text-white/80 text-lg sm:text-xl mb-8 leading-relaxed" style={{ animationDelay: '0.35s' }}>
            5,000 m² en la Selva Central del Perú para vivir, producir, descansar o emprender.
            Terrenos con plusvalía, respaldo legal y naturaleza pura.
          </p>
          <div className="fade-up flex items-baseline gap-3 mb-10 flex-wrap" style={{ animationDelay: '0.45s' }}>
            <span className="text-white/60 text-sm">Precio prelanzamiento</span>
            <span className="font-display text-4xl font-bold text-[#c9a84c]">S/ 45,000</span>
            <span className="bg-white/10 text-white/80 text-sm px-3 py-1 rounded-full">Separa con S/ 2,000</span>
          </div>
          <div className="fade-up flex gap-3 flex-wrap" style={{ animationDelay: '0.55s' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#c9a84c] text-[#1a3a2a] font-bold px-8 py-4 rounded-full hover:bg-[#e8c96a] hover:-translate-y-0.5 transition-all shadow-xl shadow-[#c9a84c]/25 text-base"
            >
              <IconWA className="w-5 h-5" />
              Quiero mi hacienda
            </a>
            <a
              href="#proyecto"
              className="flex items-center gap-2 text-white font-medium px-8 py-4 rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all text-base"
            >
              Ver el proyecto ↓
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 inset-x-0 bg-[#0a1f14]/80 backdrop-blur-sm border-t border-white/10 py-3 z-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-8 flex-wrap text-xs text-white/50">
          <span>✓ Propiedad inscrita en SUNARP</span>
          <span className="hidden sm:block">·</span>
          <span>✓ 0% interés en financiamiento</span>
          <span className="hidden sm:block">·</span>
          <span>✓ Agente registrado MVCS</span>
        </div>
      </div>
    </section>
  )
}

/* ─── Valores ─── */
function Valores() {
  const { ref, visible, settled } = useInView()
  const items = [
    { Icon: IconTrend, title: 'Plusvalía', desc: 'Zona en desarrollo con infraestructura proyectada, corredor vial reconocido por ley y crecimiento sostenido.' },
    { Icon: IconMoney, title: 'Rentabilidad', desc: 'Genera hasta S/ 4,160 al mes con alquiler de cabañas, turismo vivencial o producción agrícola.' },
    { Icon: IconLeaf, title: 'Libertad', desc: '5,000 m² planos en Selva Central, baja densidad y privacidad real que pocas propiedades en el Perú ofrecen.' },
  ]

  return (
    <section ref={ref} id="proyecto" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">
        <div {...animCls(visible, settled, 0)}>
          <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">¿Por qué invertir?</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
            La decisión de invertir <em className="italic text-[#c9a84c]">con criterio</em>
          </h2>
          <p className="text-gray-500 max-w-xl mb-12 leading-relaxed">
            Selva Central, Perú. Un entorno natural con respaldo legal y proyección de valor que pocas zonas del país pueden igualar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((item, i) => {
            const a = animCls(visible, settled, 100 + i * 130)
            return (
              <div
                key={item.title}
                {...a}
                className={`${a.className} group bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-[transform,box-shadow] duration-300 cursor-default`}
              >
                <div className="w-13 h-13 w-12 h-12 rounded-xl bg-[#1a3a2a] flex items-center justify-center mb-5 group-hover:bg-[#2d5a40] transition-colors duration-300">
                  <item.Icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <div className="w-8 h-0.5 bg-[#c9a84c] rounded-full mb-4" />
                <h3 className="font-display text-xl font-semibold text-[#1a3a2a] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div {...animCls(visible, settled, 500)} className={`${animCls(visible, settled, 500).className} flex flex-col sm:flex-row items-center gap-4`}>
          <CtaBtn>
            <IconWA className="w-4 h-4" />
            Reservar mi hacienda — S/ 2,000
          </CtaBtn>
          <a href="#precio" className="text-[#2d5a40] font-medium hover:underline text-sm">
            Ver precios y condiciones →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Proyecto ─── */
function Proyecto() {
  const { ref, visible, settled } = useInView()
  const stats = [
    { num: '76+', label: 'hectáreas' },
    { num: '5,000', label: 'm² por hacienda' },
    { num: '10', label: 'unidades prelanzamiento' },
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div {...animCls(visible, settled, 0)}>
            <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">El proyecto</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
              Más de 76 hectáreas para vivir con más espacio
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Una propuesta de baja densidad en Codo del Pozuzo, Huánuco — con haciendas bien separadas, caminos integrados al paisaje y una sensación real de libertad.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Ríos, cascadas, senderos y biodiversidad convierten cada recorrido en una experiencia única.
            </p>
            <div className="flex gap-10 flex-wrap mb-10">
              {stats.map((s, i) => {
                const a = animCls(visible, settled, 150 + i * 100)
                return (
                  <div key={s.label} {...a}>
                    <span className="font-display text-4xl font-bold text-[#2d5a40] leading-none">{s.num}</span>
                    <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div {...animCls(visible, settled, 200)} className={`${animCls(visible, settled, 200).className} rounded-2xl overflow-hidden shadow-xl h-[420px]`}>
            <img
              src="/imgs/zoom_p3_0.jpeg"
              alt="Vista panorámica Haciendas del Codo"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Divider naturaleza ─── */
function NaturalezaDivider() {
  const { ref, visible } = useInView(0.3)
  return (
    <section ref={ref} className="relative h-72 sm:h-[26rem] overflow-hidden">
      <img src="/imgs/zoom_p7_0.jpeg" alt="Naturaleza de Codo del Pozuzo" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#1a3a2a]/60 flex flex-col items-center justify-center text-center px-6 gap-5">
        <p className={`text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.2em] transition-[opacity,transform] duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0ms' }}>
          Naturaleza que se vive
        </p>
        <h2 className={`font-display text-3xl sm:text-5xl font-bold text-white max-w-2xl leading-tight transition-[opacity,transform] duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '120ms' }}>
          Ríos, cascadas y biodiversidad en tu puerta
        </h2>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/40 text-white font-medium px-6 py-3 rounded-full hover:bg-white/25 transition-all duration-200 text-sm ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '250ms', transition: 'opacity 0.7s 0.25s ease-out' }}
        >
          <IconWA className="w-4 h-4" />
          Quiero conocer el proyecto
        </a>
      </div>
    </section>
  )
}

/* ─── Ubicacion ─── */
function Ubicacion() {
  const { ref, visible, settled } = useInView()
  const ruta = [
    { n: '1', titulo: 'Lima → Oxapampa', sub: '8 a 10 horas por tierra' },
    { n: '2', titulo: 'Oxapampa → Pozuzo', sub: '2 horas' },
    { n: '3', titulo: 'Pozuzo → Haciendas', sub: 'Codo: 2h + 20 min' },
  ]

  return (
    <section ref={ref} className="py-24 bg-[#1a3a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <div {...animCls(visible, settled, 0)}>
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Ubicación</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
            Codo del Pozuzo, Huánuco
          </h2>
          <p className="text-white/60 max-w-xl mb-10 leading-relaxed">
            Una ubicación privilegiada en la Selva Central del Perú con proyección de conectividad respaldada por ley.
          </p>
        </div>

        <div {...animCls(visible, settled, 150)} className={`${animCls(visible, settled, 150).className} rounded-2xl overflow-hidden mb-10 shadow-xl`}>
          <img src="/imgs/zoom_p5_0.jpeg" alt="Mapa de ruta Lima - Codo del Pozuzo" className="w-full object-cover max-h-72" />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-10">
          {ruta.flatMap((r, i) => {
            const a = animCls(visible, settled, 250 + i * 100)
            const card = (
              <div key={r.titulo} {...a} className={`${a.className} bg-white/8 border border-white/15 rounded-2xl p-5 flex items-center gap-4 flex-1`}>
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-[#c9a84c] text-lg">{r.n}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.titulo}</p>
                  <p className="text-white/55 text-xs mt-0.5">{r.sub}</p>
                </div>
              </div>
            )
            if (i < ruta.length - 1) {
              return [card, <span key={`arr-${i}`} className="text-[#c9a84c]/50 text-xl self-center hidden sm:block">→</span>]
            }
            return [card]
          })}
        </div>

        <div {...animCls(visible, settled, 550)} className={`${animCls(visible, settled, 550).className} bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl p-6 flex gap-5 items-start mb-10`}>
          <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5 5 0 006.97 6.13M6 7l3-1m0 0l3 1m-3-1v10M21 6l-3 1m0 0l3 9a5 5 0 01-6.97 6.13M18 7l-3-1m0 0l-3 1m3-1v10" />
            </svg>
          </div>
          <div>
            <p className="text-[#c9a84c] font-semibold mb-2">Corredor vial reconocido por Ley N.° 31931</p>
            <p className="text-white/65 text-sm leading-relaxed">
              La ley declara de interés nacional el corredor Chancay — Codo del Pozuzo — Pucallpa.{' '}
              <span className="text-[#e8c96a]">Codo del Pozuzo figura expresamente dentro de la ruta declarada.</span>
            </p>
          </div>
        </div>

        <div {...animCls(visible, settled, 650)} className={animCls(visible, settled, 650).className}>
          <CtaBtn variant="outlineLight">
            <IconWA className="w-4 h-4" />
            Consultar disponibilidad de lotes
          </CtaBtn>
        </div>
      </div>
    </section>
  )
}

/* ─── Infraestructura ─── */
function Infraestructura() {
  const { ref, visible, settled } = useInView()
  const items = [
    { n: '01', title: 'Pórtico de ingreso', desc: 'Un acceso definido que brinda presencia y organización al proyecto.' },
    { n: '02', title: 'Alamedas', desc: 'Espacios naturales para caminar, relajarse y disfrutar del paisaje.' },
    { n: '03', title: 'Vías afirmadas', desc: 'Caminos acondicionados para facilitar el acceso y recorrido interno.' },
    { n: '04', title: 'Cerco perimétrico', desc: 'Delimitación del proyecto para mayor orden, privacidad y control.' },
    { n: '05', title: 'Riachuelos naturales', desc: 'Un entorno privilegiado rodeado de agua, montañas y clima tropical.' },
    { n: '06', title: 'Soluciones de campo', desc: 'Energía solar, agua y biodigestor para vida autosuficiente.' },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div {...animCls(visible, settled, 0)}>
          <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Infraestructura</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
            Todo lo que hará más valiosa tu hacienda
          </h2>
        </div>

        <div {...animCls(visible, settled, 100)} className={`${animCls(visible, settled, 100).className} rounded-2xl overflow-hidden shadow-lg mb-12 h-72 sm:h-96`}>
          <img src="/imgs/zoom_p9_1.jpeg" alt="Vista aérea de Haciendas del Codo" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {items.map((item, i) => {
            const a = animCls(visible, settled, 200 + i * 80)
            return (
              <div key={item.n} {...a} className={`${a.className} bg-white rounded-2xl p-6 border-l-4 border-[#4a8c62] hover:shadow-md hover:-translate-y-1 transition-[transform,box-shadow] duration-200`}>
                <span className="text-[#4a8c62] text-xs font-bold tracking-widest uppercase">{item.n}</span>
                <h4 className="font-semibold text-gray-900 mt-2 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div {...animCls(visible, settled, 680)} className={animCls(visible, settled, 680).className}>
          <CtaBtn variant="outline">
            <IconWA className="w-4 h-4" />
            Ver haciendas disponibles
          </CtaBtn>
        </div>
      </div>
    </section>
  )
}

/* ─── Master Plan ─── */
function MasterPlan() {
  const { ref, visible, settled } = useInView()
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div {...animCls(visible, settled, 0)}>
          <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Master Plan</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Elige tu ubicación
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl leading-relaxed">
            3 etapas. La Etapa 1 cuenta con 43 lotes y la Etapa 2 con 68 lotes. Elige en prelanzamiento y asegura la mejor ubicación.
          </p>
        </div>

        <div {...animCls(visible, settled, 150)} className={`${animCls(visible, settled, 150).className} rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-6`}>
          <img src="/imgs/zoom_p17_0.jpeg" alt="Master Plan Haciendas del Codo" className="w-full object-cover" />
        </div>

        <div className="flex gap-6 mb-10 flex-wrap">
          {[['#1a3a2a','1° Etapa — 43 lotes'],['#4a8c62','2° Etapa — 68 lotes'],['#d1d5db','3° Etapa — Próximamente']].map(([color, label]) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: color }} />
              <span className="text-gray-600 text-sm">{label}</span>
            </div>
          ))}
        </div>

        <div {...animCls(visible, settled, 350)} className={`${animCls(visible, settled, 350).className} flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-[#f5f0e8] rounded-2xl border border-[#c9a84c]/20`}>
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">¿Ya elegiste dónde quieres tu hacienda?</p>
            <p className="text-gray-500 text-sm">Habla con nosotros y asegura tu lote durante el prelanzamiento.</p>
          </div>
          <CtaBtn className="flex-shrink-0">
            <IconWA className="w-4 h-4" />
            Elegir mi ubicación
          </CtaBtn>
        </div>
      </div>
    </section>
  )
}

/* ─── Posibilidades ─── */
function Posibilidades() {
  const { ref, visible, settled } = useInView()
  const items = [
    { Icon: IconHome, title: 'Vivir', desc: 'Construye tu hogar en la selva con privacidad y un estilo de vida diferente.' },
    { Icon: IconSeedling, title: 'Producir', desc: 'Cultivos, agroforestería o producción familiar en 5,000 m² propios.' },
    { Icon: IconSunrise, title: 'Descansar', desc: 'Tu refugio privado en la naturaleza, disponible cuando lo necesites.' },
    { Icon: IconRocket, title: 'Emprender', desc: 'Cabaña de alquiler, turismo vivencial o negocio propio en tu hacienda.' },
  ]

  return (
    <section ref={ref} className="py-24 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">
        <div {...animCls(visible, settled, 0)} className={`${animCls(visible, settled, 0).className} rounded-2xl overflow-hidden shadow-lg mb-12 h-64 sm:h-80`}>
          <img src="/imgs/zoom_p8_0.jpeg" alt="Estilo de vida en Haciendas del Codo" className="w-full h-full object-cover object-left" />
        </div>

        <div {...animCls(visible, settled, 150)}>
          <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Una propiedad, muchas posibilidades</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Tú decides cómo usar tu hacienda
          </h2>
          <p className="text-gray-500 max-w-xl mb-12 leading-relaxed">
            Con 5,000 m², puedes desarrollar un espacio para disfrutar, invertir y hacerlo crecer a tu ritmo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {items.map((item, i) => {
            const a = animCls(visible, settled, 250 + i * 100)
            return (
              <div key={item.title} {...a} className={`${a.className} group bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#4a8c62] hover:shadow-md hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-200`}>
                <div className="w-12 h-12 rounded-xl bg-[#f5f0e8] border border-[#c9a84c]/25 flex items-center justify-center mb-5 group-hover:bg-[#1a3a2a] group-hover:border-transparent transition-colors duration-300">
                  <item.Icon className="w-6 h-6 text-[#2d5a40] group-hover:text-[#c9a84c] transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#1a3a2a] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div {...animCls(visible, settled, 650)} className={animCls(visible, settled, 650).className}>
          <CtaBtn>
            <IconWA className="w-4 h-4" />
            Quiero empezar — hablar con un asesor
          </CtaBtn>
        </div>
      </div>
    </section>
  )
}

/* ─── Rentabilidad ─── */
function Rentabilidad() {
  const { ref, visible, settled } = useInView()
  const filas = [
    { esc: 'Inicial', badgeClass: 'bg-white/10 text-white/70', tarifa: 'S/ 180', noches: 8, mensual: 'S/ 1,440', anual: 'S/ 17,280' },
    { esc: 'Intermedio', badgeClass: 'bg-[#4a8c62]/20 text-[#7acba0]', tarifa: 'S/ 220', noches: 12, mensual: 'S/ 2,640', anual: 'S/ 31,680' },
    { esc: 'Mayor actividad', badgeClass: 'bg-[#c9a84c]/20 text-[#c9a84c]', tarifa: 'S/ 260', noches: 16, mensual: 'S/ 4,160', anual: 'S/ 49,920' },
  ]

  return (
    <section ref={ref} className="py-24 bg-[#1a3a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <div {...animCls(visible, settled, 0)}>
          <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Genera ingresos</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
            Tu hacienda puede ser<br />una fuente de ingresos
          </h2>
          <p className="text-white/60 max-w-lg mb-12 leading-relaxed">
            Con 5,000 m², puedes desarrollar una cabaña independiente para alquiler temporal y aprovechar el entorno natural para generar ingresos complementarios.
          </p>
        </div>

        <div {...animCls(visible, settled, 150)} className={`${animCls(visible, settled, 150).className} overflow-x-auto rounded-2xl mb-4`}>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#c9a84c]/15">
                {['Escenario', 'Tarifa / noche', 'Noches / mes', 'Ingreso mensual', 'Ingreso anual'].map((h) => (
                  <th key={h} className="px-5 py-4 text-left text-[#c9a84c] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((f, i) => (
                <tr key={f.esc} className={`border-b border-white/5 ${i === 2 ? 'bg-[#c9a84c]/5' : ''}`}>
                  <td className="px-5 py-4"><span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${f.badgeClass}`}>{f.esc}</span></td>
                  <td className="px-5 py-4 text-white/70">{f.tarifa}</td>
                  <td className="px-5 py-4 text-white/70">{f.noches}</td>
                  <td className="px-5 py-4 text-[#c9a84c] font-bold text-lg">{f.mensual}</td>
                  <td className="px-5 py-4 text-white/70">{f.anual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/35 text-xs mb-10">* Proyección referencial. Resultados dependen del uso y gestión del propietario.</p>

        <div {...animCls(visible, settled, 350)} className={`${animCls(visible, settled, 350).className} flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 border border-white/15 rounded-2xl p-6`}>
          <div className="flex-1">
            <p className="text-white font-semibold mb-1">¿Quieres simular tus ingresos?</p>
            <p className="text-white/55 text-sm">Nuestro equipo te explica cómo maximizar el retorno de tu hacienda.</p>
          </div>
          <CtaBtn variant="outlineLight" className="flex-shrink-0">
            <IconWA className="w-4 h-4" />
            Simular mis ingresos
          </CtaBtn>
        </div>
      </div>
    </section>
  )
}

/* ─── Precio ─── */
function Precio() {
  const { ref, visible, settled } = useInView()
  return (
    <section ref={ref} id="precio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div {...animCls(visible, settled, 0)} className={`${animCls(visible, settled, 0).className} rounded-2xl overflow-hidden shadow-xl h-[500px] order-2 lg:order-1`}>
            <img src="/imgs/zoom_p20_0.jpeg" alt="Asesoría Haciendas del Codo" className="w-full h-full object-cover object-right" />
          </div>

          <div {...animCls(visible, settled, 150)} className={`${animCls(visible, settled, 150).className} order-1 lg:order-2`}>
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/12 border border-[#c9a84c]/30 text-[#c9a84c] text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] inline-block" style={{ animation: 'pulse-dot 2s infinite' }} />
              Solo para los primeros 10 clientes
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">Precio de Prelanzamiento</h2>
            <p className="text-gray-500 mb-8">Sé uno de los primeros en asegurar tu ubicación y accede a condiciones exclusivas.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#f5f0e8] rounded-2xl p-6 border-2 border-[#c9a84c]">
                <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-widest mb-1">Al contado</p>
                <p className="font-display text-4xl font-bold text-gray-900 mb-1">S/ 45,000</p>
                <p className="text-[#4a8c62] font-semibold text-sm mb-4">Ahorras S/ 5,000</p>
                <ul className="space-y-1.5 mb-5 text-sm text-gray-500">
                  <li>✓ S/ 5,000 de descuento</li>
                  <li>✓ Viaje de verificación*</li>
                  <li>✓ Asesoría personalizada</li>
                </ul>
                <CtaBtn className="w-full justify-center text-sm py-0">Separar ahora</CtaBtn>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-widest mb-1">Financiado</p>
                <p className="font-display text-4xl font-bold text-gray-900 mb-1">S/ 50,000</p>
                <p className="text-[#4a8c62] font-semibold text-sm mb-4">0% de interés</p>
                <ul className="space-y-1.5 mb-5 text-sm text-gray-500">
                  <li>✓ Cuotas sin intereses</li>
                  <li>✓ Viaje de verificación*</li>
                  <li>✓ Asesoría personalizada</li>
                </ul>
                <CtaBtn variant="outline" className="w-full justify-center text-sm py-0">Separar ahora</CtaBtn>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 bg-[#1a3a2a] rounded-full px-6 py-3">
              <span className="font-display text-xl font-bold text-[#c9a84c]">S/ 2,000</span>
              <span className="text-white/70 text-sm">para reservar y elegir tu ubicación</span>
            </div>
            <p className="text-gray-400 text-xs mt-3">* Viaje de verificación para primeros compradores, sujeto a condiciones.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Pasos ─── */
function Pasos() {
  const { ref, visible, settled } = useInView()
  const pasos = [
    { n: '1', title: 'Conoce', desc: 'Descubre el proyecto y revisa las ubicaciones disponibles con nuestro equipo.' },
    { n: '2', title: 'Visita', desc: 'Recorre el terreno y conoce personalmente el entorno natural de Codo del Pozuzo.' },
    { n: '3', title: 'Elige', desc: 'Selecciona la hacienda que mejor se adapte a tus planes.' },
    { n: '4', title: 'Separa', desc: 'Asegura tu ubicación durante el prelanzamiento con solo S/ 2,000.' },
  ]

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div {...animCls(visible, settled, 0)}>
            <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Así de simple</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">Tu camino hacia la hacienda</h2>
            <div className="space-y-6 mb-10">
              {pasos.map((p, i) => {
                const a = animCls(visible, settled, 100 + i * 120)
                return (
                  <div key={p.n} {...a} className={`${a.className} flex gap-5 items-start`}>
                    <div className="w-12 h-12 rounded-full bg-[#1a3a2a] flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-lg font-bold text-[#c9a84c]">{p.n}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">{p.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div {...animCls(visible, settled, 580)} className={animCls(visible, settled, 580).className}>
              <CtaBtn>
                <IconWA className="w-4 h-4" />
                Empezar ahora por WhatsApp
              </CtaBtn>
            </div>
          </div>

          <div {...animCls(visible, settled, 200)} className={`${animCls(visible, settled, 200).className} rounded-2xl overflow-hidden shadow-xl h-[500px]`}>
            <img src="/imgs/zoom_p21_0.jpeg" alt="Equipo Haciendas del Codo" className="w-full h-full object-cover object-left" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonios ─── */
function Testimonios() {
  const { ref, visible, settled } = useInView()
  const items = [
    {
      quote: 'Lo que más me convenció fue el respaldo legal. Está todo inscrito en SUNARP y la empresa activa en SUNAT. Hice mi separación en menos de una semana.',
      name: 'Roberto M.',
      ciudad: 'Lima',
      uso: 'Inversión + cabaña de alquiler',
      iniciales: 'RM',
      color: 'bg-[#2d5a40]',
    },
    {
      quote: 'Buscaba algo diferente a un departamento. Aquí tengo 5,000 m² con río, montaña y privacidad real. Mis hijos ya piden ir cada fin de semana.',
      name: 'Patricia L.',
      ciudad: 'Miraflores, Lima',
      uso: 'Casa de campo familiar',
      iniciales: 'PL',
      color: 'bg-[#c9a84c]',
    },
    {
      quote: 'Jorge me explicó todo sin presión. Viajé a ver el terreno, me enamoré del lugar. El financiamiento al 0% fue definitivamente lo que me animó a cerrar.',
      name: 'Carlos T.',
      ciudad: 'San Isidro, Lima',
      uso: 'Turismo vivencial',
      iniciales: 'CT',
      color: 'bg-[#4a8c62]',
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">
        <div {...animCls(visible, settled, 0)}>
          <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Lo que dicen nuestros compradores</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Ellos ya tomaron la decisión
          </h2>
          <p className="text-gray-500 max-w-xl mb-12 leading-relaxed">
            Personas como tú que buscaban una inversión real, con respaldo legal y un estilo de vida diferente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((item, i) => {
            const a = animCls(visible, settled, 100 + i * 140)
            return (
              <div
                key={item.name}
                {...a}
                className={`${a.className} bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-[transform,box-shadow] duration-200 flex flex-col`}
              >
                {/* Estrellas */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed text-sm flex-1 mb-6">
                  "{item.quote}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xs">{item.iniciales}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.ciudad}</p>
                  </div>
                  <span className="ml-auto bg-[#f5f0e8] text-[#2d5a40] text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    {item.uso}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Social proof bar */}
        <div {...animCls(visible, settled, 520)} className={`${animCls(visible, settled, 520).className} grid grid-cols-2 sm:grid-cols-4 gap-4`}>
          {[
            { num: '10+', label: 'años del agente en el sector' },
            { num: '3', label: 'empresas registradas activas' },
            { num: '0%', label: 'interés en financiamiento' },
            { num: 'SUNARP', label: 'propiedad inscrita y titulada' },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="font-display text-2xl font-bold text-[#1a3a2a] mb-1">{s.num}</p>
              <p className="text-gray-500 text-xs leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Respaldo ─── */
function Respaldo() {
  const { ref, visible, settled } = useInView()
  const cards = [
    { Icon: IconBuilding, label: 'Empresa desarrolladora', name: 'Codo Capital Inmobiliaria S.A.C.', lines: ['RUC: 20616173767', 'Partida SUNARP: 11223730'] },
    { Icon: IconShield, label: 'Empresa comercializadora', name: 'Tadeo Gestión Inmobiliaria', lines: ['RUC: 20609271010', 'Partida SUNARP: 14929706'] },
    { Icon: IconUser, label: 'Agente registrado', name: 'Jorge Tadeo', lines: ['Agente N.° 10701-PN-MVCS', '+8 años de experiencia'] },
  ]
  const garantias = ['Propiedad titulada en SUNARP', 'Empresa activa ante SUNAT', 'Minuta de compraventa', 'Constancia de no adeudo']

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div {...animCls(visible, settled, 0)}>
          <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Respaldo legal</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">Inviertes con cero riesgos</h2>
          <p className="text-gray-500 max-w-xl mb-12 leading-relaxed">Tres empresas registradas, propiedad titulada e inscrita en SUNARP. Tu inversión está completamente respaldada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cards.map((c, i) => {
            const a = animCls(visible, settled, 100 + i * 120)
            return (
              <div key={c.name} {...a} className={`${a.className} bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-[transform,box-shadow] duration-200`}>
                <div className="w-12 h-12 rounded-xl bg-[#1a3a2a] flex items-center justify-center mb-4">
                  <c.Icon className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-wider mb-2">{c.label}</p>
                <p className="font-semibold text-gray-900 mb-2">{c.name}</p>
                {c.lines.map((line) => <p key={line} className="text-gray-500 text-sm">{line}</p>)}
              </div>
            )
          })}
        </div>

        <div {...animCls(visible, settled, 450)} className={`${animCls(visible, settled, 450).className} flex gap-3 flex-wrap mb-10`}>
          {garantias.map((g) => (
            <span key={g} className="bg-[#1a3a2a] text-white px-5 py-2 rounded-full text-sm font-medium">✓ {g}</span>
          ))}
        </div>

        <div {...animCls(visible, settled, 600)} className={`${animCls(visible, settled, 600).className} flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-[#f5f0e8] rounded-2xl border border-[#c9a84c]/20`}>
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">Todo respaldado. ¿Listo para iniciar?</p>
            <p className="text-gray-500 text-sm">Nuestro agente registrado te acompaña en cada paso del proceso.</p>
          </div>
          <CtaBtn className="flex-shrink-0">
            <IconWA className="w-4 h-4" />
            Iniciar proceso de compra
          </CtaBtn>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Final ─── */
function CtaFinal() {
  const { ref, visible } = useInView(0.2)
  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <img src="/imgs/zoom_p1_0.jpeg" alt="Tu hacienda en Codo del Pozuzo" className="absolute inset-0 w-full h-full object-cover object-right" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f14]/95 via-[#1a3a2a]/85 to-[#1a3a2a]/40" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 leading-tight transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          5,000 m² para sembrar tus sueños, construir tu hogar y crear tu propio legado
        </h2>
        <p className={`text-white/65 text-lg mb-10 leading-relaxed max-w-xl transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
          Quedan pocas haciendas de prelanzamiento. Habla con nosotros hoy y elige tu ubicación.
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 transition-[opacity,transform] duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '280ms' }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-[#c9a84c] text-[#1a3a2a] font-bold text-lg px-12 py-5 rounded-full hover:bg-[#e8c96a] hover:-translate-y-0.5 transition-all shadow-xl shadow-[#c9a84c]/20"
          >
            <IconWA className="w-6 h-6" />
            Hablar por WhatsApp
          </a>
          <a
            href="#contacto"
            className="flex items-center justify-center gap-2 text-white font-medium px-10 py-5 rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all text-lg"
          >
            Enviar formulario
          </a>
        </div>
        <p className={`text-white/35 text-sm mt-8 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '420ms' }}>
          Jorge Tadeo · Agente Inmobiliario Registrado · +51 980 410 065
        </p>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-display text-lg font-bold text-white tracking-wide">HACIENDAS</span>
              <span className="text-[0.65rem] text-[#c9a84c] tracking-[0.2em] uppercase">DEL CODO</span>
            </div>
            <p className="text-white/40 text-sm">Codo del Pozuzo · Huánuco · Perú</p>
            <p className="text-white/40 text-sm">La decisión de invertir con criterio.</p>
          </div>
          <div>
            <h5 className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.1em] mb-4">Contacto</h5>
            <p className="text-white/50 text-sm">Jorge Tadeo · Agente N.° 10701-PN-MVCS</p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-[#c9a84c] text-sm hover:text-[#e8c96a] transition-colors block mt-1">+51 980 410 065</a>
            <a href="mailto:codocapitalinmobiliaria@gmail.com" className="text-[#c9a84c] text-sm hover:text-[#e8c96a] transition-colors block">codocapitalinmobiliaria@gmail.com</a>
          </div>
          <div>
            <h5 className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.1em] mb-4">Datos para depósito</h5>
            <p className="text-white/70 text-sm font-semibold mb-1">BBVA — Codo Capital Inmobiliaria</p>
            <p className="text-white/40 text-xs">Cuenta soles:</p>
            <p className="text-white/60 text-sm font-mono">0011 0210 0201101761 29</p>
            <p className="text-white/40 text-xs mt-2">CCI:</p>
            <p className="text-white/60 text-sm font-mono">011 210 000201101761 29</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/25 text-xs text-center">
            © 2026 Codo Capital Inmobiliaria S.A.C. · RUC 20616173767 · Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─── App ─── */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Valores />
      <Proyecto />
      <NaturalezaDivider />
      <Ubicacion />
      <Infraestructura />
      <MasterPlan />
      <Posibilidades />
      <Rentabilidad />
      <Precio />
      <Pasos />
      <Testimonios />
      <Respaldo />
      <Contacto />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
      <StickyCtaBar />
    </>
  )
}
