import React  from 'react'
import  {useState, useEffect} from 'react'

import img1 from '../../assets/sliderImg/slideImg1.png'
import img2 from '../../assets/sliderImg/slideImg2.png'
import img3 from '../../assets/sliderImg/slideImg3.png'
import img4 from '../../assets/sliderImg/slideImg4.png'
import img5 from '../../assets/sliderImg/slideImg5.png'
import './Foryoucarousel.css'

const ForYoucarousel = () => {
  const [Currindex, setCurrindex] = useState(0)
    const slides = [
  img1,
  img2,
  img3,
  img4,
  img5,
];
function scrollleft(){
    setCurrindex(Currindex===0? slides.length-1 : Currindex - 1)
}
function scrollRight(){
    setCurrindex(Currindex===slides.length-1 ? 0 : Currindex + 1)
}

   useEffect(() => {
  const interval = setInterval(() => {
    scrollRight();
  }, 3000);

  return () => clearInterval(interval);
}, );

  return (
    <div className='mt-3'>
      <div className='slider'> 
        <div className='Track'   style={{ transform: `translateX(-${Currindex * 100}%)`, transition:"1s ease-in"}}> 
            {slides.map((slide,index)=>{
                return(
            <div className='rev  text-center' key={index}>
  <img 
    src={slide} 
    alt="img" 
    className="w-100 img-fluid"
    style={{ maxHeight: "300px", objectFit: "cover" }}
  />
</div>)})}
        </div>
     
     
      <button onClick={scrollleft}
         className='carousel-control-prev  '><span className='carousel-control-prev-icon prev'></span></button>
      <button onClick={scrollRight} className='carousel-control-next  '><span className='carousel-control-next-icon next'></span></button>
     
      
    <div className='dots'>
    {slides.map((_,index)=>{
        return(
        <span key={index}
         className={index==Currindex?"dot active":"dot"} onClick={()=>setCurrindex(index)}>
        </span>)
    })}
   </div>
    </div>
    </div>
  )
}

export default ForYoucarousel
