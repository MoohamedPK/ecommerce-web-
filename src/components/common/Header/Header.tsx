// import ShoppingCart from "@assets/svg/cart.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@assets/logo/logo.png"
import menu from "@assets/icons/menu_icon.png"
// import { MdSearch } from "react-icons/md"
import HeaderBasket from "@components/eCommerce/shoppingCart/HeaderBasket";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleMenuButton = () => {
    setIsOpen(!isOpen);
  }

  const handelBackButton = () => {
    setIsOpen(!isOpen)
  }

  // when the location of the path is changing the menu with be hidden
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="mb-14">

      <div className="flex flex-col">
        <div className="flex justify-between">
          
          <div className="logo"><img className="w-32" src={logo} alt="" /></div>

            <div className="linksList hidden md:block">
              <div className="text-[13px] font-semibold">
                <NavLink className="p-2 mx-2" to="/">HOME</NavLink>
                <NavLink className="p-2 mx-2" to="collection">COLLECTION</NavLink>
                <NavLink className="p-2 mx-2" to="about">ABOUT</NavLink>
                <NavLink className="p-2 mx-2" to="contact">CONTACT</NavLink>
                <NavLink className="p-2 mx-2" to="product">PRODUCTS</NavLink>
              </div>
            </div>

            <div className="flex items-center">
                <div className="flex items-center carticon mx-5">
                  {/* icon here */}
                  {/* <MdSearch size={30} className="mr-4 cursor-pointer"/> */}
                  <div className="cursor-pointer" onClick={() => {navigate("/cart")}}>
                    <HeaderBasket/>
                  </div>
                </div>

                <div className="menu md:hidden">
                  <div className="menu w-7 cursor-pointer"  onClick={handleMenuButton}><img src={menu} alt="" /></div>

                  {isOpen && (
                    <div className="text-sm text-neutral-500 font-semibold flex flex-col z-50 absolute left-0 top-0 bg-white w-full h-screen text-center gap-y-5">
                      <a className="p-2  hover:bg-black hover:text-white transition-all duration-200" href="" onClick={handelBackButton}>BACK</a>
                      <NavLink  className="p-2 mx-2  hover:bg-black hover:text-white transition-all duration-200" to="/" >HOME</NavLink>
                      <NavLink  className="p-2 mx-2 hover:bg-black hover:text-white transition-all duration-200" to="collection">COLLECTION</NavLink>
                      <NavLink  className="p-2 mx-2 hover:bg-black hover:text-white transition-all duration-200" to="about">ABOUT</NavLink>
                      <NavLink  className="p-2 mx-2 hover:bg-black hover:text-white transition-all duration-200" to="contact">CONTACT</NavLink>
                      <NavLink  className="p-2 mx-2 hover:bg-black hover:text-white transition-all duration-200" to="product">PRODUCTS</NavLink>
                    </div>
                  )}
                </div>
            </div>
        </div>

          
      </div>
    </header>
  )
}

export default Header