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
                  <a href="">Precio Cómodo</a>
                </h4>
                <p className="description">
                  Trabaja con nosotros tan solo con un pago que incluye un mes de tributo por adelantado, no te lo pierdas!
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
                  Optimizamos continuamente con mejoras nuestra página web y contamos con asistencia virtual a tu disposición. Soporte chatbot las 24/7, todos los dias de la semana y los 365 dias del año.
                </p>
              </div>
            </div>

            <div className="items-servicio bounceInUp">
              <div className="box">
                <div className="icon">
                  <i className="check-tag material-icons">check_circle</i>
                </div>
                <h4 className="title">
                  <a href="">Experiencia y confianza</a>
                </h4>
                <p className="description">
                  Nuestra administracion hace pruebas rigurosas y admite solo a vehiculos con todos sus documentos en regla.
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
                  Como suscriptor, tendrás acceso a una tarjeta de circulación con la cual podrás trabajar libremente como taxista por la ciudad.
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
