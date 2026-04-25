import React, { useState } from 'react'
import Location_icon from '../../assets/images/fast_shipping.png'
import currentLocation_icon from '../../assets/TopHeaderImg/CurrentLocation.svg'
import login_icon from '../../assets/images/login2.svg'
import './Location.css'
import { useContextpvd } from '../context/context'

const CurrentLocation = () => {
  const {LocationText, setLocationText}=useContextpvd();
  const [ManualAdd, setManualAdd] = useState("")
  const [Loading, setLoading] = useState(false)

  const API_KEY = "4b731c22160e4369b7644d838f0f6e66";
  
  //For manual address
  const fetchFormattedAddress = async (address) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          address
        )}&key=${API_KEY}&countrycode=IN`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setLocationText(data.results[0].formatted);
      } else {
        setLocationText("Address not found 😕");
      }
    } catch (error) {
      console.error(error);
      setLocationText("Error fetching address!");
    }
    setManualAdd("")
    setLoading(false)
  };

  // Function for current location
  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Call OpenCage API with lat/lng
        fetchFormattedAddress(`${lat},${lng}`);
      },
      (error) => {
        console.error(error);
        alert("Unable to retrieve your location. Please enable location permissions.");
      }
    );
  };

  
   return (
    <div>
      <div className="offcanvas offcanvas-end" id="demo">
  <div className="offcanvas-header">
    <h4 className="offcanvas-title">Add Delivery Location</h4>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div className="offcanvas-body">
    <div className="input-group mb-3">
  <input type="text" 
   className="form-control"
   placeholder="Search by area, street name, pin code"
   value={ManualAdd}
   onChange={(e)=>setManualAdd(e.target.value)}
    />
  <button className="btn btn-success p-2" type="submit" onClick={()=>{
    setLoading(true)
    fetchFormattedAddress(ManualAdd)
  }}>
    {Loading? <span class="spinner-border spinner-border-sm"></span>:
    <span>Go</span>}</button>
</div>
    <div className=' d-flex align-items-center gap-3' onClick={useCurrentLocation} style={{cursor:'pointer'}}>
        <img src={currentLocation_icon} alt="image" className='p-1' style={{backgroundColor:'aliceblue'}}/>
        <span className='fw-bold text-primary'>Use Your current location</span>
    </div>
    <div className='pt-3 mt-3' style={{borderTop:'1px dotted black'}}>
    <p className='fw-bold'>Saved Address</p>
    <div className='d-flex fw-bold gap-3 text-primary' style={{cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#myModal">
        <img src={login_icon} alt="image" /><span>Login to see saved address</span>
    </div>
    </div>
  </div>
</div>

<div className="d-flex align-items-center gap-2" style={{cursor:'pointer'}}>
 <img src={Location_icon} alt="img" style={{height:'25px'}} />
  <span data-bs-toggle="offcanvas" className='text-light' data-bs-target="#demo">
   {LocationText}&gt;
  </span>
</div>
    </div>
  )
}

export default CurrentLocation