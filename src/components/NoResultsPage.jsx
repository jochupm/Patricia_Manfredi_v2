import { Link } from "react-router-dom"

const NoResultPage = () => {
  return (
    <div className="flex flex-col w-full text-center">
        <h1>No results for the product searched. Please try againg</h1>
        <Link className="items-center w-auto p-2 mx-2 my-2 text-center bg-orange-300 rounded-full" to={'/category/'}>
            Go to Products List
        </Link>
    </div>
  )
}

export default NoResultPage