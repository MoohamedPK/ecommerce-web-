import { TProducts } from "src/types"

function LatestCollection({img, title, price}:TProducts) {
  return (
    <div className="">
        <div className="product mx-10">
            <div className="prod-img overflow-hidden">
                <img className=" hover:scale-110 transition ease-in-out cursor-pointer" src={img} alt="prod_img" />
            </div>

            <div>
                <h1 className="text-sm font-medium my-2">{title}</h1>
                <span className="text-[14px] font-semibold">${price}</span>
            </div>
        </div>
    </div>
  )
}

export default LatestCollection