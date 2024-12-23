import CartItems from "@components/eCommerce/CartItems/CartItems"
import CartSubtotalPrice from "@components/eCommerce/cartSubtotalPrice/CartSubtotalPrice"


function Cart() {
  return (
    <div className="flex flex-col">
        <CartItems/>
        <CartItems/>
        <CartItems/>
        <CartItems/>

        <div className="flex justify-end ">
          <CartSubtotalPrice/>
        </div>
    </div>
  )
}

export default Cart