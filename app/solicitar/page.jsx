'use client'
import Footer from "@/components/Footer";
import { useState } from "react";

export default function page() {
  const [interaction, setInteraction] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const enviarSolicitud = (event) => {
    event.preventDefault();
    console.log(interaction);
  };

  return (
    <>
      <div className="contact_form">
        <div className="formulario">
          <h1 className="form_title">Registre su solicitud</h1>
          <h3 className="form_subtitle">Escríbenos y en breve los pondremos en contacto contigo</h3>
          <form onSubmit={enviarSolicitud}>
            <p>
              <label className="colocar_nombre">Apellidos y Nombres
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input_contact"
                type="text"
                value={interaction.nombre}
                onChange={(e) => setInteraction({ ...interaction, nombre: e.target.value })}
                required
                placeholder="Escribe tus Apellidos y Nombres" />
            </p>

            <p>
              <label className="colocar_email">Correo Electronico
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input_contact"
                type="email"
                value={interaction.email}
                onChange={(e) => setInteraction({ ...interaction, email: e.target.value })}
                required
                placeholder="Escribe tu Email" />
            </p>

            <p>
              <label className="colocar_telefono">Teléfono
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input_contact"
                type="tel"
                value={interaction.telefono}
                onChange={(e) => setInteraction({ ...interaction, telefono: e.target.value })}
                placeholder="Escribe tu teléfono" />
            </p>

            <p>
              <label className="colocar_asunto">Asunto
                <span className="obligatorio">*</span>
              </label>
              <input
                className="input_contact"
                type="text"
                value={interaction.asunto}
                onChange={(e) => setInteraction({ ...interaction, asunto: e.target.value })}
                required
                placeholder="Escribe un asunto" />
            </p>

            <p>
              <label className="colocar_mensaje">Mensaje
                <span className="obligatorio">*</span>
              </label>
              <textarea
                name="introducir_mensaje"
                className="input_mensaje"
                value={interaction.mensaje}
                onChange={(e) => setInteraction({ ...interaction, mensaje: e.target.value })}
                required
                placeholder="Deja aquí tu comentario..."></textarea>
            </p>
            <div className="container_button_contact">
              <button className="button-2" type="submit">
                <p>Enviar</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
