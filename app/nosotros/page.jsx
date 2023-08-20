import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <section className="nosotros">
        <div className="container">
          <h2 className="nosotros-heading">Acerca de Capital Tours</h2>
          <p className="nosotros-description">
            Capital Tours es una empresa líder en el sector de servicios de
            suscripción de vehículos para taxi en Huancayo, Perú...
          </p>

          <h3 className="mission-heading">Nuestra Misión</h3>
          <p className="mission-description">
            Nuestra misión en Capital Tours es ofrecer a nuestros clientes
            conductores de taxi una alternativa innovadora y rentable...
          </p>

          <h3 className="services-heading">Nuestros Servicios</h3>
          <ul className="services-list">
            <li>Suscripción de Vehículos para Taxi</li>
            <li>Soporte y Mantenimiento</li>
          </ul>

          <h3 className="why-us-heading">Por qué elegirnos</h3>
          <ul className="why-us-list">
            <li>Experiencia y Confianza</li>
            <li>Variedad de Vehículos</li>
            <li>Proceso Sencillo</li>
          </ul>

          <h3 className="contact-heading">Contáctanos</h3>
          <p className="contact-description">
            Si estás interesado en nuestras suscripciones de vehículos para taxi
            en Huancayo, no dudes en contactarnos...
          </p>
          <p className="contact-info">
            Dirección: Av. Mariscal Castilla & Av. Gral. Cordova Huancayo, Perú
            <br />
            Teléfono: 914354014
            <br />
            Horario de Atención: 8:30 am - 7:00 pm{" "}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
