import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function NavLink(text,link) {
    const location = useLocation()
  return (
    <div>
        <Link to={`/Dashboard/${link}`}  title={text} key={item.id}></Link>
        <p>{text}</p>
    </div>
  )
}
