// this colection it's just for displaying the collection and the prods compo 
import {Categories, Products} from "@pages/main"
function Collection() {


  return (
    <div className="md:grid md:grid-cols-12 gap-5 h-screen">
      <div className="md:col-span-3"><Categories/></div>

      <div className="md:col-span-9"><Products/></div>

    </div>
  )
}

export default Collection