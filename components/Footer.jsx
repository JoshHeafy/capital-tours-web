import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__inner">
          <div className="row">
            <div className="col-6">
              <h2 className="footer__title">
                Capital Tours opera en toda la ciudad de Huancayo
              </h2>
              <div className="container-button">
                <Link className="footerNav__cta button-2" href="/contactanos">
                  Contacto
                </Link>
              </div>
            </div>
            <div className="footer-grid">
              <div className="fcol-2">
                <h3 className="ev-color-red">Recursos</h3>
                <ul>
                  <li>
                    <Link
                      href="/requisitos">
                      Requisitos
                    </Link>
                  </li>
                  <li>
                    <Link href="/descargas">
                      Descargas
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="fcol-4">
                <h3 className="ev-color-red">Consultorías</h3>
                <ul>
                  <li>
                    <Link href="/servicios">
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link href="/conductores">
                      Conductores
                    </Link>
                  </li>
                  <li>
                    <Link href="/consulta">
                      Consultar datos
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="fcol-5">
                <h3 className="ev-color-red">Nosotros</h3>
                <ul>
                  <li>
                    <Link href="/nosotros">
                      Quiénes Somos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__sub ctn">
          <small className="subFooter__credits">
            <Link href="/" rel="noopener">
              <img src="/img/logo.png" className="logo logo--scor | db" width="125" viewBox="0 0 125 36" fill="#fff"
                aria-hidden="true" />
            </Link>
            © 2023 - Empresa Capital Tours. Todos los derechos reservados.
          </small>

          {/* <ul className="subFooter__sn">
        <li className="sn">
          <Link href="https://twitter.com/remarkgroup" className="sn__link"  rel="noopener">
            <span className="sr-only">Twitter</span>
          </Link>

          <img src="/img/icons/fb.png" className="icon icon--tw" width="35" height="35" viewBox="0 0 20 16" fill="#1da1f2"
            aria-hidden="true" />
        </li>

        <li className="sn">
          <Link href="https://www.linkedin.com/company/remarkgroup" className="sn__link"  rel="noopener">
          </Link>
          <img src="/img/icons/twitter.png" className="icon icon--tw" width="35" height="35" viewBox="0 0 20 16"
            fill="#1da1f2" aria-hidden="true" />
        </li>
      </ul> */}
        </div>
      </footer>
    </>
  )
}
