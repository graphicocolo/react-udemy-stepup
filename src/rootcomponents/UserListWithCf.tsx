import { UserCard } from '../components/UserCard'
import { useAllUsers } from '../hooks/useAllUsers'

export const UserListWithCf = () => {
  const { getUsers, userProfiles, loading, error } = useAllUsers()
  const onClickFetchUser = () => getUsers()

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