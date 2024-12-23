import CartSubtotalPrice from "@components/eCommerce/cartSubtotalPrice/CartSubtotalPrice"
import CartItemsList from "@components/eCommerce/cartItemsList/CartItemsList"

import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetProductsByItems from "@store/Cart/action/actGetProductsByItems"

function Cart() {

  const dispatch = useAppDispatch()
  const {items,productFullInfo, error, loading} = useAppSelector(state => state.cart)

  useEffect(() => {
    dispatch(actGetProductsByItems())
  }, [dispatch])

  // we merge between the prodfullinfo and the items 
  const products = productFullInfo.map((prod) => ({...prod, quantity:items[prod.id]}))

  return (
    <div className="flex flex-col">
        <CartItemsList products={products}/>
        
        <div className="md:flex md:justify-end ">
          <CartSubtotalPrice/>
        </div>
    </div>
  )
}

export default Cart