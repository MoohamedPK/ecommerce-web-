import Logo from "@assets/svg/shopping-bag-svgrepo-com.svg?react"

function HeaderBasket() {
  return (
    <div className="relative">
      <Logo/>

      <div className="absolute top-4 -right-1 bg-black w-5 h-5 text-xs font-semibold  rounded-full flex justify-center items-center"><span className="text-white">8</span></div>
    </div>
  )
}

export default HeaderBasket