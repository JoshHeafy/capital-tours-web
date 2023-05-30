export default function Intro() {
  return (
    <>
      <div className="main-container">
        <div className="container-inner">
          <div className="inner">
            <div className="inner-card">
              <div className="container-tab">
                <div className="content">
                  <div className="content-tab">
                    <div className="tab_block">
                      <div className="tab-title">
                        <div className="main-layer">
                          <div className="sub-layer">
                            <h2 className="layer_text"> Ponte al volante y genera ganancias</h2>
                          </div>
                        </div>
                        <div className="tab-body-layer">
                          <div className="body-layer">
                            <div className="body-sub-layer">
                              <p className="body-layer-text">
                                Conduce en la empresa que tiene la mayor cantidad de usuarios&nbsp;activos.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer-tab">
                        <div className="content-footer">
                          <a href="/solicitar" className="button-2">
                            Empezar ahora
                          </a>
                          {/* <div className="text_link">
                            <a href="/nosotros" className="a">
                              <div className="text_link_container">
                                <span className="text_sub_link">
                                  Conoce más sobre cómo conducir con nosotros
                                </span>
                              </div>
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text__img">
              <img className="img" src="/img/banner/taxi-fondo.webp" alt="" />
              {/* <img className="img-fluid" src="/img/banner/taxi-noche.jpg" alt=""/> */}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
