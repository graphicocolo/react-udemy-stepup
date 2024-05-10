/* eslint-disable @typescript-eslint/no-unused-vars */

// TypeScript の基本の型

// boolean
let bool: boolean = true

// number
let num: number = 0

// string
let str: string = 'A'

// Array
// 下記どちらの書き方でも良い
let arr1: Array<number> = [0, 1, 2]
let arr2: number[] = [0, 1, 2]

// tuple
// あまり使わない
let tuple: [number, string] = [0, 'A']

// any
// 極力使わず開発する
let any1: any = false

// void
// 関数に紐ずく型
// 何も返却値がないことを表す型
// TypeScript が型を推測してくれるので
// この場合はあえて void は書かなくても大丈夫
// const funcA = (): void => {
const funcA = () => {
  const test = 'TEST'
}

// null
let null1: null = null

// undefined
let undefined1: undefined = undefined

// object
// あまり使わない
let obj1: object = {}
let obj2: { id: number, name: string } = {id: 0, name: 'AAA'}
