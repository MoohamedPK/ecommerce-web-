import { memo } from "react"

const Heading = memo(({title, params}: {title:string, params?:string}) => {
  return (
    <div className=" md:text-2xl text-sm font-semibold">
        {params ? (
            <h1 className=" text-gray-400 font-semibold"><span className="capitalize text-black font-semibold">{params}</span> {title}</h1>
          ) : (
            <h1 className="font-semibold"></h1>
          )}
    </div>
  )
})

export default Heading