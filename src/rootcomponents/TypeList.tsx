import { Link, Outlet, useNavigate } from 'react-router-dom'
import '../App.css'
import { Practice1 } from '../practices/Practice1'
import { Practice2 } from '../practices/Practice2'
import { Practice3 } from '../practices/Practice3'

export const TypeList = () => {
  return (
    <div>
      <h1>TypeList ページです</h1>
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Outlet />
    </div>
  )
}