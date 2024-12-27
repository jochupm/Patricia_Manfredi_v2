import React, { useState } from "react";
import "/Users/josep/Web_Development/Patricia_Manfredi/style/Contacto.css"; // Importa los estilos

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/patricia@vestuariosballetpm.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("¡Mensaje enviado con éxito!");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus("Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      setStatus("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <div className="contacto-flex-grow-1">
    <div className="contacto-container">
      <h2 className="title">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="label">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="input"
        />
        <label className="label">Correo Electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />
        <label className="label">Mensaje</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          className="textarea"
        ></textarea>
        <button type="submit" className="button">
          Enviar
        </button>
      </form>
      <p className="status">{status}</p>
    </div>
    </div>
  );
};

export default Contacto;
