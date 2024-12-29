import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { lazy, Suspense } from "react"
import MainLayout from '@components/layouts/MainLayout/MainLayout'
import Error from "@pages/Error"

const Home = lazy(() => import('@pages/Home'))
const Collection = lazy(() => import('@pages/Collection'))
const Contact = lazy(() => import('@pages/Contact'))
const About = lazy(() => import('@pages/About'))
const Products = lazy(() => import('@pages/Products'))
const Cart = lazy(() => import('@pages/Cart'))
const ProductDetailPage = lazy(() => import('@pages/ProductDetailPage'))
const Login = lazy(() => import('@pages/Login'))
const Register = lazy(() => import('@pages/Register'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,

    errorElement: <Error/>,
    
    children: [
      {
        index: true,
        
        element:
        <Suspense fallback='Please Wait...'>
            <Home/>
        </Suspense>
      },
      {
        path: "collection",
        element: <Suspense fallback='Please Wait...'>
            <Collection/>
        </Suspense>
      },
      {
        path: "collection/:prefix",
        loader: ({params}) => {
          
          if (typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)) {
            throw new Response("not found", {
              statusText: "page not display",
              status: 400
            })
          }
          return true;
        },
        element: <Suspense fallback='Please Wait...'>
            <Collection/>
        </Suspense>
      },
      {
        path: "/product",
        element: <Suspense fallback='Please Wait...'>
            <Products/>
        </Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback='Please Wait...'>
            <Contact/>
        </Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback='Please Wait...'>
            <About/>
        </Suspense>
      },
      {
        path: "/cart",
        element: <Suspense fallback='Please Wait...'>
            <Cart/>
        </Suspense>
      },
      {
        path: "/collection/product/:prefix",
        element: <Suspense fallback='Please Wait...'>
            <ProductDetailPage/>
        </Suspense>
      },
      {
        path: "/login",
        element: <Suspense fallback='Please Wait...'>
            <Login/>
        </Suspense>
      },
      {
        path: "/register",
        element: <Suspense fallback='Please Wait...'>
            <Register/>
        </Suspense>
      },
    ]
  }
])


function AppRouter() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default AppRouter