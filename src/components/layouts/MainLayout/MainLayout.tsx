import { Outlet } from "react-router-dom"
import { Header, Footer } from "@components/common/main"


function MainLayout() {
  return (
    <>
      <div className="md:h-screen md:mt-auto md:mb-auto md:px-24 md:pt-8  px-4 pt-5 font-custom flex flex-col"> 
          <Header/>
          <Outlet/>
          <Footer/>
      </div>
    </>
  )
}

export default MainLayout