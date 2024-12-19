import { useFiltredProducts } from "@hooks/useFiltredProducts"
function FiltredProducts() {
    const {optionsNums, handleValueChange} = useFiltredProducts()
  return (
    <div>
        <select name="" id="" className="p-2 outline-none" onChange={handleValueChange}>
            <optgroup >
            {optionsNums.map((option) => (
                    <option value={option.value} key={option.name}>{option.name}</option>
                ))}
            </optgroup>
        </select>

        
    </div>
  )
}

export default FiltredProducts