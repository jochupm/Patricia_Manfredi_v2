import { Link } from "react-router-dom"

function merceria(merceria) {
  return (
    <div
    className="flex flex-col max-w-sm p-6 overflow-hidden rounded bg-slate-500">
      <img src="" alt="Imagen" width="32" height="32"/>
      <div >
        <div className="mb-2 text-xl font-bold">{merceria.name}</div>
        <p>Price: ${merceria.price}</p>
      </div>

        <Link className="items-center w-auto p-2 mx-2 my-2 text-center bg-orange-300 rounded-full hover:bg-orange-400" to={`/item/${item.id}`}>Details</Link>
    </div>
  )
}

export default merceria