import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from '@components/layouts/MainLayout/MainLayout'
import {Home, Collection, Contact, About, Products, Error} from "@pages/main" 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <Error/>,
    
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "collection",
        element: <Collection/>
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
        element: <Collection/>
      },
      {
        path: "product",
        element: <Products/>,
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "about",
        element: <About/>
      }
    ]
  }
])


function AppRouter() {
  return (
    <RouterProvider router={router}>AppRouter</RouterProvider>
  )
}

export default AppRouter