import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
var initState = {
    yy: new Date().getFullYear(),
    mm: new Date().getMonth() + 1,
    dd: new Date().getDate(),
    hh: 23,
    mi: 59,
    ss: 0,
    text_hh: 12,
    text_mm: 34,
    text_ss: 56,
    isload: false,
    tips: null,
    item: []
}

class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = initState
        this.Countdown;
    }
    checkTime(i) {
        if (i < 10 && i>=0) {
            i = '0' + i
        }
        return i
    }
    setTime() { // 倒计时
        var t = this.state
        console.log(t)
        var year, month, day, hour, minute, second
        year = t.yy
        month = t.mm
        day = t.dd
        hour = t.hh
        minute = t.mi
        second = t.ss
        var leftTime = (new Date(year, month - 1, day, hour, minute, second)) - (new Date()); // 计算剩余的毫秒数
        var hours = parseInt(leftTime / 1000 / 60 / 60, 10); // 计算剩余的小时
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); // 计算剩余的分钟
        var seconds = parseInt(leftTime / 1000 % 60, 10); // 计算剩余的秒数
        var text_hh = this.checkTime(hours)
        var text_mm = this.checkTime(minutes)
        var text_ss = this.checkTime(seconds)
        this.setState({
          text_hh: text_hh,
          text_mm: text_mm,
          text_ss: text_ss
        })
      if (text_hh == 0 && text_mm == 0 && text_ss == 0) {
            //clearInterval(this.Countdown)
            var data = new Date()
            data.setDate(data.getDate() + 2)
            var yy = data.getFullYear()
            var mm = data.getMonth() + 1
            var dd = data.getDate()
            this.setState({
                yy: yy,
                mm: mm,
                dd: dd
            })
      }
    }
    load() {
        var t = this
        $.ajax({ // 获取数据
            url: 'http://f.apiplus.cn/bj11x5.json',
            type: 'POST',
            data: {
                'expect': '2017112147'
            },
            dataType: 'jsonp',
            success: function(data) {
                let newdata = data.data
                t.setState({
                    item: newdata
                })
            },
            error: function(error) {}
        })
    }
    componentDidMount() {
        

    }

    componentWillMount() { // 加载完后
        this.load();
        this.Countdown = setInterval(() => this.setTime(), 1000);


    }
    render() {
        var issue = this.state.item.map(function(m, i) {
            if (i == 0) {
                return m.expect
            }
        })
        var boxnum = this.state.item.map(function(m, i) {
            if (i == 0) {
                var arr = m.opencode.split(',')
                var box = arr.map(function(numb) {
                    return <li key = { numb } > { numb }</li>
                })
                return box
            }
        })
        var historyList = this.state.item.map(function(m, i) {
            var num = m.opencode.replace(/,/g, ' ')
                //var time =m.opentimestamp.slice(0,5)
            if (i < 3) {
                return ( <li key = { m.opentimestamp }>
                    <time className = 'hisDate' > { m.opentimestamp } 
                    </time> <span className = 'hisNum' > { num } </span> 
                    </li >
                )
            }
        })

        return ( <div className = 'main' >
            <div className = 'content1 clearfix' >
            <div className = 'countDownBox' >
            <div className = 'issue' >
            第 <span> { issue } </span>期截止时间 </div > 
            <div className = "countdown" > { this.state.text_hh }: { this.state.text_mm }: { this.state.text_ss } 
            </div> 
            </div > 
            <div className = 'opencode' >
            <div className = 'issue' >
            <span className = 'chooseType' > 11 选5 </span>第<span>{issue}</span > 期号码 
            </div><ul className = '' > { boxnum } </ul> </ div > 
            <div className = 'history' >
            <ul className = '' >
            <li>
            <time className = 'hisDate' >
            期次 </time><span className='hisNum'>开奖号码</span >
            </li> { historyList } </ul> 
            </div> 
            </div > </div>
        )
    }
}

export default Countdown
/* const issue = { this.state.item[0].expect };  */