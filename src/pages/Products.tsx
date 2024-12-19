import Product from "@components/eCommerce/product/Product"
import GridList from "@components/common/GridList/GridList"
import { TProducts } from "src/types"
import { useGetProducts } from "@hooks/useGetProducts"
import Pagination from "@components/eCommerce/pagination/Pagination"
import FiltredProducts from "@components/eCommerce/filterProducts/FiltredProducts"
import SubscribeOffer from "@components/eCommerce/subscribeOffer/SubscribeOffer";
import { useState } from "react"
// import SearchBar from "@components/eCommerce/searchBar/SearchBar"

function Products() {

  const {currentProducts, params, records, prodsPerPage, setCurrentPage, currentPage} = useGetProducts()
  const [query, setQuery] = useState<string | null>('')
  
  const handleChangedValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className="">

      <div className="flex flex-1 justify-center mt-8">
        <label className="">
            <input onChange={handleChangedValue} className=" border rounded-full text-sm font-semibold border-black outline-none px-2 py-1 w-[300px] md:w-[500px]" type="search" />
        </label>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <div className=" md:text-2xl text-sm">
          {params.prefix ? (
            <h1 className=" text-gray-400 font-semibold"><span className="capitalize text-black font-semibold">{params.prefix}</span> Collection</h1>
          ) : (
            <h1 className="font-semibold">All Collection</h1>
          )}
        </div>
        <div className="">
          {/* filter */}
          <FiltredProducts />
        </div>
      </div>
        
      <div className="md:grid md:grid-cols-12 md:ml-8 grid-cols-1 flex flex-col justify-center items-center gap-6">
        <GridList<TProducts> inputValue={query} records={currentProducts} renderItems={(record) => <Product {...record}/> }/>
      </div> 

      <div className="pagination">
        <Pagination totalProducts={records.length} prodsPerPage={prodsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>

      <div >
          <SubscribeOffer/>
      </div>
      
    </div>
  )
}
// md:grid md:grid-cols-3 grid-cols-1 flex flex-col justify-center items-center gap-6
export default Products