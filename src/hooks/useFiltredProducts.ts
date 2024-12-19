import { useAppDispatch } from "@store/hooks"
import { filterHighToLow, filterLowToHigh} from "@store/products/ProductsSlice"

export const useFiltredProducts = () => {

    
    const optionsNums = [{name:"all",value:"default"},{name:"low to high",value:"lowToHigh"}, {name:"high to low",value:"highToLow"}]

    const dispatch = useAppDispatch()

    const handleValueChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        if (e.target.value === "highToLow") {
            dispatch(filterHighToLow())
        } else if (e.target.value === "lowToHigh") {
            dispatch(filterLowToHigh())
        }

    }

    return {optionsNums, handleValueChange}
}