import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div>
        <h1>{props.brand}</h1>
<ul>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/product"}>Products</Link></li>
    <li><Link to={"/category"}>category</Link></li>
</ul>
    </div>
  )
}
