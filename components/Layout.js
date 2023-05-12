import { SideBar } from './SideBar.js'




export const Layout = ({ children }) => {
  return (
    <div className = "text-slate-800">
      <main >{children}</main >
    </div >
  )
}
