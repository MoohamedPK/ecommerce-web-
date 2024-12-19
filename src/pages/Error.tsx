import { Link } from "react-router-dom"

// useRouteError allows you to access the statusText and status
import { useRouteError, isRouteErrorResponse } from "react-router-dom" 


function Error() {

    const error = useRouteError();

    let errorStatusText:string;
    let errorStatus:number;

    if (isRouteErrorResponse(error)) {
        errorStatusText = error.statusText;
        errorStatus = error.status
    } else {
        errorStatusText= "page not found";
        errorStatus= 404;
    }

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 className="font-bold text-8xl mb-5">{errorStatus}</h1>
        <p className="text-lg font-semibold ">{errorStatusText} </p>
        <Link className="underline" to="/" replace={true} >Back to safety</Link>
    </div>
  )
}

export default Error