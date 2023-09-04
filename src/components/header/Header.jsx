import Logo from "@/assets/css/img/Euphoria.svg"
import Menu from "@/components/header/Menu.jsx"
import Search from "@/components/header/Search.jsx"
import Panel from "@/components/header/Panel.jsx"

export const Header = () => {
  return (
    <div className='flex justify-between items-center p-[30px_0]'>
        <div>
          <img src={Logo} alt="" />
        </div>
        <Menu/>
        <Search/>
        <Panel/>
    </div>
  )
}

export default Header