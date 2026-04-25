import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect , useState} from 'react'
import './demo.css'
import ProductDetails from '../Products/ProductDetails'
import Modal from '../Modal/Model'
import Skeleton from '../Loader/Skeleton'


const ForYouTrending = () => {
 const [isModalOpen, setIsModalOpen] = useState(false)
      const [selectedProduct, setSelectedProduct] = useState(null);
      const [products, setproducts] = useState([])
      const [Loading, setLoading] = useState(true)
        useEffect(() => {
          const fetchprod=async()=>{
            try{
            let res=await fetch("http://your-backend.onrender.com/api/products?limit=5")
            let data=await res.json();
            setproducts(data);
            setLoading(false)        
          }
            catch(err){
              console.log(err);
            }
          }
          fetchprod();
        }, [])
  return (
   <div className='foryou-container  pt-4'>
       
       <div className='d-flex justify-content-between align-items-center px-2'>
         <h3 className='heading'>Trending products </h3>
       </div>
   
       {Loading ? (
      <div className='boxes d-flex justify-content-md-between gap-3 gap-md-5 pt-4 align-items-stretch'>
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           <Skeleton />
           </div> ) : (
         <div className='boxes d-flex justify-content-md-between gap-3 gap-md-5 pt-4 align-items-stretch'>
           {products.map((product) => {
             return (
               <div className='ForYouproduct-card' onClick={() => {
            setSelectedProduct(product);
            setIsModalOpen(true);
          }}>
                 
                 <div className="Foryouimg-box">
                   <img src={product.image} alt="product" />
                   <span className='Productrating'>{product.rating.rate}⭐</span>
                 </div>
   
                 <div className="Foryoucard-body">
                   <p className='Foryoutitle'>
                     {product.title.slice(0, 25)}...
                   </p>
   
                   <div className='foryouprice-box d-flex align-items-center'>
                     <span className='foryouprice'>${product.price}</span>
                     <del className='old-price'>${product.price + 27.2}</del>
                   </div>
                 </div>
   
               </div>
             );
           })}
         </div>
       )}
     <Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title={selectedProduct?.title}
>
  {selectedProduct && (
    <ProductDetails
      product={selectedProduct}
      onClose={() => setIsModalOpen(false)}
    />
  )}
</Modal>
     </div>
  )
}

export default ForYouTrending
