import React, { Component, lazy, Suspense } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Loading from './components/Loading/Loading'
import Tabs from './components/Tabs/Tabs'
const Shouye = lazy(()=>import('./pages/movie/shouye/shouye'));
const Mine = lazy(()=>import('./pages/mine/mine/mine'));
const NotFind = lazy(()=>import('./pages/common/not-find/not-find'));
const Select = lazy(()=>import('./pages/movie/select/select'));
const Photo = lazy(()=>import('./pages/movie/Photo_native/photo.js'));
const Order = lazy(()=>import('./pages/order/order/order.js'))
export default class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<Loading/>}>
            
            {/* 根页面 */}
            <Switch>
           
              <Route path="/" exact render={()=>{
                return <Redirect to="shouye"/>
              }}/>
              
              <Route path="/order" component={Order}/>
              <Route path="/shouye" component={Shouye}/>
              <Route path="/mine" component={Mine}/>

              {/* 公共页面 */}
              {/* <Route path="/city-list" component={CityList}/> */}
              {/* <Route path="/search" component={Search}/> */}
              <Route component={NotFind}/>
              
              
            </Switch>
            
            
            {/* 子页面 */}
            <>
              <Route path="/shouye/select/:id"  component={Select}/>
              <Route path="/shouye/photo"  component={Photo}/>
            </>
            <Tabs/>
            
        </Suspense>
      </Router>
    )
  }
}
