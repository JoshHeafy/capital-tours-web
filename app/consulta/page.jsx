"use client";  // Marca este archivo como un componente de cliente

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyButton from "@/components/buttons/MyButton";
import MyInputPlaca from "@/components/inputs/MyInputPlaca";
import { API } from "@/library/api";

export default function Page() {
  const [numeroPlaca, setNumeroPlaca] = useState("");
  const [load, setLoad] = useState(false);
  const router = useRouter();

  const consultar = async () => {
    if (numeroPlaca.length === 0) {
      toast.warning("Ingrese su número de placa.");
      return;
    }

    setLoad(true);  // Mostrar el estado de carga
    try {
      const resp = await API(`propietarios/consulta-web/${numeroPlaca.toUpperCase()}`);

      if (resp.inscripcion) {
        // Guardamos los datos en sessionStorage
        sessionStorage.setItem("consultaData", JSON.stringify(resp));
        router.push("/consulta/info");
      } else {
        toast.error("No se encontraron resultados para esta placa.");
      }
    } catch (error) {
      toast.error("Hubo un error al realizar la consulta.");
    } finally {
      setLoad(false);  // Quitar el estado de carga
    }
  };

  return (
    <>
      <ToastContainer limit={3} />
      <div className="container-consulta">
        <h1 className="title">Consulta tu información</h1>
        <div className="panel panel-success">
          <div className="panel-heading">Criterios de la búsqueda</div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <MyInputPlaca
                  value={numeroPlaca}
                  onChange={(value) => setNumeroPlaca(value)}
                  placeholder="Ingrese el número de placa"
                  className="input-placa"
                />
              </div>
              <div className="form-group text-center">
                <MyButton
                  name="Buscar"
                  type="button"
                  load={load}
                  onClick={consultar}
                  className="btn-search"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="footer-consulta">
          <p>
            <small>© 2023 CapitalTours Derechos Reservados</small>
          </p>
        </div>
      </div>

      {/* Estilos Inline */}
      <style jsx>{`
        .container-consulta {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: #f8f9fa;
          min-height: 100vh;
        }

        .title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #343a40;
          margin-bottom: 30px;
          text-align: center;
        }

        .panel {
          width: 100%;
          max-width: 600px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .panel-heading {
          background: #4CE5B1;
          color: white;
          padding: 20px;
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
          font-weight: bold;
          font-size: 1.5rem;
          text-align: center;
        }

        .panel-body {
          padding: 20px;
        }

        .input-placa {
          width: 100%;
          padding: 18px;
          border: 2px solid #4CE5B1;
          border-radius: 50px;
          font-size: 1.3rem;
          color: #333;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .input-placa:focus {
          outline: none;
          border-color: #3bb69b;
          background-color: white;
          box-shadow: 0 4px 12px rgba(59, 182, 155, 0.4);
        }

        .input-placa::placeholder {
          color: #888;
          font-style: italic;
        }

        .btn-search {
          background-color: #4CE5B1;
          color: white;
          font-size: 1.4rem;
          padding: 16px;
          border-radius: 50px;
          width: 100%;
          cursor: pointer;
          border: none;
          transition: background-color 0.3s, transform 0.2s ease-in-out;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .btn-search:hover {
          background-color: #3bb69b;
          transform: scale(1.05);
        }

        .btn-search:active {
          transform: scale(1);
        }

        .footer-consulta {
          text-align: center;
          margin-top: 30px;
          color: #555;
        }

        .footer-consulta small {
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .container-consulta {
            padding: 20px;
          }

          .panel {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
