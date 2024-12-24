import CartSubtotalPrice from "@components/eCommerce/cartSubtotalPrice/CartSubtotalPrice"
import CartItemsList from "@components/eCommerce/cartItemsList/CartItemsList"

import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetProductsByItems from "@store/Cart/action/actGetProductsByItems"
import { Link } from "react-router-dom"

function Cart() {

  const dispatch = useAppDispatch()
  const {items,productFullInfo, error, loading} = useAppSelector(state => state.cart)

  useEffect(() => {
    dispatch(actGetProductsByItems())
  }, [dispatch])

  // we merge between the prodfullinfo and the items 
  const products = productFullInfo.map((prod) => ({...prod, quantity:items[prod.id]}))

  return (
      <div>
        {products.length ? (
          <div className="flex flex-col">
            <CartItemsList products={products}/>
        
            <div className="md:flex md:justify-end ">
            <CartSubtotalPrice products={products}/>
        </div>
    </div>
        ): (
          <div className="flex justify-center items-center text-center flex-col mt-32 font-semibold space-y-5">
            <h1>Your Cart Is Currently Empty</h1>
            <p className="text-sm font-normal text-gray-500 leading-6">Before proceed to checkout you must add some products to your shopping cart.<br></br>
              You will find a lot of interesting productson our "Shop" page.
            </p>
            <Link to={'/collection'}>
              <button className="bg-black text-white text-xs md:text-sm md:py-3 md:px-5 px-2 py-2 hover:bg-gray-400 hover:text-black transition hover:scale-105">Return To Shop</button>
            </Link>
          </div>
        )}
      </div>
    
  )
}

export default Cart