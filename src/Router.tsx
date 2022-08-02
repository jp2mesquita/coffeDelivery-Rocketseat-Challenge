import { Routes, Route } from 'react-router-dom'
import { DefautLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Delivery } from './pages/Delivery'
import { Home } from './pages/Home'

export function Router(){
  return(
    <Routes>
      <Route path='/' element={<DefautLayout  />}>
        <Route path='/' element={<Home />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/delivery' element={<Delivery/>}/>
      </Route>
    </Routes>
  )
}