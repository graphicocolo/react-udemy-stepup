// ルーティングを設定・管理するファイル

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import RouterApp from './RouterApp'
import RouterNav from './RouterNav'
import { Home } from './Home'
import { Page1 } from './Page1'
import { Page2 } from './Page2'
import { TypeList } from './TypeList'
import { UserList } from './UserList'
import { UserListWithCf } from './UserListWithCf'
// import { Page1DetailA } from './Page1DetailA'
// import { Page1DetailB } from './Page1DetailB'
import { Page1Routes } from './Page1Routes'
import { Page2Routes } from './Page2Routes'
import { NotFound } from '../NotFound'

export const RoutesLink = createBrowserRouter(
  createRoutesFromElements(
    // トップレベルのリンクのかたまり
    <Route path='/' element={<RouterNav />}>
      <Route path='' element={<Home />} />
      {/* ↓ネストしない書き方 */}
      {/* <Route path='page1' element={<Page1 />} /> */}
      {/* ↓ネストした書き方1 */}
      {/* <Route path='page1'>
        <Route index={true} element={<Page1 />} />
        <Route path='detailA' element={<Page1DetailA />} />
        <Route path='detailB' element={<Page1DetailB />} />
      </Route> */}
      {/* ↓ネストした書き方2 */}
      {/* <Route path='page1' element={<Page1 />}>
        <Route path='detailA' element={<Page1DetailA />} />
        <Route path='detailB' element={<Page1DetailB />} />
      </Route> */}
      {/* Route に関するデータをコンポーネント化した書き方 */}
      {/* page1をルートとするのリンクのかたまり */}
      <Route path='page1'>
        <Route index={true} element={<Page1 />} />
      {Page1Routes.map((route) => (
        <Route key={route.path} index={route.index} path={route.path} element={route.children} />
      ))}
      </Route>
      {/* page2をルートとするのリンクのかたまり */}
      <Route path='page2'>
        <Route index={true} element={<Page2 />} />
        {Page2Routes.map((route) => (
        <Route key={route.path} index={route.index} path={route.path} element={route.children} />
      ))}
      </Route>
      <Route path='typelist' element={<TypeList />} />
      <Route path='userlist' element={<UserList />} />
      <Route path='userlistwithcf' element={<UserListWithCf />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

export default RoutesLink