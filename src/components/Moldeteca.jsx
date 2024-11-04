import { Link } from "react-router-dom"

function Moldeteca(moldeteca) {


  return (
    <div className="flex flex-col max-w-sm p-6 overflow-hidden rounded bg-slate-500">
      <img src={moldeteca.Imagen} alt="IMAGE" className="w-full" width="128" height="128" />
 <b>{moldeteca.description}</b>
        <p className="text-justify"><b>Price:</b> ${moldeteca.price}</p>
         <p> <Link
            className="font-bold hover:text-pink-500"
            to={`/moldeteca/${moldeteca.id}`}
          >
            Details
          </Link>
          </p>
      </div>
  );
}

export default Moldeteca;


