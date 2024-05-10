// 全ユーザーを取得するカスタムフック

import { useState } from "react"
import { UserProfile } from "../types/userProfile"
import axios from "axios"
import { User } from "../types/api/user"

export const useAllUsers = () => {
  // ユーザー情報のstate
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  // ローディング状態のstate
  const [loading, setLoading] = useState(false)
  // エラーのstate
  const [error, setError] = useState(false)

  const getUsers = () => {
    setLoading(true)
    setError(false)
    // エラー確認用の誤ったエンドポイント指定
    // axios.get<Array<User>>('https://jsonplaceholder.typicode.com/usersxxxxx')
    axios
    .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
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

  // 他のコンポーネントで使えるようにreturnで返す
  // オブジェクトか配列、どちらかで返す
  return { getUsers, userProfiles, loading, error }
}