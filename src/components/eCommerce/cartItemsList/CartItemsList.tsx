import CartItem from "../CartItem/CartItem"
import { TProducts } from "src/types"

type TCartItemsListProps = {products: TProducts[]}

function CartItemsList({products}:TCartItemsListProps) {

    const renderList = products.map((prod) => <CartItem key={prod.id} {...prod}/>)

  return (
    <div>{renderList}</div>
  )
}

export default CartItemsList