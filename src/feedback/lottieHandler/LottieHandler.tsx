import Lottie from "lottie-react"
import notFound from "@assets/Lotties/404.json"
import errorLottie from "@assets/Lotties/error.json"
import loadingLottie from "@assets/Lotties/loading.json"
import empty from "@assets/Lotties/empty.json"


const lottieFiles = {
    notFound,
    errorLottie,
    loadingLottie,
    empty
}

type TLottieHandlerProps = {
    type: keyof typeof lottieFiles,
}

function LottieHandler({type}:TLottieHandlerProps) {
    const lottie = lottieFiles[type]
  return (
    <div>
        <Lottie animationData={lottie} className="size-64"/>
    </div>
  )
}

export default LottieHandler