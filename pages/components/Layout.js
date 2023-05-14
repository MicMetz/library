import { Navigation } from './Navigation.js'
import { SideBar } from './SideBar.js'




export const Layout = ({ children }) => {
  return (
    <>
    <div className = "text-slate-800">
    <Navigation />

      <main >{children}</main >
    </div >
    </>
  )
}
