import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
    <div className="footer__inner">
      <div className="row">
        <div className="col-6">
          <h2 className="footer__title">
            Capital Tours opera en todo el mundo desde 17 oficinas centrales
          </h2>
          <div className="container-button">
            <Link className="footerNav__cta button-2" href="https://www.remarkgroup.com/es/contacto">
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
                  href="https://www.evaluandosoftware.com/directorio/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Directorio"
                  target="_blank">
                  Directorio
                </Link>
              </li>
              <li>
                <Link
                  href="https://recursos.evaluandosoftware.com/herramientas-de-software/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Herramientas"
                  target="_blank">
                  Herramientas
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/lectura/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Sala_de_Lectura"
                  target="_blank">
                  Sala de Lectura
                </Link>
              </li>
              <li>
                <Link
                  href="https://recursos.evaluandosoftware.com/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Centro_de_Recursos"
                  target="_blank">
                  Centro de Recursos
                </Link>
              </li>
            </ul>
          </div>
          <div className="fcol-3">
            <h3 className="ev-color-red">Guías</h3>
            <ul>
              <li>
                <Link
                  href="https://www.evaluandoerp.com/software-erp/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Sistemas_ERP"
                  target="_blank">
                  Sistemas ERP
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/software-a-medida/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Software_a_Medida"
                  target="_blank">
                  Software a Medida
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/servicio-consultoria/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Servicio_de_Consultoría"
                  target="_blank">
                  Servicio de Consultoría
                </Link>
              </li>
            </ul>
          </div>
          <div className="fcol-4">
            <h3 className="ev-color-red">Consultorías</h3>
            <ul>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/servicio-consultoria/software/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Software"
                  target="_blank">
                  Software
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/servicio-consultoria/procesos/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Procesos"
                  target="_blank">
                  Procesos
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/servicio-consultoria/empresarial/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Empresarial"
                  target="_blank">
                  Empresarial
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/servicio-consultoria/transformacion-digital/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Transformación_Digital"
                  target="_blank">
                  Transformación Digitald
                </Link>
              </li>
            </ul>
          </div>
          <div className="fcol-5">
            <h3 className="ev-color-red">Nosotros</h3>
            <ul>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/nosotros/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Quiénes_Somos"
                  target="_blank">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.evaluandosoftware.com/nosotros/contacto/?utm_source=footer_software&amp;utm_medium=footer_www.evaluandosoftware.com&amp;utm_campaign=footer_Contacto"
                  target="_blank">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="footer__sub ctn">
      <small className="subFooter__credits">
        <Link href="https://www.scor.com/" target="_blank" rel="noopener">
          <img src="/img/logo.png" className="logo logo--scor | db" width="125" viewBox="0 0 125 36" fill="#fff"
            aria-hidden="true" />
        </Link>
        Empresa Capital Tours. Todos los derechos reservados.
      </small>

      <ul className="subFooter__sn">
        <li className="sn">
          <Link href="https://twitter.com/remarkgroup" className="sn__link" target="_blank" rel="noopener">
            <span className="sr-only">Twitter</span>
          </Link>

          <img src="/img/icons/fb.png" className="icon icon--tw" width="35" height="35" viewBox="0 0 20 16" fill="#1da1f2"
            aria-hidden="true" />
        </li>

        <li className="sn">
          <Link href="https://www.linkedin.com/company/remarkgroup" className="sn__link" target="_blank" rel="noopener">
            <span className="sr-only">LinkedIn</span>
          </Link>
          <img src="/img/icons/twitter.png" className="icon icon--tw" width="35" height="35" viewBox="0 0 20 16"
            fill="#1da1f2" aria-hidden="true" />
        </li>
      </ul>
    </div>
  </footer>
    </>
  )
}
