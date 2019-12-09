import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from  'jquery';
class photo extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div id="mydiv">
            <div id="div1">手机归属地查询</div>
            <input type="text" placeholder="电话:请输入手机号码" class="tel" />
            <input type="submit" value="查询" class="search" />
            <div id="div2">
                <div>号码归属地：<span id="address"></span></div><br />
                <div>提供商：<span id="provider"></span></div>
            </div>
        </div>
        );
    }

   
   componentDidMount() {
    ($('.search').click(function() {//为查询按钮实现事件监听
        var $tel = $(".tel").val();//定义一个JQuery对象,筛选出电话输入框，用于提取用户输入的电话号码
        $.ajax({
            // method: "GET",//get方法
            method: "GET",//get方法
            datatype: "json",
            url: "http://www.meishihui68.com.cn/api/tel?",//API地址
            // timeout: 2000,//设置超时事件为2s
            data: {
                tel: $tel  
            },
            
            success: function(res) {
                // this.func()
                console.log(res)
                $('#address').html(res.result.mobilearea);//处理json对象res，从返回值中筛选出所需的值
                $('#provider').html(res.result.mobiletype);
            },
            error: function() {
                alert("错误");
            }
        });
    }))()
   }
   


}

photo.propTypes = {

};

export default photo;