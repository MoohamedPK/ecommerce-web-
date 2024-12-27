import { Link } from "react-router-dom"
import LottieHandler from "@feedback/lottieHandler/LottieHandler"

function Error() {

  return (

    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <LottieHandler type="notFound"/>
        <Link className="underline" to="/" replace={true} ><button className="bg-black text-white text-xs md:text-sm md:py-3 md:px-5 px-2 py-2 hover:bg-gray-400 hover:text-black transition hover:scale-105">Back To Safety</button></Link>
    </div>
  )
}

export default Error