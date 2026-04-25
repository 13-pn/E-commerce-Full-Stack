import React from 'react'
import  { useState ,useEffect} from 'react'
import ProductLayout from './ProductLayout'
import ProductGrid from './ProductGrid'
import Skeleton from '../Loader/Skeleton'


const HandmadeGift = () => {
const [Products, setProducts] = useState([])
  const [Loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({ price:"", sort:"", rating:"" });
    const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(() => {
    fetch("https://e-commerce-full-stack-63y6.onrender.com/api/products?category=Aipan Art")
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      setLoading(false)
    })
    
    
     
  }, []);

useEffect(() => {
    let temp = [...Products];
    // Apply filters logic here
    if(filters.price==="under500") temp = temp.filter(p=>p.price<500);
    else if(filters.price==="500to1000") temp = temp.filter(p=>p.price>=500 && p.price<=1000);
    else if(filters.price==="above1000") temp = temp.filter(p=>p.price>1000);

    if(filters.rating) temp = temp.filter(p=>p.rating>=filters.rating);

    if(filters.sort==="lowToHigh") temp.sort((a,b)=>a.price-b.price);
    else if(filters.sort==="highToLow") temp.sort((a,b)=>b.price-a.price);

    setFilteredProducts(temp);
  }, [filters, Products]);

    const handleClear = () => setFilters({ price:"", sort:"", rating:"" });
  return (
    <ProductLayout filters={filters} setFilters={setFilters} onClear={handleClear}>
      {Loading?
      <div className='d-flex justify-content-center gap-5' style={{flexWrap:'wrap'}}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      </div>:
      <ProductGrid products={filteredProducts} />}
    </ProductLayout>
  )
}


export default HandmadeGift
