import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

const tabsData = [
  {id: 1, title: '首页', icon: 'fa fa-indent', path: '/shouye'},
  {id: 2, title: '订单', icon: 'fa fa-cart-plus', path: '/order'},
  {id: 3, title: '我的', icon: 'fa fa-user-o', path: '/mine'}
]
export default ()=>{
  return (
    <nav className="app-tabs">
    {
      tabsData.map(item=>(
        <NavLink className="tab" key={item.id} to={item.path}>
          <span className={item.icon}></span>
          <span className="text">{item.title}</span>
        </NavLink>
      ))
    }
    </nav>
  )
}
