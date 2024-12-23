import { useAppSelector } from "@store/hooks"
import { TProducts } from "src/types"
import GridList from "@components/common/GridList/GridList"
import ProductInfo from "@components/eCommerce/productInfo/ProductInfo"

function ProductDetails() {

  const {records} = useAppSelector(state => state.products)

  return (
    <div>
        <GridList<TProducts> records={records} renderItems={(record) => <ProductInfo {...record}/> }/>
    </div>
  )
}

export default ProductDetails