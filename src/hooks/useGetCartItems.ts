import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetProductsByItems from "@store/Cart/action/actGetProductsByItems"

const useGetCartItems = () => {

  const dispatch = useAppDispatch()
  const {items,productFullInfo, error, loading} = useAppSelector(state => state.cart)

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems())

    return () => {
      promise.abort()
    }
  }, [dispatch])

  // we merge between the prodfullinfo and the items 
  const products = productFullInfo.map((prod) => ({...prod, quantity:items[prod.id]}))

    return {products, error, loading}
}

export default useGetCartItems;