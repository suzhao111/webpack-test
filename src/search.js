// document.write('serach page')
'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './images/img1.jpeg'

 class Search extends React.Component  {
     render() {
        return <div className="search-text">
             <h1>Search Text 搜索的文字 nihao  </h1>
             <img src={logo}></img>
             </div>;
     }
 }

 ReactDOM.render(
     <Search />,
     document.getElementById('root')
 )