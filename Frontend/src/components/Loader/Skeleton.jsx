import React from "react";

const Skeleton = () => {
  return (
    <div className="ForYouproduct-card">
      
      {/* Image Skeleton */}
      <div className="Foryouimg-box placeholder-glow">
        <div className="placeholder w-70 w-md-100 h-100 rounded"></div>
      </div>

      <div className="Foryoucard-body mt-2">
        
        {/* Title Skeleton */}
        <p className="placeholder-glow mb-2">
          <span className="placeholder col-10"></span>
        </p>

        {/* Price Skeleton */}
        <div className="placeholder-glow">
          <span className="placeholder col-4"></span>
        </div>

      </div>
    </div>
  );
};

export default Skeleton;