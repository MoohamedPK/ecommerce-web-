
function CartSubtotalPrice() {
  return (
    <div className="mt-10 md:w-1/3 space-y-8 p-4 text-sm font-medium">
        <div className="flex justify-between items-center">
            <h3>subtotal</h3>
            <span>90</span>
        </div>

        <div className="flex justify-between items-center">
            <h3>shipping free</h3>
            <span>990</span>
        </div>

        <div className="flex justify-between items-center font-bold">
            <h3>total</h3>
            <span>010</span>
        </div>

        <div className="flex justify-end text-white"><button className="bg-black px-4 py-2">PROCEED TO CHECKOUT</button></div>
    </div>
  )
}

export default CartSubtotalPrice