export default function Servicio() {
  return (
    <>
      <div className="section-servicios">
        <div className="container">
          <h2 className="section-header">Servicios</h2>
          <div className="row">
            <div className="items-servicio bounceInUp">
              <div className="box">
                <div className="icon">
                  <i className="price-tag material-icons">
                    local_offer
                  </i>
                </div>
                <h4 className="title">
                  <a href="">Precios Justos</a>
                </h4>
                <p className="description">
                  Precios acordados antes del trayecto, totalmente libres de sorpresas o de
                  incrementos, sin importar la ruta o el tráfico. Somos una Empresa de Taxi 100% Peruana.
                </p>
              </div>
            </div>
            <div className="items-servicio bounceInUp">
              <div className="box">
                <div className="icon">
                  <i className="gear-tag material-icons">
                    settings
                  </i>
                </div>
                <h4 className="title">
                  <a href="">Soporte y Atención</a>
                </h4>
                <p className="description">
                  Optimizamos continuamente con mejoras nuestro aplicativo móvil y contamos
                  con especialistas a tu disposición. Soporte las 24/7 Atendemos todos las 24 horas del dia,
                  todos los dias de la semana y los 365 dias del año.
                </p>
              </div>
            </div>

            <div className="items-servicio bounceInUp">
              <div className="box">
                <div className="icon">
                  <i className="check-tag material-icons">
                    check_circle
                  </i>
                </div>
                <h4 className="title">
                  <a href="">Calidad en cada viaje</a>
                </h4>
                <p className="description">
                  Nuestros conductores cuentan con entrevistas psicológicas, antecedentes
                  penales policiales y judiciales. Además se caracterizan por tener un trato amable con
                  nuestros usuarios y ser muy profesionales en cada viaje.
                </p>
              </div>
            </div>
            <div className="items-servicio bounceInUp">
              <div className="box">
                <div className="icon">
                  <i className="compose-tag material-icons">
                    edit_note
                  </i>
                </div>
                <h4 className="title">
                  <a href="">Garantía y Calidad</a>
                </h4>
                <p className="description">
                  Trabajamos para tu satisfacción. Pide Aló Taxi hoy y descubre por qué
                  nuestros clientes respaldan nuestro servicio. Brindamos Calidad, Seguridad, salubridad y
                  experiencia que nos mantiene 25 años en el mercado.
                </p>
              </div>
            </div>

            <div className="items-servicio bounceInUp" data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDuration: '1.4s', animationDelay: ' 0.2s', animationName: 'bounceInUp' }}>
              <div className="box">
                <div className="icon">
                  <i className="location-tag material-icons">
                    location_on
                  </i>
                </div>
                <h4 className="title">
                  <a href="">Servicios al Aeropuerto</a>
                </h4>
                <p className="description">
                  Traslados y recojos del Aeropuerto a cualquier parte de la ciudad de
                  Lima, con los mejores conductores, para viajar tranquilo y seguro.
                </p>
              </div>
            </div>
            <div className="items-servicio bounceInUp" data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDuration: '1.4s', animationDelay: ' 0.2s', animationName: 'bounceInUp' }}>
              <div className="box">
                <div className="icon">
                  <i className="medical-tag material-icons">
                    medical_services
                  </i>
                </div>
                <h4 className="title">
                  <a href="">Protocolo COVID</a>
                </h4>
                <p className="description">
                  Vehículos desinfectados después de cada viaje, cabinas aisladoras,
                  mascarillas KN-95 y gel desinfectante para nuestros usuarios.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
