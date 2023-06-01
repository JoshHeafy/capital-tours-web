'use client'
import { API } from "@/library/api";
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation";

export default function page() {
  const [alertaError, setAlertaError] = useState(false);
  const [interaction, setInteraction] = useState({
    placa: false,
    documento: true
  });
  const [documentoValue, setDocumentoValue] = useState("");
  const router = useRouter();


  function switchPlaca() {
    setInteraction({ ...interaction, placa: interaction.placa = false });
    setInteraction({ ...interaction, documento: interaction.documento = true });
  }
  function switchDocumento() {
    setInteraction({ ...interaction, placa: interaction.placa = true });
    setInteraction({ ...interaction, documento: interaction.documento = false });
  }

  const consultar = async (event) => {
    event.preventDefault();

    try {
      const resp = await API(`propietarios/info/${documentoValue}`);
      if (resp.detalleInscripcion.placa) {
        console.log(resp);
        var data = JSON.stringify(resp.detalleInscripcion);
        router.push(`/consulta/info?data=${data}`);
      } else {
        setAlertaError(true);
      }
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <>
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
                    {/* <button className="btn" type="button" onClick={() => switchDocumento()}>
                      Por Placa
                    </button> */}
                    <button className="btn" type="button" onClick={() => switchPlaca()}>
                      Documento(DNI)
                    </button>
                  </div>
                </div>
                <form className="form-horizontal" id="form01" onSubmit={consultar}>
                  <div className="form-group divCriterioBusqueda">
                    {/* <div className="offset divConsultaCampo" id="consulta_por_placa"
                      style={{ display: interaction.placa ? 'inline-block' : 'none' }}>
                      <input
                        type="tel"
                        className="form-control"
                        id="txtRuc"
                        name="search1"
                        placeholder="Ingrese numero de placa"
                        value={placaValue}
                        onChange={(e) => setPlacaValue(e.target.value)}
                      />
                    </div> */}
                    <div className="form-control divConsultaCampo" id="consulta_por_documento"
                      style={{ display: interaction.documento ? 'inline-block' : 'none' }}>
                      {/* <select name="tipdoc" className="form-control" defaultValue='1'>
                        <option value="1">Documento Nacional de Identidad</option>
                        <option value="4">Carnet de Extranjeria</option>
                        <option value="7">Pasaporte</option>
                        <option value="A">Ced. Diplomática de Identidad</option>
                      </select> */}
                      <input
                        className="form-control"
                        type="text"
                        id="cat1"
                        required
                        value={documentoValue}
                        onChange={(e) => setDocumentoValue(e.target.value)}
                      />
                      {alertaError && <div style={{ color: 'red' }}>
                        <p>Cliente no encontrado</p>
                      </div>}
                      <p id="total"></p>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12 text-center">
                      <button
                      type="submit"
                        // onClick={() => consultar()}
                        className="btn btn-primary">
                        Buscar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-consulta">
          <p><small>© 2023 CapitalTours Derechos Reservados</small></p>
        </div>
      </div>
    </>
  )
}
