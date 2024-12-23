import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetProducts from "@store/products/action/ActGetProducts"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const useGetProducts = () => {
  
  const dispatch = useAppDispatch();
  const {records} = useAppSelector(state => state.products)
  
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [prodsPerPage, setProdsPerPage] = useState<number>(20)
  const lastPosIndex = currentPage * prodsPerPage 
  const firstPosIndedx = lastPosIndex - prodsPerPage

  const currentProducts = records.slice(firstPosIndedx, lastPosIndex);

  const params = useParams()

  useEffect(() => {
    const promise = dispatch(actGetProducts(params.prefix as string))

    return () => {
      promise.abort();
    }
  }, [dispatch, params])


    return {records, currentProducts, params, prodsPerPage, setCurrentPage,currentPage, setProdsPerPage}
}