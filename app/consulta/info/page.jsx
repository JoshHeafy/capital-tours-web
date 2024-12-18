"use client";  // Marca este archivo como un componente de cliente

import { useRouter } from "next/navigation";
import MyButton from "@/components/buttons/MyButton";
import { toCapitalice } from "@/library/functions";

export default function Info() {
  const router = useRouter();
  const data = JSON.parse(sessionStorage.getItem("consultaData"));

  // Si no se encuentra la data en sessionStorage, redirige a la página de consulta
  if (!data) {
    router.push("/consulta");
    return null;
  }

  const { inscripcion, propietario, status_pago } = data;

  // Verificamos si "inscripcion.periodo" es un arreglo y tiene elementos
  const estado =
    inscripcion?.periodo?.length > 0
      ? inscripcion.periodo[0].estado === 1
        ? "ACTIVO"
        : inscripcion.periodo[0].estado === 0
        ? "TIENE UN PAGO PRÓXIMO"
        : "TIENE UN PAGO ATRASADO"
      : "Estado no disponible";  // Si no hay datos, mostramos un estado predeterminado

  // Verificación de colorEstado con los mismos criterios
  const colorEstado =
    inscripcion?.periodo?.length > 0
      ? inscripcion.periodo[0].estado === 1
        ? "#41f1b6"
        : inscripcion.periodo[0].estado === 0
        ? "#ffbb55"
        : "#ff7782"
      : "#ccc";  // Si no hay datos, asignamos un color neutro

  return (
    <div className="container-consulta">
      <h1>Detalles de la Consulta</h1>
      <div className="panel panel-primary">
        <div className="panel-body">
          <div className="list-group">
            <div className="list-group-item">
              <p><strong>Numero de Placa:</strong> {inscripcion.numero_placa.toUpperCase()}</p>
              <p><strong>Numero de Flota:</strong> {inscripcion.numero_flota}</p>
              <p><strong>Propietario:</strong> {toCapitalice(propietario.nombre_propietario)}</p>
              <p><strong>Estado del Servicio:</strong>
                <span style={{ background: colorEstado, color: "#fff", padding: "3px 10px" }}>
                  {estado}
                </span>
              </p>
              <p><strong>Monto a Pagar:</strong> S/. {inscripcion.importe}</p>
              <p><strong>Próxima Fecha de Pago:</strong> {status_pago.proximo_pago}</p>
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
  );
}
