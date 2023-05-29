import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="container-consulta">
        <div className="row-consulta">
          <div className="offset">
            <div>
              <h1>Consulta tu información</h1>
            </div>
            <div className="panel panel-primary">
              <div className="panel-heading">Criterios de la búsqueda</div>
              <div className="list-group">
                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Numero de Placa:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">20605480251</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Fecha de inscripción:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">06/11/2019</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Fecha de inicio de actividades:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">01/01/2020</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Nombre del propietario:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading"> 73678929 - DE LA CRUZ SANTIAGO JUAN MANUEL</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Nombre del conductor:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">DE LA CRUZ SANTIAGO JUAN MANUEL</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Estado del servicio:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">ACTIVO</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Número de flota:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">202</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item activo">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Pagos:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">Al día con los pagos de sus tributos</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item noactivo">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Pagos:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">No esta al dia con sus tributos</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Proximo Pago:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">04/08/2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <Link href="/" className="btn-back">
                Regresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
