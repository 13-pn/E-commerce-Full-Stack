import React from "react";
import './FilterSidebar.css'

const FilterSidebar = ({ filters, setFilters, onClear }) => {

  const handlePriceChange = (e) => {
    setFilters(prev => ({ ...prev, price: e.target.value }));
  };

  const handleSortChange = (e) => {
    setFilters(prev => ({ ...prev, sort: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilters(prev => ({ ...prev, rating: e.target.value }));
  };

  return (
   <div className="filter-sidebar" style={{position:'fixed',height:'100%',paddingTop:'170px',zIndex:'5'}}>


  <div className="filter-header d-flex justify-content-md-between justify-content-center align-items-center gap-2 gap-md-0">
    <h5>Filters</h5>
    <button className="clearBtn" onClick={onClear}>Clear All</button>
  </div>


  <div className="filter-section">
    <h6>Price Range</h6>

    <label>
      <input type="radio" name="priceRange" value="under500"
        onChange={handlePriceChange}
        checked={filters.price === "under500"} />
      Under ₹500
    </label>

    <label>
      <input type="radio" name="priceRange" value="500to1000"
        onChange={handlePriceChange}
        checked={filters.price === "500to1000"} />
      ₹500 - ₹1000
    </label>

    <label>
      <input type="radio" name="priceRange" value="above1000"
        onChange={handlePriceChange}
        checked={filters.price === "above1000"} />
      Above ₹1000
    </label>
  </div>

  {/* Sort */}
  <div className="filter-section">
    <h6>Sort by Price</h6>

    <label>
      <input type="radio" name="priceSort" value="lowToHigh"
        onChange={handleSortChange}
        checked={filters.sort === "lowToHigh"} />
      Low to High
    </label>

    <label>
      <input type="radio" name="priceSort" value="highToLow"
        onChange={handleSortChange}
        checked={filters.sort === "highToLow"} />
      High to Low
    </label>
  </div>

  {/* Rating */}
  <div className="filter-section">
    <h6>Rating</h6>

    <label>
      <input type="radio" name="rating" value="4"
        onChange={handleRatingChange}
        checked={filters.rating === "4"} />
      4★ & above
    </label>

    <label>
      <input type="radio" name="rating" value="3"
        onChange={handleRatingChange}
        checked={filters.rating === "3"} />
      3★ & above
    </label>
  </div>
   
</div>
  );
};



export default FilterSidebar;