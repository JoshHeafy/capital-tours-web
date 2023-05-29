'use client'
import Link from "next/link";
import { useState } from "react"

export default function page() {
  const [interaction, setInteraction] = useState({
    placa: true,
    documento: false
  });

  function switchPlaca() {
    setInteraction({ ...interaction, placa: interaction.placa = false });
    setInteraction({ ...interaction, documento: interaction.documento = true });
  }
  function switchDocumento() {
    setInteraction({ ...interaction, placa: interaction.placa = true });
    setInteraction({ ...interaction, documento: interaction.documento = false });
  }

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
                    <button className="btn" type="button" onClick={() => switchDocumento()}>
                      Por Placa
                    </button>
                    <button className="btn" type="button" onClick={() => switchPlaca()}>
                      Por Documento
                    </button>
                  </div>
                </div>
                <form className="form-horizontal" id="form01">
                  <div className="form-group divCriterioBusqueda">
                    <div className="offset divConsultaCampo" id="consulta_por_placa"
                      style={{ display: interaction.placa ? 'inline-block' : 'none' }}>
                      <input type="tel" className="form-control" id="txtRuc" name="search1" placeholder="Ingrese numero de placa"
                        pattern="([0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9]|[0-9])" tabindex="1" />
                      {/* maxlength="11" */}
                    </div>
                    <div className="form-control divConsultaCampo" id="consulta_por_documento"
                      style={{ display: interaction.documento ? 'inline-block' : 'none' }}>
                      <select name="tipdoc" className="form-control">
                        <option value="1" selected="">Documento Nacional de Identidad</option>
                        <option value="4">Carnet de Extranjeria</option>
                        <option value="7">Pasaporte</option>
                        <option value="A">Ced. Diplomática de Identidad</option>
                      </select>
                      <label>
                        <input className="form-control" type="text" id="cat1" required="true" />
                      </label>
                      <p id="total"></p>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12 text-center">
                      <Link href="/consultainfo" className="btn btn-primary">Buscar</Link>
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
