import React from "react";
import { Link } from "react-router-dom";

function Cursos({ id, name, price, Imagen, description }) {
  return (
    <div className="flex flex-col max-w-sm p-6 overflow-hidden rounded-lg shadow-lg bg-white">
      {/* Imagen del curso */}
      <div className="flex justify-center mb-4">
        <img
          src={Imagen}
          alt={name}
          className="object-cover w-full h-40 rounded-md"
        />
      </div>

      {/* Contenido del curso */}
      <div className="flex flex-col items-start space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        <p className="text-lg font-bold text-indigo-600">
          Precio: ${price.toFixed(2)}
        </p>

        {/* Botón de detalles */}
        <Link
          to={`/item/${id}`}
          className="px-4 py-2 mt-2 text-sm font-semibold text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}

export default Cursos;



