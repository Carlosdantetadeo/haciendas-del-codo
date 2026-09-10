import { useState } from 'react'
import { WA_CONTACTO } from '../constants'

const INTERESES = [
  'Quiero separar mi hacienda',
  'Quiero más información',
  'Quiero visitar el proyecto',
  'Quiero hablar con un asesor',
]

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', interes: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const lines = [
      `Hola, me contacto desde la landing de *Haciendas del Codo*.`,
      ``,
      `👤 *Nombre:* ${form.nombre}`,
      `📱 *Teléfono:* ${form.telefono}`,
      form.email ? `📧 *Email:* ${form.email}` : null,
      form.interes ? `🎯 *Interés:* ${form.interes}` : null,
      form.mensaje ? `💬 *Mensaje:* ${form.mensaje}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${WA_CONTACTO}?text=${encodeURIComponent(lines)}`
    window.open(url, '_blank')
    setEnviado(true)
  }

  return (
    <section id="contacto" className="py-20 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto izquierdo */}
          <div>
            <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Contáctanos</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
              Reserva tu hacienda hoy
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Completa el formulario y te contactaremos por WhatsApp para resolver tus dudas,
              mostrarte las ubicaciones disponibles y acompañarte en cada paso.
            </p>

            <div className="space-y-4">
              {[
                { icon: '⚡', text: 'Respuesta en menos de 24 horas' },
                { icon: '📍', text: 'Te mostramos las ubicaciones disponibles' },
                { icon: '🎯', text: 'Sin compromiso de compra' },
                { icon: '🛡️', text: 'Asesoría 100% gratuita' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {enviado ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-2xl font-semibold text-[#1a3a2a] mb-3">
                  ¡Listo! Abriendo WhatsApp…
                </h3>
                <p className="text-gray-500 mb-6">
                  Si WhatsApp no abrió automáticamente, escríbenos directamente al{' '}
                  <a
                    href={`https://wa.me/${WA_CONTACTO}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#4a8c62] font-semibold underline"
                  >
                    +51 989 203 018
                  </a>
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="text-sm text-gray-400 underline hover:text-gray-600 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nombre completo <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a8c62] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Teléfono / WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+51 999 999 999"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a8c62] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Correo electrónico <span className="text-gray-400 font-normal">(opcional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tucorreo@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a8c62] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    ¿Qué te interesa?
                  </label>
                  <select
                    name="interes"
                    value={form.interes}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4a8c62] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    {INTERESES.map((op) => (
                      <option key={op} value={op}>{op}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Mensaje <span className="text-gray-400 font-normal">(opcional)</span>
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="¿Tienes alguna pregunta específica?"
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4a8c62] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#1ebe5a] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                    <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.333.613 4.614 1.78 6.613L2.667 29.333l6.927-1.746A13.267 13.267 0 0 0 16 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667Zm7.68 18.56c-.32.906-1.573 1.653-2.64 1.866-.7.147-1.614.267-4.693-.987-3.934-1.6-6.48-5.56-6.68-5.813-.2-.267-1.6-2.107-1.6-4.013 0-1.894.987-2.827 1.347-3.2.32-.333.853-.48 1.373-.48.173 0 .32.013.453.013.387.027.587.054.84.654l1.16 2.8c.16.373.32.854.08 1.28-.213.44-.4.64-.6.867-.2.213-.413.44-.2.813.213.373.947 1.573 2.04 2.546 1.4 1.254 2.547 1.654 2.96 1.84.307.133.667.107.893-.133.28-.307.627-.814.987-1.307.253-.347.573-.387.907-.267l2.853 1.347c.333.16.547.24.627.387.08.16.08.907-.24 1.786Z" />
                  </svg>
                  Enviar por WhatsApp
                </button>

                <p className="text-gray-400 text-xs text-center">
                  Al enviar, se abrirá WhatsApp con tu información lista para enviarnos.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
