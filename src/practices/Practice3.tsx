export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1
    return total.toString()
  }
  const onClickPractice = () => {
    let total: number = 0
    // total = getTotalFee(1000) // 戻り値と変数の型が異なる
    console.log(total)
  }
  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  )
}