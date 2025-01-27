import { User } from "../types/user"

type Props = {
  user: User
}

export const UserProfile = (props: Props) => {
  const { user } = props
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(' / ')}</dd>
    </dl>
  )
}