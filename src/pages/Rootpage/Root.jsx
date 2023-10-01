import { Outlet } from "react-router-dom"
import AppNavbar from "../../layout/AppNavbar"

const Root = () => {
  return (
    <div className=" h-screen overflow-hidden">
        <AppNavbar/>
        <Outlet/>
    </div>
  )
}

export default Root