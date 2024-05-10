import axios from 'axios'
import { UserCard } from '../components/UserCard'
import { User } from '../types/api/user'
import { useState } from 'react'
import { UserProfile } from '../types/userProfile'

export const UserList = () => {
  // ユーザー情報のstate
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  // ローディング状態のstate
  const [loading, setLoading] = useState(false)
  // エラーのstate
  const [error, setError] = useState(false)

  const onClickFetchUser = () => {
    setLoading(true)
    setError(false)
    // エラー確認用の誤ったエンドポイント指定
    // axios.get<Array<User>>('https://jsonplaceholder.typicode.com/usersxxxxx')
    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }))
      setUserProfiles(data)
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => { // es2018以降の記述で使用可能 tsconfig.json に設定追加
      setLoading(false)
    })
  }

  return (
    <div>
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: 'red' }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}        
        </>
      )}
    </div>
  )
}