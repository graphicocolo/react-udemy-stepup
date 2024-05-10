// ルーティングの設定だけを取り出して管理しやすくしたファイル

import { UrlQueryParameter } from './UrlQueryParameter'

export const Page2Routes = [
  // {
  //   path: 'page1',
  //   index: true,
  //   children: <Page1 />
  // },
  {
    // :を入れることでURLパラメータとして扱うことになる
    path: '/page2/:id',
    index: false,
    children: <UrlQueryParameter />
  },
]