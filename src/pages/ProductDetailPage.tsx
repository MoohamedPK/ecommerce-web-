import GridList from "@components/common/GridList/GridList"
import ProductDetail from "@components/eCommerce/productDetail/ProductDetail"
import Loading from "@feedback/loading/Loading"
import { useAppSelector } from "@store/hooks"

function ProductDetailPage() {

    const {records, error, loading} = useAppSelector(state => state.products)

  return (
    <div>
      <Loading loading={loading} error={error}>
        <GridList records={records} renderItems={(record) => <ProductDetail {...record}/>}/>
      </Loading>
    </div>
  )
}

export default ProductDetailPage