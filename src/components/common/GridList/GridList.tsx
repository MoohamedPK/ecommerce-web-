
type TGridListProps<T> = {
    records:T[],
    renderItems: (record:T) => React.ReactNode
    inputValue?: string | null,
}

function GridList<T,>({records, renderItems}:TGridListProps<T>) {
    const renderList =  records.map((record) => (
        renderItems(record)
    ))

  return (
        <>
        {renderList}
        </>
  )
}

// .filter((ele) => {
//         return inputValue?.toLowerCase() === "" ? ele : ele.title.toLowerCase().includes(inputValue)
//     })
export default GridList