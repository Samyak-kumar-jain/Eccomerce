import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import ProductForm from '@/Components/Admin/ProductForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from "../../features/Product/Productslice";
import Product_card from '@/Components/Admin/Product_card.jsx';

const Products = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isClosing, setClosing] = useState(false);
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.adminProducts);
  const [currentEditId, setCurrentEditId] = useState(null); // Fixed typo here

  const handleButtonClick = () => {
    setFormVisible(true);
    setClosing(false);
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
    console.log(productList);
  }, [dispatch]);

  const handleCloseForm = () => {
    setClosing(true);
    setTimeout(() => {
      setFormVisible(false);
    }, 300);
  };
 

  return (
    <>
      <div className='p-4 w-full border rounded-2xl flex flex-col-reverse lg:flex-row bg-gray-900'>
        <div className='w-full h-full flex flex-row flex-wrap rounded-lg lg:justify-start md:justify-start justify-center'>
          {productList && productList.length > 0 ? (
            productList.map((productItem) => (
              <Product_card
                key={productItem._id}
                handleButtonClick={handleButtonClick}
                isEditMode={currentEditId !== null}
                currentEditId={currentEditId}
                setCurrentEditId={setCurrentEditId} // Fixed typo
                image={productItem.image}
                title={productItem.title}
                description={productItem.description}
                category={productItem.category}
                brand={productItem.brand}
                price={productItem.price}
                salePrice={productItem.salePrice}
                totalStock={productItem.totalStock}
                productId={productItem._id} // Added productId prop for Edit/Delete
              />
            ))
          ) : (
            <div className='text-white'>No products available</div>
          )}
        </div>

        <button
          onClick={() => {
            handleButtonClick();
            setCurrentEditId(null); // Reset for creating a new product
          }}
          className='flex items-center gap-2 bg-gray-900 px-4 py-2 text-white hover:bg-teal-400 border border-teal-200 rounded-md transition-all duration-300 ease-in-out ml-auto h-10 mt-4 lg:mt-0'
        >
          <Plus />
          <span className='whitespace-nowrap'>Add Product</span>
        </button>
      </div>

      {isFormVisible && (
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end z-50 transition-opacity duration-300 ease-in-out ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          onClick={handleCloseForm}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <ProductForm 
              onClose={handleCloseForm} 
              isEditMode={currentEditId !== null} 
              currentEditId={currentEditId} 
              setCurrentEditId={setCurrentEditId} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
