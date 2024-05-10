// ナビメニューに特化した NavLink 要素

import { NavLink, Outlet } from 'react-router-dom'
import '../App.css'

const isCurrent = ({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''

const RouterNav = () => {
  return (
    <>
      <ul className='list-rooting'>
        <li><NavLink to='/' className={isCurrent}>トップ</NavLink></li>
        <li><NavLink to='/page1' className={isCurrent}>Page1ページ</NavLink></li>
        <li><NavLink to='/page2' className={isCurrent}>Page2ページ</NavLink></li>
      </ul>
      <Outlet />
    </>
  )
}

export default RouterNav