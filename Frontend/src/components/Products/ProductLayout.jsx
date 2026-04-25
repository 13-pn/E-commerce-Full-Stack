import FilterSidebar from "./FilterSidebar";

const ProductLayout = ({ children, filters, setFilters, onClear }) => {
  return (
    <div className="d-flex pt-5 justify-content-center gap-3 overflow-hidden">
      <div className="col-4 col-md-3">
        <FilterSidebar filters={filters} setFilters={setFilters} onClear={onClear} />
      </div>

      <div className="col-8 col-md-9">
        {children}
      </div>
    </div>
  );
};

export default ProductLayout;