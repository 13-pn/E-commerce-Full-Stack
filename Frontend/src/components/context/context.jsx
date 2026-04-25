import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [signup, setSignup] = useState(false); 
  const [CartArr, setCartArr] = useState([])
  const [LocationText, setLocationText] = useState("Select Delivery Location")
  const [sellerisLogin, setsellerisLogin] = useState(false)
  const [CustomerLogin, setCustomerLogin] = useState(false)

  //Removefromcart
  function RemoveFromCart(product){
  let removeCart = CartArr.filter((e) => e._id !== product._id);
  setCartArr(removeCart);
  toast.success('Item removed from cart')
}

  function addToCart(product){
    let fnCartArr=[...CartArr,product]
    setCartArr(fnCartArr);
    console.log("Product Addded on cart");
    console.log(fnCartArr);
    toast.success("Item added to cart")
  }
  return (
    <Context.Provider 
    value={{ signup,
    setSignup ,
    CartArr,
    setCartArr, 
    LocationText, 
    setLocationText, 
    RemoveFromCart,
    sellerisLogin,
    setsellerisLogin,
    addToCart,
    CustomerLogin,
    setCustomerLogin}}>
      {children}
    </Context.Provider>
  );
};

export const useContextpvd = () => useContext(Context);