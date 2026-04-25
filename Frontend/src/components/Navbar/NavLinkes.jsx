import React from 'react'
import { BrowserRouter ,NavLink , Outlet} from 'react-router-dom'

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? 'rgb(254, 226, 226)' : '#7A2E22',
  textDecoration:'none',
  fontWeight: isActive ?'bold':' ',
  backgroundColor:isActive ? '#7A2E22':' ',
  transition: 'all 0.5s ease-in'
});

const NavLinkes = () => {
  return (
    <> 
    <div>
   <nav 
  className="d-flex position-fixed w-100 overflow-auto gap-3 justify-content-md-center bg-white border-bottom"
  style={{top:'97px', zIndex: 10, scrollbarWidth: 'none',transition:'2s ease-in',}}
>
  <NavLink to='/' style={navLinkStyles} className="flex-shrink-0 p-1 fs-6 fs-md-5">For You</NavLink>
  <NavLink to='/Aipan-Art' style={navLinkStyles} className="flex-shrink-0 p-1">Aipan Art</NavLink>
  <NavLink to='/Wooden-Crafts' style={navLinkStyles} className="flex-shrink-0 p-1">Wooden Crafts</NavLink>
  <NavLink to='/Bamboo-Ringaal-Crafts' style={navLinkStyles} className="flex-shrink-0 p-1">Bamboo & Ringaal Crafts</NavLink>
  <NavLink to='/Pooja-Spiritual-Items' style={navLinkStyles} className="flex-shrink-0 p-1">Pooja & Spiritual Items</NavLink>
  <NavLink to='/Home-decore' style={navLinkStyles} className="flex-shrink-0 p-1">Home & decoration</NavLink>
  <NavLink to='/Handmade-Accessories' style={navLinkStyles} className="flex-shrink-0 p-1">Handmade Accessories</NavLink>
  <NavLink to='/Wool-Textiles' style={navLinkStyles} className="flex-shrink-0 p-1">Wool Textiles</NavLink>
  <NavLink to='/Cultural-Crafts' style={navLinkStyles} className="flex-shrink-0 p-1">Cultural Crafts</NavLink>
</nav></div>
   
    </>
  )
}

export default NavLinkes
