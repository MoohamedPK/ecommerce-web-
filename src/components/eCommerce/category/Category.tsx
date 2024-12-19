import { Link } from "react-router-dom"
import { TCategory } from "src/types"

function Category({prefix, title, id}:TCategory) {

  return (
      <>
          <Link className=" my-1 text-sm md:hover:text-white md:hover:bg-black md:px-2 md:py-1 md:rounded-lg md:transition duration-300" key={id} to={`/collection/${prefix}`}>{title}</Link>
      </>
  )
}

export default Category