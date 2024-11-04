import { Link } from "react-router-dom"

function Cursos(item) {


  return (
    <div className="flex flex-col max-w-sm p-6 overflow-hidden rounded bg-slate-500">
      <img src={item.Imagen} alt="IMAGE" className="w-full" width="128" height="128" />
 <b>{item.name}</b>
        <p className="text-justify"><b>Price:</b> ${item.price}</p>
         <p> <Link
            className="font-bold hover:text-pink-500"
            to={`/item/${item.id}`}
          >
            Details
          </Link>
          </p>
      </div>
  );
}

export default Cursos;


