import { Link } from "react-router-dom"

function Login() {
  return (
    <div className=" mt-16">
        <div className="w-1/2 mx-auto  flex flex-col justify-center items-center space-y-8 py-8">

            <div>
                <h1 className="font-semibold text-5xl font-customTwo mb-8">Login</h1>
            </div>
            
            <form action="" className="flex flex-col text-center space-y-8 w-1/2">
                    <input className="px-4 py-2 border border-black" type="email" name="" id="" placeholder="email"/>
                    <input className="px-4 py-2 border border-black" type="password" name="" id="" placeholder="password"/>
                    <div className="text-xs font-semibold text-black flex justify-between">
                        <Link to={""}>Forgot your password?</Link>
                        <Link to={"/register"}>Create account</Link>
                    </div>

                    <div>
                        <button className="bg-black text-white text-xs md:text-sm md:py-3 md:px-5 px-2 py-2 hover:bg-gray-400 hover:text-black transition hover:scale-105" type="submit">Sign In</button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Login