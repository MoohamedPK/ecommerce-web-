import Category from "@components/eCommerce/category/Category"
import GridList from "@components/common/GridList/GridList"
import { TCategory } from "src/types"
import { useGetCategories } from "@hooks/useGetCategories"

function Categories() {

  const {records} = useGetCategories()
  return (
    <div className="flex flex-col my-4">
      <div className="font-semibold mb-3 hidden md:block ">CATEGORIES</div>

      <div className="flex md:flex-col flex-1 justify-around my-2 md:mr-12 md:py-6 md:px-6 md:space-y-8 p-2 md:bg-white bg-black text-white md:text-black font-semibold rounded-lg ">
        <GridList<TCategory> records={records} renderItems={(record) => <Category {...record}/>}/>
      </div>
    </div>
  )
}

export default Categories