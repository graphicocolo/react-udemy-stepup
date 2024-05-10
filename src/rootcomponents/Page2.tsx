import { Link } from 'react-router-dom'

export const Page2 = () => {
  return (
    <div>
      <h1>Page2 ページです</h1>
      {/* toの値を/page2/1、/page2/2、と変えていくことでURLパラメータの値を変更 */}
      <Link to='/page2/2'>URL Parameter</Link>
      <br />
      <Link to='/page2/2?name=foo'>Query Parameter</Link>
    </div>
  )
}