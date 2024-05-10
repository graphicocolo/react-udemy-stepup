/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Emotion = () => {
  // 書き方その1 CSS と全く同じ記述ができる
  // const titleStyle = css`
  // color: #d80075;
  // font-weight: 600;
  // `

  // 書き方その2 React デフォルトのインラインスタイルと似た記述
  const titleStyle = css({
    color: '#d80075',
    fontWeight: '600'
  })
  return (
    <>
      <div>
        <p css={titleStyle}>Emotion</p>
        <SButton>FIGHT!!</SButton>
      </div>
    </>
  )
}

// 書き方その3 styled components と似た記述
const SButton = styled.button`
background-color: #d80075;
border: none;
border-radius: 5px;
padding: 1rem 1.5rem;
color: #fff;
font-weight: 600;
cursor: pointer;
`