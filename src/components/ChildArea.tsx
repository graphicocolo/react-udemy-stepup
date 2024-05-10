import { memo } from 'react'

type ChildAreaProps = {
  open: boolean
  onClickClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

// memo で囲うことで、このコンポーネントはpropsが変更しない限り再レンダリングしないようになる
export const ChildArea = memo((props: ChildAreaProps) => {
  const { open, onClickClose } = props
  console.log('ChildAreaがレンダリングされた!!')

  // 模擬的にレンダリングコストの高いコンポーネントにする
  // const data = [...Array(2000).keys()]
  // data.forEach(() => {
  //   console.log('...')
  // })
  return (
    <>
      {open && (
        <div className={'clm item-rendering'}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      )}
    </>
  )
})