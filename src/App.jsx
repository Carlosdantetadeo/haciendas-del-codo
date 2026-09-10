import { WA_LINK } from './constants'
import WhatsAppFloat from './components/WhatsAppFloat'

/* ─── Nav ─── */
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#1a3a2a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold text-white tracking-wide">HACIENDAS</span>
          <span className="text-[0.65rem] text-[#c9a84c] tracking-[0.2em] uppercase">DEL CODO</span>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="bg-[#c9a84c] text-[#1a3a2a] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#e8c96a] transition-colors duration-200"
        >
          Reservar ahora
        </a>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <img
        src="/imgs/zoom_p9_1.jpeg"
        alt="Vista aérea Haciendas del Codo"
        className="absolute inset-0 w-full h-full object-cover object-right"
      />
      {/* Gradient overlay — más oscuro a la izquierda donde está el texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f14]/95 via-[#1a3a2a]/80 to-[#1a3a2a]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f14]/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-28 w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#e8c96a] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            🌿 Solo 10 haciendas en prelanzamiento
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
            El privilegio<br />de vivir bien
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mb-8 leading-relaxed">
            5,000 m² en la Selva Central del Perú para vivir, producir, descansar o emprender.
            Terrenos con plusvalía, respaldo legal y naturaleza pura.
          </p>
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            <span className="text-white/60">Desde</span>
            <span className="font-display text-3xl font-bold text-[#c9a84c]">S/ 45,000</span>
            <span className="text-white/30">·</span>
            <span className="text-white/70">Separa con S/ 2,000</span>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-[#c9a84c] text-[#1a3a2a] font-semibold px-8 py-3.5 rounded-full hover:bg-[#e8c96a] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#c9a84c]/25"
            >
              Quiero mi hacienda
            </a>
            <a
              href="#proyecto"
              className="text-white font-medium px-8 py-3.5 rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all"
            >
              Ver el proyecto
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-1 text-white/40 text-xs z-10">
        <span>Desplaza para conocer</span>
        <span className="animate-bounce text-base">↓</span>
      </div>
    </section>
  )
}

/* ─── Valores ─── */
function Valores() {
  const items = [
    {
      icon: '📈',
      title: 'Plusvalía',
      desc: 'Una zona en desarrollo con infraestructura proyectada, corredor vial reconocido por ley y crecimiento sostenido del entorno.',
    },
    {
      icon: '💰',
      title: 'Rentabilidad',
      desc: 'Genera ingresos con tu hacienda: alquiler de cabañas, turismo vivencial o producción. Hasta S/ 4,160 al mes de ingreso referencial.',
    },
    {
      icon: '🌿',
      title: 'Libertad',
      desc: '5,000 m² planos en Selva Central, baja densidad, privacidad real y una naturaleza que pocas propiedades en el Perú pueden ofrecer.',
    },
  ]

  return (
    <section id="proyecto" className="py-20 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">¿Por qué invertir?</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">
          La decisión de invertir{' '}
          <em className="italic text-[#c9a84c]">con criterio</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-display text-xl font-semibold text-[#1a3a2a] mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Proyecto ─── */
function Proyecto() {
  const stats = [
    { num: '76+', label: 'hectáreas' },
    { num: '5,000', label: 'm² por hacienda' },
    { num: '10', label: 'unidades prelanzamiento' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">El proyecto</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-5">
              Más de 76 hectáreas para vivir con más espacio
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Una propuesta de baja densidad en Codo del Pozuzo, Huánuco — con haciendas bien separadas,
              caminos integrados al paisaje y una sensación real de libertad.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Ríos, cascadas, senderos y biodiversidad convierten cada recorrido en una experiencia única.
            </p>
            <div className="flex gap-10 flex-wrap">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-4xl font-bold text-[#2d5a40] leading-none">{s.num}</span>
                  <span className="text-gray-400 text-sm mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Foto real del proyecto */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[420px]">
            <img
              src="/imgs/zoom_p3_0.jpeg"
              alt="Vista panorámica de la Selva Central desde Haciendas del Codo"
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
  return (
    <section className="relative h-72 sm:h-96 overflow-hidden">
      <img
        src="/imgs/zoom_p7_0.jpeg"
        alt="Naturaleza de Codo del Pozuzo — ríos, cascadas y biodiversidad"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a3a2a]/55 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Naturaleza que se vive</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white max-w-xl">
          Ríos, cascadas y biodiversidad en tu puerta
        </h2>
      </div>
    </section>
  )
}

/* ─── Ubicacion ─── */
function Ubicacion() {
  const ruta = [
    { icon: '🚗', titulo: 'Lima → Oxapampa', sub: '8 a 10 horas por tierra' },
    { icon: '🛤️', titulo: 'Oxapampa → Pozuzo', sub: '2 horas' },
    { icon: '🌿', titulo: 'Pozuzo → Haciendas', sub: 'Codo: 2h + 20 minutos' },
  ]

  return (
    <section className="py-20 bg-[#1a3a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Ubicación</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
          Codo del Pozuzo, Huánuco
        </h2>
        <p className="text-white/60 max-w-xl mb-10 leading-relaxed">
          Una ubicación privilegiada en la Selva Central del Perú con proyección de conectividad respaldada por ley.
        </p>

        {/* Mapa de ruta */}
        <div className="rounded-2xl overflow-hidden mb-10 shadow-xl">
          <img
            src="/imgs/zoom_p5_0.jpeg"
            alt="Mapa de ruta Lima - Codo del Pozuzo - Haciendas del Codo"
            className="w-full object-cover max-h-72"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 flex-wrap">
          {ruta.flatMap((r, i) => {
            const card = (
              <div
                key={r.titulo}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 min-w-[200px]"
              >
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <p className="text-white font-medium text-sm">{r.titulo}</p>
                  <p className="text-white/55 text-xs mt-0.5">{r.sub}</p>
                </div>
              </div>
            )
            if (i < ruta.length - 1) {
              return [card, <span key={`arrow-${i}`} className="text-[#c9a84c] text-2xl rotate-90 sm:rotate-0">→</span>]
            }
            return [card]
          })}
        </div>

        <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-2xl p-6 flex gap-5 items-start">
          <span className="text-3xl flex-shrink-0">⚖️</span>
          <div>
            <p className="text-[#c9a84c] font-semibold mb-2">Corredor vial reconocido por Ley N.° 31931</p>
            <p className="text-white/65 text-sm leading-relaxed">
              La ley declara de interés nacional el corredor Chancay — Codo del Pozuzo — Pucallpa,
              fortaleciendo la visión de integración costa, sierra y selva.{' '}
              <span className="text-[#e8c96a]">Codo del Pozuzo figura expresamente dentro de la ruta declarada.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Infraestructura ─── */
function Infraestructura() {
  const items = [
    { n: '01', title: 'Pórtico de ingreso', desc: 'Un acceso definido que brinda presencia y organización al proyecto.' },
    { n: '02', title: 'Alamedas', desc: 'Espacios naturales para caminar, relajarse y disfrutar del paisaje.' },
    { n: '03', title: 'Vías afirmadas', desc: 'Caminos acondicionados para facilitar el acceso y recorrido interno.' },
    { n: '04', title: 'Cerco perimétrico', desc: 'Delimitación del proyecto para mayor orden, privacidad y control.' },
    { n: '05', title: 'Riachuelos naturales', desc: 'Un entorno privilegiado rodeado de agua, montañas y clima tropical.' },
    { n: '06', title: 'Soluciones de campo', desc: 'Energía solar, abastecimiento de agua y biodigestor para vida autosuficiente.' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Infraestructura</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
          Todo lo que hará más valiosa tu hacienda
        </h2>

        {/* Foto aérea del proyecto real */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-12 h-72 sm:h-96">
          <img
            src="/imgs/zoom_p9_1.jpeg"
            alt="Vista aérea de Haciendas del Codo — acceso, río y haciendas"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.n} className="bg-white rounded-2xl p-6 border-l-4 border-[#4a8c62]">
              <span className="text-[#4a8c62] text-xs font-bold tracking-widest uppercase">{item.n}</span>
              <h4 className="font-semibold text-gray-900 mt-2 mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Master Plan ─── */
function MasterPlan() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Master Plan</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Elige tu ubicación
        </h2>
        <p className="text-gray-500 mb-8 max-w-xl leading-relaxed">
          El proyecto se desarrolla en 3 etapas. La Etapa 1 cuenta con 43 lotes y la Etapa 2 con 68 lotes.
          Elige tu hacienda en la etapa de prelanzamiento y asegura la mejor ubicación.
        </p>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <img
            src="/imgs/zoom_p17_0.jpeg"
            alt="Master Plan Haciendas del Codo — distribución de lotes por etapas"
            className="w-full object-cover"
          />
        </div>
        <div className="flex gap-6 mt-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#1a3a2a]" />
            <span className="text-gray-600 text-sm">1° Etapa — 43 lotes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#4a8c62]" />
            <span className="text-gray-600 text-sm">2° Etapa — 68 lotes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-300" />
            <span className="text-gray-600 text-sm">3° Etapa — Próximamente</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Posibilidades ─── */
function Posibilidades() {
  const items = [
    { emoji: '🏡', title: 'Vivir', desc: 'Construye tu hogar en la selva con privacidad, naturaleza y un estilo de vida diferente.' },
    { emoji: '🌱', title: 'Producir', desc: 'Aprovecha la tierra para cultivos, agroforestería o producción familiar.' },
    { emoji: '🌄', title: 'Descansar', desc: 'Tu refugio privado en la naturaleza, disponible cuando lo necesites.' },
    { emoji: '🚀', title: 'Emprender', desc: 'Desarrolla un negocio: cabaña de alquiler, turismo vivencial o proyecto propio.' },
  ]

  return (
    <section className="py-20 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Foto lifestyle */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-12 h-64 sm:h-80">
          <img
            src="/imgs/zoom_p8_0.jpeg"
            alt="Estilo de vida en Haciendas del Codo — vivir, producir, compartir"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">
          Una propiedad, muchas posibilidades
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
          Tú decides cómo usar tu hacienda
        </h2>
        <p className="text-gray-500 max-w-xl mb-12 leading-relaxed">
          Con 5,000 m², puedes desarrollar un espacio para disfrutar, invertir y hacerlo crecer a tu ritmo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-200 rounded-2xl p-7 text-center hover:border-[#4a8c62] hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-display text-xl font-semibold text-[#1a3a2a] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Rentabilidad ─── */
function Rentabilidad() {
  const filas = [
    { esc: 'Inicial', badgeClass: 'bg-white/10 text-white/70', tarifa: 'S/ 180', noches: 8, mensual: 'S/ 1,440', anual: 'S/ 17,280', rowClass: '' },
    { esc: 'Intermedio', badgeClass: 'bg-[#4a8c62]/20 text-[#7acba0]', tarifa: 'S/ 220', noches: 12, mensual: 'S/ 2,640', anual: 'S/ 31,680', rowClass: '' },
    { esc: 'Mayor actividad', badgeClass: 'bg-[#c9a84c]/20 text-[#c9a84c]', tarifa: 'S/ 260', noches: 16, mensual: 'S/ 4,160', anual: 'S/ 49,920', rowClass: 'bg-[#c9a84c]/5' },
  ]

  return (
    <section className="py-20 bg-[#1a3a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#c9a84c] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Genera ingresos</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-3">
          Tu hacienda puede ser<br />una fuente de ingresos
        </h2>
        <p className="text-white/60 max-w-lg mb-12 leading-relaxed">
          Con 5,000 m², puedes desarrollar una cabaña independiente para alquiler temporal
          y aprovechar el entorno natural para generar ingresos complementarios.
        </p>

        <div className="overflow-x-auto rounded-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#c9a84c]/15">
                {['Escenario', 'Tarifa / noche', 'Noches / mes', 'Ingreso mensual', 'Ingreso anual'].map((h) => (
                  <th key={h} className="px-5 py-4 text-left text-[#c9a84c] text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filas.map((f) => (
                <tr key={f.esc} className={`border-b border-white/5 ${f.rowClass}`}>
                  <td className="px-5 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${f.badgeClass}`}>
                      {f.esc}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-white/70">{f.tarifa}</td>
                  <td className="px-5 py-4 text-white/70">{f.noches}</td>
                  <td className="px-5 py-4 text-[#c9a84c] font-bold text-lg">{f.mensual}</td>
                  <td className="px-5 py-4 text-white/70">{f.anual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/35 text-xs mt-4">
          * Proyección referencial. Los resultados dependen del uso, ocupación y gestión del propietario.
        </p>
      </div>
    </section>
  )
}

/* ─── Precio ─── */
function Precio() {
  return (
    <section id="precio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[500px] order-2 lg:order-1">
            <img
              src="/imgs/zoom_p20_0.jpeg"
              alt="Asesoría y firma de contrato Haciendas del Codo"
              className="w-full h-full object-cover object-right"
            />
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/12 border border-[#c9a84c]/30 text-[#c9a84c] text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              🔥 Solo para los primeros 10 clientes
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
              Precio de Prelanzamiento
            </h2>
            <p className="text-gray-500 mb-8">
              Sé uno de los primeros en asegurar tu ubicación y accede a condiciones exclusivas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Contado */}
              <div className="bg-[#f5f0e8] rounded-2xl p-6 border-2 border-[#c9a84c]">
                <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-widest mb-1">Al contado</p>
                <p className="font-display text-4xl font-bold text-gray-900 mb-1">S/ 45,000</p>
                <p className="text-[#4a8c62] font-semibold text-sm mb-4">Ahorras S/ 5,000</p>
                <ul className="space-y-1.5 mb-5 text-sm text-gray-500">
                  <li>✓ S/ 5,000 de descuento</li>
                  <li>✓ Viaje de verificación*</li>
                  <li>✓ Asesoría personalizada</li>
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-[#c9a84c] text-[#1a3a2a] font-semibold py-2.5 rounded-full hover:bg-[#e8c96a] transition-colors text-center text-sm"
                >
                  Separar ahora
                </a>
              </div>
              {/* Financiado */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-widest mb-1">Financiado</p>
                <p className="font-display text-4xl font-bold text-gray-900 mb-1">S/ 50,000</p>
                <p className="text-[#4a8c62] font-semibold text-sm mb-4">0% de interés</p>
                <ul className="space-y-1.5 mb-5 text-sm text-gray-500">
                  <li>✓ Cuotas sin intereses</li>
                  <li>✓ Viaje de verificación*</li>
                  <li>✓ Asesoría personalizada</li>
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full border-2 border-[#1a3a2a] text-[#1a3a2a] font-semibold py-2.5 rounded-full hover:bg-[#1a3a2a] hover:text-white transition-all text-center text-sm"
                >
                  Separar ahora
                </a>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 bg-[#1a3a2a] rounded-full px-6 py-3 flex-wrap">
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
  const pasos = [
    { n: '1', title: 'Conoce', desc: 'Descubre el proyecto y revisa las ubicaciones disponibles con nuestro equipo.' },
    { n: '2', title: 'Visita', desc: 'Recorre el terreno y conoce personalmente el entorno natural de Codo del Pozuzo.' },
    { n: '3', title: 'Elige', desc: 'Selecciona la hacienda que mejor se adapte a tus planes.' },
    { n: '4', title: 'Separa', desc: 'Asegura tu ubicación durante el prelanzamiento con solo S/ 2,000.' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Pasos */}
          <div>
            <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Así de simple</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-10">
              Tu camino hacia la hacienda
            </h2>
            <div className="space-y-6 mb-10">
              {pasos.map((p) => (
                <div key={p.n} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a2a] flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-lg font-bold text-[#c9a84c]">{p.n}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#c9a84c] text-[#1a3a2a] font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#e8c96a] hover:-translate-y-0.5 transition-all"
            >
              Empezar ahora por WhatsApp
            </a>
          </div>

          {/* Foto */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[500px]">
            <img
              src="/imgs/zoom_p21_0.jpeg"
              alt="Equipo revisando planos en el terreno de Haciendas del Codo"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Respaldo ─── */
function Respaldo() {
  const cards = [
    {
      icon: '🏢',
      label: 'Empresa desarrolladora',
      name: 'Codo Capital Inmobiliaria S.A.C.',
      lines: ['RUC: 20616173767', 'Partida SUNARP: 11223730'],
    },
    {
      icon: '🤝',
      label: 'Empresa comercializadora',
      name: 'Tadeo Gestión Inmobiliaria',
      lines: ['RUC: 20609271010', 'Partida SUNARP: 14929706'],
    },
    {
      icon: '👤',
      label: 'Agente registrado',
      name: 'Jorge Tadeo',
      lines: ['Agente Inmobiliario N.° 10701-PN-MVCS', '+8 años de experiencia'],
    },
  ]
  const garantias = ['Propiedad titulada en SUNARP', 'Empresa activa ante SUNAT', 'Minuta de compraventa', 'Constancia de no adeudo']

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.15em] mb-3">Respaldo legal</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
          Inviertes con cero riesgos
        </h2>
        <p className="text-gray-500 max-w-xl mb-12 leading-relaxed">
          Tres empresas registradas, propiedad titulada e inscrita en SUNARP. Tu inversión está completamente respaldada.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cards.map((c) => (
            <div key={c.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-4">{c.icon}</div>
              <p className="text-[#4a8c62] text-xs font-semibold uppercase tracking-wider mb-2">{c.label}</p>
              <p className="font-semibold text-gray-900 mb-2">{c.name}</p>
              {c.lines.map((line) => (
                <p key={line} className="text-gray-500 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          {garantias.map((g) => (
            <span key={g} className="bg-[#1a3a2a] text-white px-5 py-2 rounded-full text-sm font-medium">
              ✓ {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA Final ─── */
function CtaFinal() {
  return (
    <section className="relative py-28 overflow-hidden">
      <img
        src="/imgs/zoom_p1_0.jpeg"
        alt="Tu hacienda en Codo del Pozuzo"
        className="absolute inset-0 w-full h-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f14]/95 via-[#1a3a2a]/85 to-[#1a3a2a]/40" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-left">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
          5,000 m² para sembrar tus sueños,<br />construir tu hogar y crear tu propio legado
        </h2>
        <p className="text-white/65 text-lg mb-10 leading-relaxed max-w-xl">
          Quedan pocas haciendas de prelanzamiento. Habla con nosotros hoy y elige tu ubicación.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#c9a84c] text-[#1a3a2a] font-semibold text-xl px-12 py-5 rounded-full hover:bg-[#e8c96a] hover:-translate-y-0.5 transition-all shadow-xl shadow-[#c9a84c]/20"
        >
          💬 Hablar por WhatsApp
        </a>
        <p className="text-white/35 text-sm mt-6">
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
            <p className="text-white/50 text-sm">Jorge Tadeo</p>
            <p className="text-white/50 text-sm mb-1">Agente N.° 10701-PN-MVCS</p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="text-[#c9a84c] text-sm hover:text-[#e8c96a] transition-colors block">
              +51 980 410 065
            </a>
            <a href="mailto:codocapitalinmobiliaria@gmail.com" className="text-[#c9a84c] text-sm hover:text-[#e8c96a] transition-colors block">
              codocapitalinmobiliaria@gmail.com
            </a>
          </div>
          <div>
            <h5 className="text-[#4a8c62] text-xs font-semibold uppercase tracking-[0.1em] mb-4">Datos para depósito</h5>
            <p className="text-white/70 text-sm font-semibold mb-1">BBVA — Codo Capital Inmobiliaria</p>
            <p className="text-white/40 text-xs">Cuenta soles (Lima):</p>
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
      <Respaldo />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
