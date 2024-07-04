import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Footer from "../Footer/Footer"
import Home from "./Home"
import SideBar from "./SideBar"
import NavBar from "./NavBar"



const Dashboard=()=> {

  

  return (
    <>
    <div className="flex h-screen">
    <SideBar/>
    <div className="flex-1 bg-background p-6">
    <NavBar/>
    <Outlet/>
    </div>
    </div>
    </>
  )
}

export default Dashboard
