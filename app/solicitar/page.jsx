import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <div className="contact_form">
        <div className="formulario">
          <h1 className="form_title">Registre su solicitud</h1>
          <h3 className="form_subtitle">Escríbenos y en breve los pondremos en contacto contigo</h3>
          <form>
            <p>
              <label className="colocar_nombre">Apellidos y Nombres
                <span className="obligatorio">*</span>
              </label>
              <input className="input_contact" type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                placeholder="Escribe tus Apellidos y Nombres" />
            </p>

            <p>
              <label className="colocar_email">Correo Electronico
                <span className="obligatorio">*</span>
              </label>
              <input className="input_contact" type="email" name="introducir_email" id="email" required="obligatorio"
                placeholder="Escribe tu Email" />
            </p>

            <p>
              <label className="colocar_telefono">Teléfono
                <span className="obligatorio">*</span>
              </label>
              <input className="input_contact" type="tel" name="introducir_telefono" id="telefono"
                placeholder="Escribe tu teléfono" />
            </p>

            <p>
              <label className="colocar_asunto">Asunto
                <span className="obligatorio">*</span>
              </label>
              <input className="input_contact" type="text" name="introducir_asunto" id="assunto" required="obligatorio"
                placeholder="Escribe un asunto" />
            </p>

            <p>
              <label className="colocar_mensaje">Mensaje
                <span className="obligatorio">*</span>
              </label>
              <textarea name="introducir_mensaje" className="input_mensaje" id="mensaje" required="obligatorio"
                placeholder="Deja aquí tu comentario..."></textarea>
            </p>
            <div className="container_button_contact">
              <button className="button-2" type="submit" name="enviar_formulario" id="enviar">
                <p>Enviar</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}
