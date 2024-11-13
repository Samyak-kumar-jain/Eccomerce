import React from 'react';

const Filter = ({ filters, handleFilter, filterBrand, handleFilterBrand }) => {
  const filterItems = {
    category: [
      { label: "Men", id: "men" },
      { label: "FootWear", id: "footwear" },
      { label: "Kids", id: "kids" },
      { label: "Women", id: "women" },
      { label: "Accessories", id: "accessories" },
    ],
    brand: [
      { label: "Nike", id: "nike" },
      { label: "Adidas", id: "adidas" },
      { label: "Puma", id: "puma" },
      { label: "Levi", id: "levi" },
      { label: "Zara", id: "zara" },
      { label: "H&M", id: "hm" },
    ],
  };

  const isCategoryChecked = (categoryId) => {
    return filters && filters.includes(categoryId);
  };

  const isBrandChecked = (brandId) => {
    return filterBrand && filterBrand.includes(brandId);
  };

  return (
    <>
      <div className='bg-white rounded-lg shadow-sm lg:block md:block hidden'>
        <div className='p-4 border-b'>
          <h2 className='text-lg font-semibold'>Filters</h2>
        </div>
        
        {/* Filter Categories */}
        <div className='p-2'>
          <h3 className='font-bold mb-2'>Categories</h3>
          <ul className="space-y-1">
            {filterItems.category.map((item) => (
              <li key={item.id}>
                <label className='flex items-center space-x-2'>
                  <input
                    onClick={() => handleFilter(item.id)}
                    type='checkbox'
                    id={item.id}
                    checked={isCategoryChecked(item.id)}
                    value={item.id}
                    className='form-checkbox cursor-pointer checked:bg-black checked:border-black checked:focus:ring-0 checked:ring-0 checked:text-white'
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Filter Brands */}
        <div className='p-2'>
          <h3 className='font-bold mb-2'>Brands</h3>
          <ul className="space-y-1">
            {filterItems.brand.map((item) => (
              <li key={item.id}>
                <label className='flex items-center space-x-2'>
                  <input
                    onClick={() => handleFilterBrand(item.id)}
                    type='checkbox'
                    checked={isBrandChecked(item.id)}
                    id={item.id}
                    value={item.id}
                    className='form-checkbox cursor-pointer checked:bg-black checked:border-black checked:focus:ring-0 checked:ring-0 checked:text-white'
                  />
                  <span>{item.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
