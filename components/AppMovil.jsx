export default function AppMovil() {
  return (
    <>
      <section className="section-4">
        <div className="container-semiCirculo">
          <div className="semi-circulo">
            <div className="container-img-movil">
              <img src="/img/movil/movil.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="container-group">
            <div className="container-layout">
              <img src="/img/movil/mancha.png" alt="" className="u-image" />
              <h2 className="text-1">
                Nueva aplicación movil para conductores
              </h2>
              <p className="text-2">
                Nuestra aplicación móvil revolucionaria ofrece una experiencia
                completa para conductores. Con solo unos toques en la pantalla,
                podrás solicitar un conductor de manera conveniente y rápida.
                Simplifica tu experiencia como conductor y disfruta de todas las
                funciones necesarias al alcance de tu mano. ¡Descarga nuestra
                app y lleva el control de tus pasajeros de manera
                eficiente!
                <br />
                ¿Ya eres conductor?
                <br />
                Descarga nuestra App ahora!!
              </p>
              <div className="button_download">
                <a
                  href="https://drive.google.com/uc?export=download&id=1jpZ34uP3OrLr8D2mndr8JiHJuv6-UTJM"
                  download="capital-tours.apk"
                  className="my_button_a"
                >
                  Descargar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
