import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <section class="about-us">
        <div class="about">
          <div className="title">
            <h2>Nosotros</h2>
          </div>
          <div className="content-about">
            <img
              src="/img/newcapital.png"
              class="pic"
              alt="imagen de la empresa"
            />
            <div class="text">
              <h5>
                NewCapital-<span>CapitalTours</span>
              </h5>
              <p>
                Capital Tours es una empresa líder en el sector de servicios de
                suscripción de vehículos para taxi en Huancayo - Perú
              </p>
              <h5>Nuestra Misión</h5>
              <p>
                Nuestra misión en Capital Tours es ofrecer a nuestros clientes
                conductores de taxi una alternativa innovadora y rentable.
              </p>
              <h5>UBICANOS</h5>
              <p>
                Dirección: Av. Mariscal Castilla & Av. Gral. Cordova Huancayo,
                Perú
                <br />
                Teléfono: 914354014
                <br />
                Horario de Atención: 8:30 am - 7:00 pm{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
