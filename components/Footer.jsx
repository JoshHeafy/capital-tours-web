import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="row">
          <div className="col-6">
            <h2 className="footer__title">
              Capital Tours opera en toda la ciudad de Huancayo
            </h2>
          </div>
          <div className="footer-grid">
            <div className="fcol-2">
              <h3 className="ev-color-red">Recursos</h3>
              <ul>
                <li>
                  <Link href="/requisitos">Requisitos</Link>
                </li>
                <li>
                  <Link href="/descargas">Descargas</Link>
                </li>
              </ul>
            </div>
            <div className="fcol-4">
              <h3 className="ev-color-red">Consultorías</h3>
              <ul>
                <li>
                  <Link href="/servicios">Servicios</Link>
                </li>
                <li>
                  <Link href="/conductores">Conductores</Link>
                </li>
                <li>
                  <Link href="/consulta">Consultar datos</Link>
                </li>
              </ul>
            </div>
            <div className="fcol-5">
              <h3 className="ev-color-red">Nosotros</h3>
              <ul>
                <li>
                  <Link href="/nosotros">Quiénes Somos</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__sub ctn">
        <small className="subFooter__credits">
          <Link href="/" rel="noopener">
            <img
              src="/img/logo.png"
              className="logo logo--scor | db"
              width="200"
              viewBox="0 0 125 36"
              fill="#fff"
              aria-hidden="true"
            />
          </Link>
          © {currentYear} - Empresa Capital Tours. Todos los derechos
          reservados.
        </small>
      </div>
    </footer>
  );
}
