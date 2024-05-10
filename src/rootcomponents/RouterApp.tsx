import { Link, Outlet } from 'react-router-dom'
import '../App.css'

const RouterApp = () => {
  return (
    <>
      <ul className='list-rooting'>
        <li><Link to='/'>トップ</Link></li>
        <li><Link to='/page1'>Page1ページ</Link></li>
        <li><Link to='/page2'>Page2ページ</Link></li>
      </ul>
      <Outlet />
    </>
  )
}

export default RouterApp