import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetCollectionByPrefix from "@store/getProductsByCollection/action/actGetCollectionByPrefix";
import { cleanupCollectionSatat } from "@store/getProductsByCollection/collectionSlice";

export const useGetCollection = () => {

    
  const dispatch = useAppDispatch()
  const {records} = useAppSelector(state => state.collection)

  useEffect(() => {
    const promise = dispatch(actGetCollectionByPrefix())

    return () => {
      dispatch(cleanupCollectionSatat())
      promise.abort()
    }
  }, [dispatch])

    return {records}
}