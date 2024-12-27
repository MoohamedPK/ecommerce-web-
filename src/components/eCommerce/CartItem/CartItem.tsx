import { IoMdTrash } from "react-icons/io"
import { TProducts } from "src/types"
import { increaseProdQuantity, decreaseProdQuantity, removeCartItem } from "@store/Cart/cartSlice"
import { useAppDispatch } from "@store/hooks"
import { memo } from "react"

type TCartItemProps = TProducts

  const CartItem =  memo(({title, img, price, quantity, id}: TCartItemProps) => {

  const dispatch = useAppDispatch()
  const handleIncreasing = () => {
    dispatch(increaseProdQuantity(id))
  }

  const handleDecreasing = () => {
    dispatch(decreaseProdQuantity(id))
  }

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(id))
  }

  return (
    <div className="flex items-center mb-10">
        <div className="">
            <img className="w-32" src={img} alt="pic" />
        </div>

        <div className="flex-1 ml-8">
            <div className="text-ellipsis  md:text-normal md:font-semibold mb-3"><h1>{title}</h1></div>

            <div className="flex justify-between">
              <div className="flex space-x-8 text-sm font-semibold">
                <p>${price}</p>
                <p>L</p>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex justify-center items-center px-2  size-5 bg-black hover:opacity-[0.7] text-white" onClick={handleIncreasing}>+</button>
                <p>{quantity}</p>
                <button className="flex justify-center items-center px-2  size-5 bg-black hover:opacity-[0.7] text-white" onClick={handleDecreasing}>-</button>
              </div>

                <div onClick={handleRemoveCartItem}>
                  <IoMdTrash size={24} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  )
})

export default CartItem