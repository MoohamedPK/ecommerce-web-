import { TProducts } from "src/types"
import { Link } from "react-router-dom"
import { useAppDispatch } from "@store/hooks"
// import actGetProductDetails from "@store/productDetails/action/actGetProductDetails"
import { targetedProduct } from "@store/products/ProductsSlice"

function Product({img, title, price, id}:TProducts) {
    const dispatch = useAppDispatch()

    const handleTargetProduct = () => {
        dispatch(targetedProduct(id))
    }
  return (
      
        <Link to={"/product_details"} className="product col-span-3" key={id} onClick={handleTargetProduct}>
            <div className="prod-img overflow-hidden">
                <img className="w-48 hover:scale-110 transition ease-in-out cursor-pointer" src={img} alt="prod_img" />
            </div>

            <div>
                <h1 className="text-sm font-medium my-2">{title}</h1>
                <span className="text-[14px] font-semibold">${price}</span>
            </div>
        </Link>
  )
}

export default Product