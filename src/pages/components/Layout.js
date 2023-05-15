import { Navigation } from './Navigation.js'
import { SideBar } from './SideBar.js'




export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />

      <main >{children}</main >
    </>
  )
}
