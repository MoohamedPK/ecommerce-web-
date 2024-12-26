import { TProducts } from "src/types"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "@store/hooks"
// import actGetTargetedProduct from "@store/products/action/actGetTargetedProduct"
import { targetedProduct } from "@store/products/ProductsSlice"


function Product({img, title, price, id}:TProducts) {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleNavigate = () => {
        navigate(`/collection/product/${id}`)
        dispatch(targetedProduct(id))
    }

  return (
        <div  className="product col-span-3" key={id} onClick={() => handleNavigate()}>
            <div className="prod-img overflow-hidden">
                <img className="w-48 hover:scale-110 transition ease-in-out cursor-pointer" src={img} alt="prod_img" />
            </div>

            <div>
                <h1 className="text-sm font-medium my-2">{title}</h1>
                <span className="text-[14px] font-semibold">${price}</span>
            </div>
        </div>
  )
}

export default Product