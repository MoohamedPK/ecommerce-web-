import { IoMdTrash } from "react-icons/io"
function CartItems() {
  return (
    <div className="flex items-center mb-10">
        <div className="">
            <img src="" alt="pic" />
        </div>

        <div className="flex-1 ml-8">
            <div className="text-ellipsis text-sm md:text-normal md:font-semibold"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1></div>

            <div className="flex justify-between">
              <div className="flex space-x-8">
                <p>$100</p>
                <p>L</p>
              </div>
                <input className="border border-black w-[60px]" type="number" name="" id="" />
                <IoMdTrash size={24} className="cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}

export default CartItems