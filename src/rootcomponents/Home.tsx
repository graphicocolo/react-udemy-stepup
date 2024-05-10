import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Todo } from '../components/Todo'
import { TodoType } from '../types/todo'
import { Text } from '../components/Text'
import { UserProfile } from '../components/UserProfile'
import { User } from '../types/user'

export const Home = () => {
  const onClickUsers = () => {
    // then でデータ取得後に実行する関数を設定
    // 引数 res には取得した情報が入る
    // catch で取得できなかった場合に実行する関数を設定
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data)
    }).catch((err) => console.log(err))
  }
  const onClickUser1 = () => {
    // axios.get('https://jsonplaceholder.typicode.com/users?id=1').then((res) => {
    axios.get('https://jsonplaceholder.typicode.com/users/3').then((res) => {
      console.log(res.data)
    }).catch((err) => console.log(err))
  }
  const [todos, setTodos] = useState<Array<TodoType>>([])
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      // console.log(res.data)
      setTodos(res.data)
    }).catch((err) => console.log(err))
  }

  const user: User = {
    name: 'テストユーザー',
    hobbies: ['映画', 'ゲーム'],
  }

  return (
    <div>
      <h1>トップページです</h1>
      <UserProfile user={user} />
      <Text color='red' fontSize='18px' />
      <button onClick={onClickUsers}>users</button>
      <br />
      <button onClick={onClickUser1}>id=1のuser</button>
      <ul>
        <li><Link to='/typelist'>TypeListページへ</Link></li>
        <li><Link to='/userlist'>UserListページへ</Link></li>
        <li><Link to='/userlistwithcf'>カスタムフックを使ったUserListページへ</Link></li>
      </ul>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  )
}