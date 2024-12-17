"use client";
import Footer from "@/components/Footer";
import MyButton from "@/components/buttons/MyButton";
import MyInput from "@/components/inputs/MyInput";
import MyInputNumber from "@/components/inputs/MyInputNumber";
import { API } from "@/library/api";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { newDataGenerate } from "@/library/functions";

export default function page() {
  const [formIdCreate, setFormIdCreate] = useState("");
  const [load, setLoad] = useState(false);
  const [interaction, setInteraction] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [visibleError1, setVisibleError1] = useState(false);
  const [visibleError2, setVisibleError2] = useState(false);
  const [visibleError3, setVisibleError3] = useState(false);

  const enviarSolicitud = async (e) => {
    e.preventDefault();
    if (!visibleError1 && !visibleError2 && !visibleError3) {
      setLoad(true);
      const result = newDataGenerate(formIdCreate);
      if (result.status) {
        await API("solicitudes/create", {
          data: result.data,
          method: "POST",
        })
          .then((resp) => {
            setInteraction({
              nombre: "",
              email: "",
              telefono: "",
              asunto: "",
              mensaje: "",
            });
            setLoad(false);
            toast.success("Su solicitud se envió correctamente");
          })
          .catch((resp) => {
            setInteraction({
              nombre: "",
              email: "",
              telefono: "",
              asunto: "",
              mensaje: "",
            });
            setLoad(false);
          });
      }
    } else {
      toast.warning("Tiene errores en los inputs!");
    }
  };

  const verifyNombre = (val) => {
    if (val.length < 10) {
      setVisibleError1(true);
    } else {
      setVisibleError1(false);
    }
  };

  const verifyMensaje = (val) => {
    if (val.length < 10) {
      setVisibleError2(true);
    } else {
      setVisibleError2(false);
    }
  };

  const verifyAsunto = (val) => {
    if (val.length < 4) {
      setVisibleError3(true);
    } else {
      setVisibleError3(false);
    }
  };

  useEffect(() => {
    setFormIdCreate("id_" + uuidv4());
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="contact_form">
        <div className="formulario">
          <h1 className="form_title">Formulario de Comentarios y Consultas</h1>
          <h3 className="form_subtitle">
            Escríbenos y en breve los pondremos en contacto contigo
          </h3>
          <form onSubmit={enviarSolicitud} id={formIdCreate}>
            <MyInput
              title="Apellidos y Nombres"
              _key="nombre"
              placeholder="Escribe tus Apellidos y Nombres"
              value={interaction.nombre}
              required={true}
              onChange={(e) => {
                setInteraction({ ...interaction, nombre: e.target.value });
                verifyNombre(e.target.value);
              }}
            />
            {visibleError1 && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Escriba un nombre más largo!
              </p>
            )}
            <br />
            <MyInput
              title="Correo Electronico"
              _key="email"
              type="email"
              placeholder="Escribe tu Email"
              value={interaction.email}
              required={true}
              onChange={(e) =>
                setInteraction({ ...interaction, email: e.target.value })
              }
            />
            <br />
            <MyInputNumber
              title="Teléfono"
              _key="telefono"
              placeholder="Escribe tu teléfono"
              value={interaction.telefono}
              max={9}
              required={true}
              onChange={(value) =>
                setInteraction({ ...interaction, telefono: value })
              }
            />
            <br />
            <MyInput
              title="Asunto"
              _key="asunto"
              placeholder="Escribe un asunto"
              value={interaction.asunto}
              required={true}
              onChange={(e) => {
                setInteraction({ ...interaction, asunto: e.target.value });
                verifyAsunto(e.target.value);
              }}
            />
            {visibleError3 && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Escriba un asunto más largo!
              </p>
            )}
            <br />
            <MyInput
              title="Mensaje"
              _key="mensaje"
              placeholder="Deja aquí tu comentario..."
              value={interaction.mensaje}
              textArea={true}
              required={true}
              onChange={(e) => {
                setInteraction({ ...interaction, mensaje: e.target.value });
                verifyMensaje(e.target.value);
              }}
            />
            {visibleError2 && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Escriba un mensaje más largo!
              </p>
            )}
            <div className="container_button_contact">
              <MyButton name="Solicitar" load={load} black={true} />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
