import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './less/common.less'
import HeadTop from './component/head.jsx'
import NewRouter from './router/router.jsx'
ReactDOM.render(<HeadTop/>,document.getElementById('head'))    
ReactDOM.render(< NewRouter/>, document.getElementById('container'))

