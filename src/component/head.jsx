import React, { Component } from 'react'
import logo from "../images/logo.jpg"
import custom from "../images/custom.jpg"
class HeadTop extends Component {
    render() {
        return ( 
            <div>
                <div className="hd_top">
                    <div className='top_welcome'>
                        公告: 欢迎来到xx娱乐， 祝您游戏愉快！ 赚大钱~
                    </div>
                    <div className='top_other'>
                        <a href='#'> 下载客户端 </a>
                        <a href='#'> ? 在线帮助 </a>
                        <a href='#'>
                            <img src={custom} /></a>
                    </div>
                </div>
                <div className="hd_content">
                    <a href="#" className="logo">
                        <img src={logo} alt="" />
                    </a>
    </div>
    {this.props.children}
                </div>
        )
    }
}

export default HeadTop