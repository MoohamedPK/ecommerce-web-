import Product from "@components/eCommerce/product/Product"
import GridList from "@components/common/GridList/GridList"
import { TProducts } from "src/types"
import { useGetProducts } from "@hooks/useGetProducts"
import Pagination from "@components/eCommerce/pagination/Pagination"
import FiltredProducts from "@components/eCommerce/filterProducts/FiltredProducts"
import SubscribeOffer from "@components/eCommerce/subscribeOffer/SubscribeOffer";
import Heading from "@components/common/Heading/Heading"
import Loading from "@feedback/loading/Loading"

function Products() {

  const {currentProducts, params, records, prodsPerPage, setCurrentPage, currentPage, loading, error} = useGetProducts()
  
  return (
    <div>
      <Loading loading={loading} error={error}>

        <div className="flex justify-between items-center mb-8">
          <Heading title={'collection'} params={params.prefix}/>
          <div className="">
            {/* filter */}
            <FiltredProducts />
          </div>
        </div>
          
        <div className="md:grid md:grid-cols-12 md:ml-8 grid-cols-1 flex flex-col justify-center items-center gap-6">
          <GridList<TProducts> records={currentProducts} renderItems={(record) => <Product {...record}/> }/>
        </div> 

        <div className="pagination">
          <Pagination totalProducts={records.length} prodsPerPage={prodsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>

        <div >
            <SubscribeOffer/>
        </div>
        
      </Loading>
    </div>
  )
}
// md:grid md:grid-cols-3 grid-cols-1 flex flex-col justify-center items-center gap-6
export default Products