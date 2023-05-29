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
                  <i className="price-tag material-icons">local_offer</i>
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
                  <i className="gear-tag material-icons">settings</i>
                </div>
                <h4 className="title">
                  <a href="">Soporte y Atención</a>
                </h4>
                <p className="description">
                  Optimizamos continuamente con mejoras nuestro aplicativo móvil y contamos
                  con especialistas a tu disposición. Soporte las 24/7 Atendemos todos las 24 horas del dia, todos los dias de la semana y los 365 dias del año.
                </p>
              </div>
            </div>

            <div className="items-servicio bounceInUp">
              <div className="box">
                <div className="icon">
                  <i className="check-tag material-icons">check_circle</i>
                </div>
                <h4 className="title">
                  <a href="">Experiencia y confianza en cada trayecto</a>
                </h4>
                <p className="description">
                  Nuestros conductores pasan por rigurosas evaluaciones psicológicas y verificaciones de antecedentes penales. Ofrecen un trato amable y profesional en cada viaje.
                </p>
              </div>
            </div>
            <div className="items-servicio bounceInUp">
              <div className="box">
                <div className="icon">
                  <i className="compose-tag material-icons">edit_note</i>
                </div>
                <h4 className="title">
                  <a href="">Garantía y Calidad</a>
                </h4>
                <p className="description">
                  Como suscriptor, tendrás acceso a una calidad sin igual en nuestros servicios de taxis. Podrás disfrutar de vehículos bien mantenidos, limpios y cómodos, así como de conductores profesionales y corteses que se esfuerzan por brindarte la mejor experiencia posible.
                </p>
              </div>
            </div>

            <div className="items-servicio bounceInUp" data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDuration: '1.4s', animationDelay: ' 0.2s', animationName: 'bounceInUp' }}>
              <div className="box">
                <div className="icon">
                  <i className="location-tag material-icons">location_on</i>
                </div>
                <h4 className="title">
                  <a href="">Viajes interurbanos sin preocupaciones</a>
                </h4>
                <p className="description">
                  Explora diferentes destinos con total tranquilidad. Nuestros taxis autorizados para viajes interurbanos te brindan la libertad de descubrir nuevas ciudades sin contratiempos.
                </p>
              </div>
            </div>
            <div className="items-servicio bounceInUp" data-wow-delay="0.2s"
              style={{ visibility: 'visible', animationDuration: '1.4s', animationDelay: ' 0.2s', animationName: 'bounceInUp' }}>
              <div className="box">
                <div className="icon">
                  <i className="medical-tag material-icons">medical_services</i>
                </div>
                <h4 className="title">
                  <a href="">Viajes cómodos y saludables</a>
                </h4>
                <p className="description">
                  Cuidamos de ti durante tus desplazamientos. Nuestros taxis ofrecen un ambiente limpio y confortable, priorizando tu bienestar. Disfruta de viajes libres de estrés, donde tu salud y comodidad están siempre en primer lugar.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
