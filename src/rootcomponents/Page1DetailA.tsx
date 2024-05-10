import { useLocation, useNavigate } from 'react-router-dom'

export const Page1DetailA = () => {
  const { state } = useLocation()
  console.log(state)

  const navigate = useNavigate()

  return (
    <div>
      <h1>Page1DetailA ページです</h1>
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  )
}