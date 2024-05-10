// ルーティングの設定だけを取り出して管理しやすくしたファイル

// import { Page1 } from './Page1'
import { Page1DetailA } from './Page1DetailA'
import { Page1DetailB } from './Page1DetailB'

export const Page1Routes = [
  // {
  //   path: 'page1',
  //   index: true,
  //   children: <Page1 />
  // },
  {
    path: 'detailA',
    index: false,
    children: <Page1DetailA />
  },
  {
    path: 'detailB',
    index: false,
    children: <Page1DetailB />
  },
]