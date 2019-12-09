import React, { Component } from 'react'
import './style.scss'
import creatHistory from 'history/createHashHistory'

import Tests from '../../test'
const history = creatHistory()

export default class Header extends Component {



  constructor(props){

    super(props);
    this.state={
      title:this.props.title,
      IsBack:this.props.IsBack
    }

    
  }


  render() {
    return (
      <header className="app-header">
        {/* <span className="back fa fa-chevron-left"></span> */}
        <span className={ this.props.IsBack == "true" ? "back fa fa-chevron-left":''} onClick = {this.bacAction.bind(this)}></span>
        <h1 className="title">{this.props.title}</h1>
       
      </header>
    )
  }
  bacAction(){
    history.goBack();
  }
}
