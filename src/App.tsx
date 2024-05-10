// ページを構成するUI部品

import { createBrowserRouter, Link } from 'react-router-dom'
import './App.css'
import { useState, useCallback, useMemo } from 'react'
import { ChildArea } from './components/ChildArea'
import { InlineStyle } from './components/InlineStyle'
import { CssModules } from './components/CssModules'
import { StyledJsx } from './components/StyledJsx'
import { StyledComponents } from './components/StyledComponents'
import { Emotion } from './components/Emotion'
import { About } from './rootcomponents/About'
import { Page1 } from './rootcomponents/Page1'
import { Page2 } from './rootcomponents/Page2'

const App = () => {
  // 再レンダリングを通過するか確認
  // console.log('App')
  const [count, setCount] = useState(0)
  const onClickCountUp = () => setCount(count + 1)

  const [text, setText] = useState('')
  const onchangeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value) // ①

  const [open, setOpen] = useState(false)
  const onClickOpen = () => setOpen(!open)
  // アロー関数で生成された関数は毎回新しい関数を生成しているという判断をされるため
  // 処理の内容は変わらなくてもpropsが更新されているという判断をされ
  // ChildAreaが毎回再レンダリングをされる
  const onClickClose = useCallback(() => setOpen(false), []) // ②
  // 今回の場合は、空配列にして最初の値をずっと使う、としても良い
  // const onClickClose = useCallback(() => setOpen(false), [])

  // input の value を変更するたび再レンダリングされ①を通り
  // ②も実行され、毎回新しい関数を生成しpropsが変更しているという判断をされる
  // よって③に新しいpropsが渡され、ChildAreaも再レンダリングされてしまう
  // （処理の内容は変わらないのに）

  // 処理が変わらない場合は同じものである、という指示をする必要がある
  // そこで必要になるのが useCallback という機能

  // 子コンポーネントの memo 化
  // 子コンポーネントに関数を渡す場合は、さらに useCallback を組み合わせる必要がある

  // 第一引数に依存関数、第二引数に依存配列を受け取る
  // const temp = useMemo(() => {}, [])
  // ここでは 1 + 3 の計算結果4を持ったまま、使いまわされる変数、というイメージ
  const temp = useMemo(() => 1 + 3, [])
  // console.log(temp)
  // useMemo 自体はあまり使うことはないが、
  // 変数内の処理が複雑な場合再レンダリングのたびに処理をしなくても良くなるので
  // そういうシチュエーションで使うと良い

  return (
    <div className="container">
      <h1>Reactに入門した人のためのもっとReactが楽しくなるステップアップコース完全版</h1>
      <div className='clm'>
        <h2>カウントアップ</h2>
        <p>{count}</p>
        <button onClick={onClickCountUp}>カウントアップする</button>
      </div>
      <div className='clm'>
        <h2>レンダリング確認用</h2>
        {/* 文字の変更は直接関係ない箇所だが */}
        {/* 文字を変更するたびChildAreaのレンダリングコストの高いコードが実行される */}
        {/* ChildAreaから見た親コンポーネントが再レンダリングされているため */}
        <input value={text} onChange={onchangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        {/* 親コンポーネントが再レンダリングされてもpropsに変更がない限りは */}
        {/* この子コンポーネントが再レンダリングされないようにする */}
        {/* memo を使う */}
        {/* ③ */}
        <ChildArea open={open} onClickClose={onClickClose} /> 
      </div>
      <div className='clm'>
        <h2>様々なCSSのあてかた</h2>
        <h3>13. Inline Styles</h3>
        <InlineStyle />
        <h3>14. CSS Modules</h3>
        <CssModules />
        <h3>15. Styled JSX</h3>
        <StyledJsx />
        <h3>16. styled components</h3>
        <StyledComponents />
        <h3>17. Emotion</h3>
        <Emotion />
      </div>
      <div className='clm'>
        <h2>ルーティング基礎</h2>
        <ul className='list-rooting'>
          <li><Link to='/'>Topへ</Link></li>
          <li><Link to='/about'>Aboutへ</Link></li>
          <li><Link to='/page1'>Page1へ</Link></li>
          <li><Link to='/page2'>Page2へ</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default App

export const Router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: 'about', element: <About /> },
  { path: 'page1', element: <Page1 /> },
  { path: 'page2', element: <Page2 /> },
])
