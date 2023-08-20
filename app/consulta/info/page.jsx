"use client";
import MyButton from "@/components/buttons/MyButton";
import { toCapitalice } from "@/library/functions";
import { useSearchParams, useRouter } from "next/navigation";
export default function info() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("data");
  const data = JSON.parse(search);

  const inscripcion = data.inscripcion;
  const periodo = data.periodo_inscripcion;
  const propietario = data.propietario;
  const status_pago = data.status_pago;

  const estado =
    periodo[0].estado == 1
      ? "ACTIVO"
      : periodo[0].estado == 0
      ? "TIENE UN PAGO PRÓXIMO"
      : "TIENE UN PAGO ATRASADO";
  const colorEstado =
    periodo[0].estado == 1
      ? "#41f1b6"
      : periodo[0].estado == 0
      ? "#ffbb55"
      : "#ff7782";

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
                      <p className="item-heading">
                        {inscripcion.numero_placa.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Numero de Flota:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">{inscripcion.numero_flota}</p>
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
                        {toCapitalice(propietario.nombre_propietario)}
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
                      <span
                        className="status-mark"
                        style={{
                          background: colorEstado,
                        }}
                      >
                        {estado}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Monto a pagar:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">S/. {inscripcion.importe}</p>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="row-col">
                      <p className="item-heading">Próxima fecha de pago:</p>
                    </div>
                    <div className="row-col">
                      <p className="item-heading">{status_pago.proximo_pago}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-container">
              <MyButton
                black={true}
                name="Regresar"
                type="button"
                onClick={() => router.push("/consulta")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
