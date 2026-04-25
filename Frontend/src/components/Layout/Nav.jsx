import React, { useState } from 'react'
import search_icon from '../../assets/images/searchicon.png'
import './Nav.css'
import seller_icon from '../../assets/images/saller.svg'
import cart_icon from '../../assets/images/cart.svg'
import { useContextpvd } from '../context/context'
import CurrentLocation from '../Location/CurrentLocation'
import { Link } from 'react-router-dom'
import login_icon from '../../assets/images/login.svg'
import UserLogin from '../Login/UserLogin'
import LoginModal from '../Modal/LoginModel'
import Slidemsg from '../Navbar/slidemsg'
import SearchBox from '../Navbar/SearchBox'
import NavLinkes from '../Navbar/NavLinkes'

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const {CartArr,setCartArr, CustomerLogin ,setCustomerLogin} = useContextpvd()
    return (
      <div className='border-container'>
    <div className='nav-content' style={{backgroundColor:'#7A2E22'}}>
      <div className="d-flex align-items-center justify-content-between px-2 px-md-3 pt-1">

 
  <div className="flex-grow-1 overflow-hidden me-3">
    <Slidemsg />
  </div>

 
  <div className="flex-shrink-0">
    <CurrentLocation />
  </div>

</div>
        <div className='d-flex justify-content-center ps-4 pe-4 pt-2 align-items-center'>
                <SearchBox
        onSelectProduct={(p) => setModalProduct(p)}
        onSelectCategory={(c) => setCategoryPage(c)}
      />           
          <button
            className="btn gradient-bg p-2 d-flex align-items-center ms-2"
            title="Login"
            style={{
              backgroundColor: "#f0f0f0ff",
              textDecoration: "none",
              color: "black",
              padding: "6px 12px",
              width: "auto"
            }}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {CustomerLogin ? (
              <span className="fw-bold mehroon-color">Hello bhai</span>
            ) : (
              <>
                <img src={login_icon} alt="Login" />
                <span className="fw-bold d-none d-md-block mehroon-color ms-2">Login</span>
              </>
            )}
          </button>
           
          <Link
            to="/seller"
            className="btn gradient-bg d-flex align-items-center p-2 ms-2"
            title="Become a Seller"
            style={{ backgroundColor: "#f0f0f0ff", textDecoration: "none", color: "black" }}
          >
            <img src={seller_icon} alt="seller" />
            <span className="fw-bold d-none d-md-block mehroon-color ms-2">Become a Seller</span>

          </Link>
          <Link
            to="/cart"
            className="btn gradient-bg d-flex align-items-center  p-2 ms-2 position-relative"
            title="Cart"
            style={{ backgroundColor: "#f0f0f0ff", textDecoration: "none", color: "black" }}
          >
            <img src={cart_icon} alt="Cart" />
            <span className="fw-bold d-none d-md-block mehroon-color ms-1 me-2">Cart</span>
            <span
              className="position-absolute top-0 bg-danger text-light p-1 rounded-pill"
              style={{ fontSize: "10px", right: "0px" }}
            >
              {CartArr.length}
            </span>
          </Link>
         
        </div><hr />
        
         <LoginModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            
          >
            <UserLogin onClose={() => setIsModalOpen(false)}/>
            </LoginModal>
    </div>
    </div>
  )
}

export default Nav
