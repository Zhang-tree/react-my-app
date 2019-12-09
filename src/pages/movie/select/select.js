import React, { Component } from 'react'
import './style.scss'
import  Head from '../../../components/Header/Header'
export default class select extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    let ass = this.props.match.params.id
    console.log(ass)
    return (
      <div className="page subpage">
        <Head IsBack = "true"  title = {ass +"——详情页" }/>
      </div>
    )
  }
}
