import { useParams, useSearchParams } from 'react-router-dom'

export const UrlQueryParameter = () => {
  const { id } = useParams()
  const [params] = useSearchParams()
  return (
    <div>
      <h1>UrlParameter ページです</h1>
      <p>パラメータは{id}です</p>
      <p>パラメータnameは{params.get('name')}です</p>
    </div>
  )
}