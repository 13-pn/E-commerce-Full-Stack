import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ForYou from './components/ForYouSection/ForYou'
import AipanArt from './components/Products/AipanArt'
import Wooden_Crafts from './components/Products/Wooden-Crafts'
import BambooRingleCrafts from './components/Products/BambooRingleCrafts'
import PoojaSpiritualItems from './components/Products/PoojaSpiritualItems'
import Home_decore from './components/Products/Home_decore'
import HandmadeGift from './components/Products/HandmadeGift'
import HandMadeAccessories from './components/Products/HandMadeAccessories'
import WoolTextile from './components/Products/WoolTextile'
import CultureCraft from './components/Products/CultureCraft'
import { ContextProvider } from './components/context/context'
import CartPage from './components/Cart/CartPage'
import Seller from './components/seller/Seller'
import SellerLogin from './components/seller/SellerLogin'
import addProduct from './components/seller/addProduct'
import AddProduct from './components/seller/addProduct'
import ProductList from './components/seller/ProductList'
import Order from './components/seller/Order'
import UserLogin from './components/Login/UserLogin'
import ProductDetails from './components/Products/ProductDetails'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
   <ContextProvider>
    <BrowserRouter>
     <ToastContainer position="top-center" autoClose={2000} />
     <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<ForYou />}/>
            <Route path='foryou' element={<ForYou />} />
            <Route path='Aipan-Art' element={<AipanArt />} />
            <Route path='Wooden-Crafts' element={<Wooden_Crafts />} />
            <Route path='Bamboo-Ringaal-Crafts' element={<BambooRingleCrafts />} />
            <Route path='Pooja-Spiritual-Items' element={<PoojaSpiritualItems/>} />
            <Route path='Home-decore' element={<Home_decore />} />
            <Route path='Handmade-Gifts' element={<HandmadeGift />} />
            <Route path='Handmade-Accessories' element={<HandMadeAccessories />} />
            <Route path='Wool-Textiles' element={<WoolTextile />} />
            <Route path='Cultural-Crafts' element={<CultureCraft />} />
            <Route path='/cart' element={<CartPage />}/>
            </Route>
            <Route path="/:category/:id" element={<ProductDetails />} />
            <Route path='/seller' element={<Seller/>} >
            <Route index element={<AddProduct/>} />
            <Route path='product-list' element={<ProductList />}/>
            <Route path='orders' element={<Order />}/>
            </Route>
     </Routes>      
    </BrowserRouter>
    </ContextProvider>
  )
}

export default App