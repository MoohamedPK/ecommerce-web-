type TPaginationProps = {
    totalProducts:number,
    prodsPerPage:number,
    setCurrentPage: (page:number) => void,
    currentPage:number,
    
}

function Pagination({totalProducts, prodsPerPage, setCurrentPage, currentPage}:TPaginationProps) {

    const pages = [];

    //the math ceil method make sure that will give us an integer
    for(let i = 1; i<= Math.ceil(totalProducts/prodsPerPage); i++ ) {
        pages.push(i)
    }

    const handleCurrentPage = (page:number) => {
        setCurrentPage(page)
        scrollTo(0,0)
    }

  return (
    <div className="flex justify-center items-center my-5 p-2 space-x-6 ">
        {pages.map((page, index) => {
            return <button className={page === currentPage ? "active bg-gray-400 px-4 py-1 font-semibold hover:-translate-y-1 hover:bg-black hover:text-white transition duration-300" : "bg-gray-400 px-4 py-1 font-semibold hover:-translate-y-1 hover:bg-black hover:text-white transition duration-300"} 
            key={index} 
            onClick={() => {handleCurrentPage(page)}}>{page}</button>
        })}
    </div>
  )
}

export default Pagination