import { TProducts } from "src/types"

function Product({img, title, price, id}:TProducts) {
  return (
      
        <div className="product col-span-3" key={id}>
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