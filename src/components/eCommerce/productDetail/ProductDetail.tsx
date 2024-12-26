import { TProducts } from "src/types"
import { addToCart } from "@store/Cart/cartSlice"
import { useAppDispatch } from "@store/hooks"

type TpProductDetailProps = TProducts
function ProductDetail({img, title, price, id}:TpProductDetailProps) {

    const dispatch = useAppDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(id))
    }

  return (
    <div>
        <div className="md:flex md:space-x-5 md:space-y-0 space-y-5 space-x-0 grid border border-black px-10 py-8 rounded-lg mb-24">
            <div className="img_product md:w-1/2 w-fit flex items-center justify-center rounded-lg">
                <img className="" src={img} alt="" />
            </div>

            <div className="details px-10 py-8 space-y-6 md:items-start md:text-left">
                <div>

                    <h1 className="text-2xl font-semibold mb-6">{title}</h1>
                    <span className="font-semibold text-xl">${price}</span>
                    <p className="md:w-[500px] w-fit text-gray-500 text-sm font-medium leading-7">A lightweight, usually knitted, pullover shirt, close-fitting and with 
                        a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
                </div>

                <div className="sizes text-sm font-semibold w-1/3">
                    <p className="">Select Size</p>
                    <div className="flex justify-around mt-5">
                        <span className=" px-4 py-3 border border-black hover:-translate-y-1 transition duration-200">S</span>
                        <span className=" px-4 py-3 border border-black hover:-translate-y-1 transition duration-200">M</span>
                        <span className=" px-4 py-3 border border-black hover:-translate-y-1 transition duration-200">L</span>
                        <span className=" px-4 py-3 border border-black hover:-translate-y-1 transition duration-200">XL</span>
                    </div>
                </div>

                <button onClick={handleAddToCart} className=" text-white text-xs font-normal bg-black md:text-sm md:py-3 md:px-5 px-2 py-2 transition hover:text-white hover:bg-black  hover:scale-105" type="submit">
                    Add to cart
                </button>
                <p className="text-gray-500 text-sm font-medium leading-7">100% Original product.
                Cash on delivery is available on this product.
                Easy return and exchange policy within 7 days.</p>
            </div>
        </div>


        <div className="space-y-6 px-16">
            <div className="text-sm flex space-x-10">
                <h1 className="font-semibold">Description</h1>
                <h1>Reviews(122)</h1>
            </div>

            <div className="text-xs font-semibold leading-6 text-gray-500">
                <p className="mb-6">An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity
                    due to their convenience, accessibility, and the global reach they offer.</p>
                <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations 
                    (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail