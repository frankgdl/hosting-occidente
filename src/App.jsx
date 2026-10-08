import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const [formStatus, setFormStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })

    setFormStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nombre = formData.nombre.trim()
    const correo = formData.correo.trim()
    const mensaje = formData.mensaje.trim()

    if (!nombre || !correo || !mensaje) {
      setFormStatus('Por favor, completa todos los campos.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(correo)) {
      setFormStatus('Por favor, introduce un correo electrónico válido.')
      return
    }

    const subject = encodeURIComponent(
      `Solicitud de información - ${nombre}`,
    )

    const body = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
    )

    setFormStatus(
      'Los datos son válidos. Se abrirá tu aplicación de correo.',
    )

    window.location.href =
      `mailto:soporte@hostingoccidente.mx?subject=${subject}&body=${body}`
  }

  return (
    <div className="app">

      {/* =========================
          ENCABEZADO Y NAVEGACIÓN
      ========================== */}

      <header className="header">
        <div className="container nav">

          <a href="#inicio" className="logo">
            <span className="logo-main">Hosting</span>
            <span className="logo-sub">de Occidente</span>
          </a>

          <nav className="menu" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#soluciones">Soluciones</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>

        </div>
      </header>

      {/* =========================
          CONTENIDO PRINCIPAL
      ========================== */}

      <main>

        {/* =========================
            HU-01 — PÁGINA DE INICIO
        ========================== */}

        <section id="inicio" className="hero">

          <div className="container hero-content">

            <div className="hero-text">

              <span className="eyebrow">
                SOLUCIONES DIGITALES
              </span>

              <h1>
                Hosting de Occidente
              </h1>

              <p className="hero-description">
                Soluciones de hosting y servicios web para impulsar
                la presencia digital de tu empresa.
              </p>

              <div className="hero-actions">

                <a
                  href="#servicios"
                  className="button button-primary"
                >
                  Conocer servicios
                </a>

                <a
                  href="#contacto"
                  className="button button-secondary"
                >
                  Contactar
                </a>

              </div>

              <div className="domain">
                <span>hostingoccidente.mx</span>
              </div>

            </div>

            <div className="hero-card">

              <div className="hero-card-top">
                <span className="status-dot"></span>
                <span>Servicio en línea</span>
              </div>

              <div className="hero-card-content">

                <div className="server-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <h2>
                  Tu proyecto en línea
                </h2>

                <p>
                  Infraestructura y servicios digitales
                  para las necesidades de tu negocio.
                </p>

              </div>

              <div className="hero-card-footer">
                <span>WEB</span>
                <span>MX</span>
              </div>

            </div>

          </div>

        </section>

        {/* =========================
            HU-02 — SERVICIOS
        ========================== */}

        <section id="servicios" className="services">

          <div className="container">

            <div className="section-heading">

              <span className="eyebrow">
                NUESTROS SERVICIOS
              </span>

              <h2>
                Soluciones para tu presencia digital
              </h2>

              <p>
                Conoce nuestras principales soluciones para
                proyectos y empresas que necesitan presencia
                en Internet.
              </p>

            </div>

            <div className="service-grid">

              <article className="service-card">

                <span className="service-number">
                  01
                </span>

                <h3>
                  Hosting web
                </h3>

                <p>
                  Espacio para alojar sitios y aplicaciones web
                  de manera práctica y confiable.
                </p>

                <a href="#contacto">
                  Solicitar información →
                </a>

              </article>

              <article className="service-card">

                <span className="service-number">
                  02
                </span>

                <h3>
                  Dominios
                </h3>

                <p>
                  Administración de dominios para fortalecer
                  la identidad digital de tu empresa.
                </p>

                <a href="#contacto">
                  Solicitar información →
                </a>

              </article>

              <article className="service-card">

                <span className="service-number">
                  03
                </span>

                <h3>
                  Soluciones web
                </h3>

                <p>
                  Alternativas digitales orientadas a las
                  necesidades particulares de cada proyecto.
                </p>

                <a href="#contacto">
                  Solicitar información →
                </a>

              </article>

            </div>

          </div>

        </section>

        {/* =========================
            HU-03 — SOLUCIONES
        ========================== */}

        <section id="soluciones" className="solutions">

          <div className="container">

            <div className="section-heading">

              <span className="eyebrow">
                SOLUCIONES DIGITALES
              </span>

              <h2>
                Soluciones para hacer crecer tu presencia digital
              </h2>

              <p>
                Diseñamos y desarrollamos soluciones web orientadas
                a las necesidades de cada proyecto, desde sitios
                informativos hasta herramientas digitales para empresas.
              </p>

            </div>

            <div className="solution-grid">

              <article className="solution-card">

                <span className="solution-number">
                  01
                </span>

                <h3>
                  Presencia web
                </h3>

                <p>
                  Sitios web profesionales para presentar tu empresa,
                  servicios y proyectos de manera clara y confiable.
                </p>

                <a href="#contacto">
                  Solicitar información →
                </a>

              </article>

              <article className="solution-card">

                <span className="solution-number">
                  02
                </span>

                <h3>
                  Soluciones para empresas
                </h3>

                <p>
                  Desarrollo de herramientas digitales que ayudan a
                  mejorar procesos, comunicación y atención a clientes.
                </p>

                <a href="#contacto">
                  Solicitar información →
                </a>

              </article>

              <article className="solution-card">

                <span className="solution-number">
                  03
                </span>

                <h3>
                  Desarrollo personalizado
                </h3>

                <p>
                  Propuestas digitales adaptadas a los objetivos,
                  características y necesidades particulares de cada
                  proyecto.
                </p>

                <a href="#contacto">
                  Solicitar información →
                </a>

              </article>

            </div>

          </div>

        </section>

        {/* =========================
            HU-04 — NOSOTROS
        ========================== */}

        <section id="nosotros" className="about">

          <div className="container about-content">

            <div className="about-text">

              <span className="eyebrow">
                NOSOTROS
              </span>

              <h2>
                Tecnología y soluciones digitales para tu empresa
              </h2>

              <p>
                Hosting de Occidente es una propuesta enfocada en
                ofrecer servicios y soluciones digitales para empresas
                y proyectos que buscan fortalecer su presencia en Internet.
              </p>

              <p>
                Nuestro enfoque combina diseño, desarrollo web y
                herramientas digitales para crear experiencias claras,
                funcionales y orientadas a las necesidades de cada cliente.
              </p>

              <a
                href="#contacto"
                className="button button-primary"
              >
                Conocer más
              </a>

            </div>

            <div className="about-card">

              <div className="about-item">

                <span>01</span>

                <div>
                  <h3>
                    Enfoque profesional
                  </h3>

                  <p>
                    Soluciones digitales diseñadas con una visión clara,
                    funcional y profesional.
                  </p>
                </div>

              </div>

              <div className="about-item">

                <span>02</span>

                <div>
                  <h3>
                    Atención personalizada
                  </h3>

                  <p>
                    Cada proyecto parte de sus propias necesidades
                    y objetivos.
                  </p>
                </div>

              </div>

              <div className="about-item">

                <span>03</span>

                <div>
                  <h3>
                    Desarrollo web
                  </h3>

                  <p>
                    Implementación de tecnologías web para crear
                    experiencias digitales modernas.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            HU-05 — CONTACTO
        ========================== */}

        <section id="contacto" className="contact">

          <div className="container contact-content">

            <div className="contact-text">

              <span className="eyebrow">
                CONTACTO
              </span>

              <h2>
                ¿Tienes un proyecto en mente?
              </h2>

              <p>
                Ponte en contacto con Hosting de Occidente
                para conocer nuestras soluciones y recibir
                información sobre nuestros servicios.
              </p>

              <div className="contact-direct">

                <span>
                  También puedes escribirnos directamente:
                </span>

                <a href="mailto:soporte@hostingoccidente.mx">
                  soporte@hostingoccidente.mx
                </a>

              </div>

            </div>

            <div className="contact-card">

              <span className="contact-label">
                SOLICITA INFORMACIÓN
              </span>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                <div className="form-group">

                  <label htmlFor="nombre">
                    Nombre
                  </label>

                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="correo">
                    Correo electrónico
                  </label>

                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formData.correo}
                    onChange={handleChange}
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="mensaje">
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>

                </div>

                {formStatus && (
                  <p
                    className="form-status"
                    role="alert"
                  >
                    {formStatus}
                  </p>
                )}

                <button
                  type="submit"
                  className="button button-primary"
                >
                  Enviar solicitud
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      {/* =========================
          PIE DE PÁGINA
      ========================== */}

      <footer className="footer">

        <div className="container footer-content">

          <div>

            <div className="footer-logo">
              Hosting de Occidente
            </div>

            <p>
              Soluciones digitales para tu empresa.
            </p>

          </div>

          <div className="footer-info">

            <span>
              hostingoccidente.mx
            </span>

            <a href="mailto:soporte@hostingoccidente.mx">
              soporte@hostingoccidente.mx
            </a>

          </div>

        </div>

        <div className="container footer-bottom">

          <p>
            © 2026 Hosting de Occidente. Todos los derechos reservados.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App