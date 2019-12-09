import React, { Component, lazy, Suspense } from 'react'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './style.scss'
import BScroll from 'better-scroll'
import Head from '../../../components/Header/Header'
import { Carousel, WingBlank } from 'antd-mobile';
import Tests from '../../../test'

const Header = (props)=>(
  <header className="header">
  </header>
)

let list=['炸鸡','快餐','游戏充值','电话业务','账号查询','g','a','s','1','2','3','4','5','6','7','8']

export default class movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 0,
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
  }
  handleChange(index){
    this.setState({
      selectIndex: index
    })
  }

  funAction(as){
    this.props.history.push('/shouye/select/' + as)
  }

  phoAction(){
    this.props.history.push('/shouye/photo')
  }
  render() {
   
    let listDOM = list.map((item,index)=>{
      return <p onClick = {this.funAction.bind(this,item)} key={index}>{item}
      {/* <Route path={`/shouye/select/:${index}`}  exact component={Select}/> */}
      </p>
    });
   

    const {selectIndex} = this.state; 
    return (
      
      <div className="page" id="movie">
        <Head title = "首页"/>
        <Header onChange={this.handleChange.bind(this)}/>
        <Tests/>
        <div class="wrapper">
        <ul class="content">      
        {listDOM}
        <p onClick = {this.phoAction.bind(this)}>电话号码归属地查询React</p>
        </ul>
        </div>
      </div>
    )
  }
  componentDidMount() {
    const wrapper = document.querySelector('.wrapper')
    //选中DOM中定义的 .wrapper 进行初始化
    const scroll = new BScroll(wrapper, {
      scrollX: false,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //关闭竖向滚动
      // pullUpLoad: true,
      // scrollbar: true,
      // pullDownRefresh: true
    })
  }
}
