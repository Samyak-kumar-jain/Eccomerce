import Filter from '../../Components/Shopping/filter.jsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from '@/Components/ui/dropdown-menu';
import { ArrowUpDownIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ShopCard from '../../Components/Shopping/Shopcard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails, fetchAllFilteredProducts, fetchProductDetails } from '../../features/Shopslice/Shopslice.js';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import ProductDetailsCard from '../../Components/Shopping/Product-details.jsx';

const Listing = () => {
  const dispatch = useDispatch();
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  console.log(productDetails, "product details");

  const [filterCat, setFiltersCat] = useState([]); // Initialize as an empty array
  const [filterBrand, setFilterBrand] = useState([]); // Initialize as an empty array
  const [sort, setsort] = useState('price-lowtohigh');
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortOptions = [
    { id: "price-lowtohigh", label: "Price: Low to High" },
    { id: "price-hightolow", label: "Price: High to Low" },
    { id: "title-atoz", label: "Title: A to Z" },
    { id: "title-ztoa", label: "Title: Z to A" },
  ];

  const createSearchParamsHelper = (filters, brands) => {
    let params = [];

    if (filters && filters.length > 0) {
      const encodedCategories = encodeURIComponent(filters.join(","));
      params.push(`categories=${encodedCategories}`);
    }

    if (brands && brands.length > 0) {
      const encodedBrands = encodeURIComponent(brands.join(","));
      params.push(`brands=${encodedBrands}`);
    }

    return params.join("&");
  };

  useEffect(() => {
    dispatch(fetchAllFilteredProducts({ filterCat, filterBrand, sortParams: sort }));
  }, [dispatch, sort, filterCat, filterBrand]);

  useEffect(() => {
    if ((filterCat && filterCat.length > 0) || (filterBrand && filterBrand.length > 0)) {
      const params = createSearchParamsHelper(filterCat, filterBrand);
      setSearchParams(new URLSearchParams(params));
    }
  }, [filterCat, filterBrand, setSearchParams]);

  useEffect(() => {
    // Retrieve filters from session storage
    const storedFilters = JSON.parse(sessionStorage.getItem("filters"));
    const storedBrands = JSON.parse(sessionStorage.getItem("filterBrand"));
    
    // Ensure filters are arrays
    setFiltersCat(Array.isArray(storedFilters) ? storedFilters : []);
    setFilterBrand(Array.isArray(storedBrands) ? storedBrands : []);
  }, []);

  const handleSort = (value) => {
    setsort(value);
  };

  const handleFilter = (getId) => {
    const isAlreadySelected = filterCat.includes(getId);
    const updatedFilters = isAlreadySelected
      ? filterCat.filter(id => id !== getId)
      : [...filterCat, getId];

    setFiltersCat(updatedFilters);
    sessionStorage.setItem("filters", JSON.stringify(updatedFilters));
  };

  const handleFilterBrand = (getId) => {
    const isAlreadySelected = filterBrand.includes(getId);
    const updatedBrandFilters = isAlreadySelected
      ? filterBrand.filter(id => id !== getId)
      : [...filterBrand, getId];

    setFilterBrand(updatedBrandFilters);
    sessionStorage.setItem('filterBrand', JSON.stringify(updatedBrandFilters));
  };

  const filteredProducts = productList.filter(product => 
    (filterCat.length === 0 || filterCat.includes(product.category)) &&
    (filterBrand.length === 0 || filterBrand.includes(product.brand))
  );

  useEffect(() => {
    if (productDetails !== null) {
      setOpen(true);
    }
  }, [productDetails]);

  const getProductDetails = (getProductId) => {
    dispatch(setProductDetails(null));
    dispatch(fetchProductDetails(getProductId));
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-[210px_1fr] gap-6 p-4 md:p-2'>
        <Filter 
          filters={filterCat} 
          handleFilter={handleFilter} 
          filterBrand={filterBrand} 
          handleFilterBrand={handleFilterBrand}
        />
        <div className='bg-background w-full rounded-lg shadow-sm'>
          <div className='p-4 border-b flex items-center justify-between'>
            <h2 className='text-xl font-extrabold'>
              All Products
            </h2>
            <div className='flex items-center gap-2'>
              <span className='text-muted-foreground mr-2'>{filteredProducts.length} Products</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className='flex items-center gap-1 border-gray-400 rounded-md shadow-sm p-1'
                  >
                    <ArrowUpDownIcon className='h-4 w-4' />
                    <span>Sort by</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                    {sortOptions.map((sortItem) => (
                      <DropdownMenuRadioItem
                        value={sortItem.id}
                        className="cursor-pointer"
                        key={sortItem.id}
                      >
                        {sortItem.label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-5 mb-5'>
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <ShopCard getProductDetails={getProductDetails} key={product._id} product={product} />
                ))
              : <span>No products found.</span>
            }
          </div>
        </div>
        <ProductDetailsCard open={open} setOpen={setOpen} productDetails={productDetails} />
      </div>
    </>
  );
};

export default Listing;
