/* import React,{ Component } from 'react'
    import ReactDOM from 'react-dom'
    import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
    const $ = React.createElement
    class App extends Component {
    render() { 
        return (
            <div>
                首页
            </div>
        )
    }
    }
    class Tvlist extends Component {
    render() {
        return(
            <div>
                <h1>电视节目列表1</h1>
                {this.props.children}
            </div>
        
        )
    }
    }
    class Show extends Component{
    render(){
        return(
            <h4>具体电视节目</h4>
        )
    }
    }
    ReactDOM.render((
    <div>
        <Show />
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/tv">TV</Link></li>
                </ul>
                <Route exact path="/" component={App} />
                <Route path="/tv" component={Tvlist} />
            </div>
        </Router></div>
        

    ),document.getElementById('headBox')) */







/* axios({
        method: 'post',
        url: 'http://f.apiplus.cn/bj11x5.json',
        data: {
            expect: '2017112147'
        },
        param: {
            expect: '2017112147'
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(function (res) {
        console.log(res)
    }).catch((error)=>{

    })
 */
/* let postDates = {
    "expect": "2017112147"
}
fetch('http://f.apiplus.cn/bj11x5.json', {
    method: 'POST',
    mode: 'no-cors',
    //credentials: 'include',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(postDates)
}).then((response) =>{
    console.log(response)
},
(error) => {
    this.setState({
        isLoaded: true,
        error   
    })
}

); */