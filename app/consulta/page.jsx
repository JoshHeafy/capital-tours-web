"use client";
import { API } from "@/library/api";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyButton from "@/components/buttons/MyButton";
import MyInputPlaca from "@/components/inputs/MyInputPlaca";

export default function page() {
  const [numeroPlaca, setNumeroPlaca] = useState("");
  const [load, setLoad] = useState(false);
  const router = useRouter();

  const consultar = async () => {
    if (numeroPlaca.length == 0) {
      toast.warning("Ingrese su número de placa");
    } else {
      console.log(numeroPlaca);
      setLoad(true);
      const resp = await API(
        `propietarios/consulta-web/${numeroPlaca.toUpperCase()}`
      );
      if (resp.inscripcion) {
        console.log(resp);
        var data = JSON.stringify(resp);
        router.push(`/consulta/info?data=${data}`);
      } else {
        console.log("no bai");
        setLoad(false);
        setNumeroPlaca("");
      }
    }
  };

  return (
    <>
      <ToastContainer limit={3} />
      <div className="container-consulta">
        <div className="row-consulta">
          <div className="offset">
            <div>
              <h1>Consulta tu informacíon</h1>
            </div>
            <div className="panel panel-primary">
              <div className="panel-heading">Criterios de la búsqueda</div>
              <div className="panel-body">
                <div className="text-center divBotonesFiltro text-nowrap">
                  <div role="group" className="btn-group">
                    <button className="btn" type="button">
                      Numero de Placa
                    </button>
                  </div>
                </div>
                <form className="form-horizontal">
                  <div className="form-group divCriterioBusqueda">
                    <div
                      className="form-control divConsultaCampo"
                      id="consulta_por_documento"
                    >
                      <MyInputPlaca
                        value={numeroPlaca}
                        onChange={(value) => setNumeroPlaca(value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                    <div className="text-center">
                      <MyButton
                        name="Buscar"
                        type="button"
                        load={load}
                        onClick={() => consultar()}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-consulta">
          <p>
            <small>© 2023 CapitalTours Derechos Reservados</small>
          </p>
        </div>
      </div>
    </>
  );
}
