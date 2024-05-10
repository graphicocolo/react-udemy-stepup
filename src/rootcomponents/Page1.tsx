import { Link, Outlet, useNavigate } from 'react-router-dom'
import '../App.css'

export const Page1 = () => {
  const arr = [1, 2, 3, 4, 5]
  console.log(arr)

  const navigate = useNavigate()
  const handleClick = () => navigate('/page1/detailA')

  return (
    <div>
      <h1>Page1 ページです</h1>
      <ul className='list-rooting'>
        {/* <li><Link to='/page1/detailA'>DetailA</Link></li> */}
        <li><Link to={{ pathname: '/page1/detailA' }} state={arr}>DetailA</Link></li>
        <li><Link to='/page1/detailB'>DetailB</Link></li>
      </ul>
      <p>ボタンをクリックすると DetailA にジャンプ！</p>
      <button onClick={handleClick}>DetailA</button>
      <Outlet />
    </div>
  )
}