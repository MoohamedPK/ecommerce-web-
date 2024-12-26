import { TProducts } from "src/types"

type TCartSubtotalPriceProps = {products: TProducts[]}

function CartSubtotalPrice({products}:TCartSubtotalPriceProps) {

  const subTotal = products.reduce((acc, curr) => {
    const price = curr.price;
    const quantity = curr.quantity as number;
    return acc + price * quantity
  }, 0)

  const shippingFee = 10.00;
  const total = subTotal + shippingFee


  return (
    <div className="mt-10 md:w-1/3 space-y-8 p-4 text-sm font-medium tracking-widest">
      <div className="font-semibold text-xl">Cart Total</div>
      
        <div className="flex justify-between items-center ">
            <h3>Subtotal</h3>
            <span>${subTotal}</span>
        </div>

        <div className="flex justify-between items-center">
            <h3>Shipping fee</h3>
            <span>${shippingFee}</span>
        </div>

        <div className="flex justify-between items-center font-bold">
            <h3>Total</h3>
            <span>${total}</span>
        </div>

        <div className="flex justify-end text-white"><button className="bg-black px-4 py-2 hover:bg-gray-400 hover:text-black transition hover:scale-105">PROCEED TO CHECKOUT</button></div>
    </div>
  )
}

export default CartSubtotalPrice