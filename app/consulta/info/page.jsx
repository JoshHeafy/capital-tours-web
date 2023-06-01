'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function info() {
  const searchParams = useSearchParams();
  const search = searchParams.get('data');
  const data = JSON.parse(search);

  const estado = data.estado == 1 ? 'ACTIVO' : data.estado == 0 ? 'INACTIVO' : '';

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
                      <p className="item-heading">{data.placa.toUpperCase()}</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Fecha de inscripción:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">{data.periodo}</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Propietario:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">
                        {data.numerodocumento} - {data.nombrepropietario.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Estado del servicio:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">{estado}</p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Fecha de próximo pago:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">
                       
                      </p>
                    </div>
                  </div>
                </div>

                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Monto:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">
                       
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="list-group-item activo">
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
                </div> */}
              </div>
            </div>
            <div className="btn-container">
              <Link href="/consulta" className="btn-back">
                Regresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
