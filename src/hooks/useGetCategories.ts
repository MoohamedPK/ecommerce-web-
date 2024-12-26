import { useAppDispatch, useAppSelector } from "@store/hooks"
import {useEffect } from "react"
import actGetCategory from "@store/category/action/actGetCategory"

export const useGetCategories = () => {
    const dispatch = useAppDispatch();
    const {records, error, loading} = useAppSelector(state => state.category)
    
    useEffect(() => {

        if (!records.length) {
            const promise = dispatch(actGetCategory())

            return () => {
                promise.abort()
            }
        }

        
    }, [dispatch, records, loading, error])

    return {records}
}