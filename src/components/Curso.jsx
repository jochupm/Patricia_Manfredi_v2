import { Link } from "react-router-dom";


function Curso(curso) {
return (
  <div className="flex flex-col max-w-sm p-6 overflow-hidden rounded bg-slate-500">
    <img src={curso.Imagen} alt="IMAGE" className="w-full" width="128" height="128" />
{/* <b>{curso.category}</b> */}
<b>{curso.name}</b>
      <p className="text-justify"><b>Precio:</b> ${curso.price}</p>
       <p> <Link
          className="font-bold hover:text-pink-500"
          to={`/cursos/${curso.id}`}
        >
          Más detalles
        </Link>
        </p>
    </div>
);
}


export default Curso;



