import React from 'react'
import { Link } from 'gatsby'


const Menu = () => (
   <div style={{
      background: '#f4f4f4',
      paddintTop: '10px'
   }}>

   <ul style={{
    listStyle: none,
    display: 'fles',
    justifyContent:'space-evenly'
   }}> 
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/page-2">Page2</Link></li>
    <li><Link to="/">change later</Link></li>


   </ul>
  </div>
)

export default Menu;
