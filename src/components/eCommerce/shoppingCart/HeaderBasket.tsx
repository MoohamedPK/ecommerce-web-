import Logo from "@assets/svg/shopping-bag-svgrepo-com.svg?react"
import { useAppSelector } from "@store/hooks"
import { getCartTotalQuantity } from "@store/Cart/cartSlice"

function HeaderBasket() {

  const itemsQuantity = useAppSelector(getCartTotalQuantity)

  return (
    <div className="relative">
      <Logo/>

      {itemsQuantity <= 0 ? '' : (
        <div className="absolute top-4 -right-1 bg-black w-5 h-5 text-xs font-semibold  rounded-full flex justify-center items-center"><span className="text-white">{itemsQuantity}</span></div>
      )}
    </div>
  )
}

export default HeaderBasket