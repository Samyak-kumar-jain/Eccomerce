import { deleteProduct, fetchAllProducts } from '@/features/Product/Productslice';
import React from 'react';
import { useDispatch } from 'react-redux';

const Product_card = ({
  image,
  title,
  description,
  category,
  brand,
  price,
  salePrice,
  totalStock,
  onDelete,
  handleButtonClick,
  setCurrentEditId, // Fixed typo
  productId, // Added to track the specific product
}) => {
  const dispatch = useDispatch();

  const handleDelete = (productId)=>{
    dispatch(deleteProduct(productId)).then(data=>{
      if(data?.payload?.success){
        dispatch(fetchAllProducts())
      }
    })
    
  }

  return (
    <div className='w-[250px]  border border-teal-600 text-white flex flex-col rounded-md gap-2 m-2 p-2 shadow-sm shadow-teal-900'>
      <img
        src={image}
        alt={title}
        className='w-full h-[250px] object-fit rounded-lg shadow-sm shadow-teal-800'
      />
      <div className='text-sm flex flex-row justify-between items-center'>
        <h2 className='text-slate-100 font-normal text-xl pl-1'>{title}</h2>
        <span className='text-teal-500 font-semibold line-through '>₹{price}</span>
        <span className='text-teal-500 font-semibold  '>₹{salePrice}</span>
      </div>
      <p className='text-sm font-normal text-gray-300  pl-1'>{description}</p>
      <p className='text-sm font-normal text-gray-300 line-clamp-3 pl-1'>{category}</p>
      <p className='text-sm font-normal text-gray-300 line-clamp-3 pl-1'>{brand}</p>
      <div className='flex justify-between items-center mt-auto'>
        <button
          className='p-2 m-2 text-white w-full bg-gray-800 hover:bg-teal-600 rounded-lg text-sm transform transition-transform duration-150 ease-in-out active:scale-90'
          onClick={() => {
            handleButtonClick();
            setCurrentEditId(productId); 
          }}
        >
          Edit
        </button>
        <button
          className='p-2 text-white bg-gray-800 hover:bg-red-600 rounded-lg text-sm transform transition-transform duration-150 ease-in-out m-2 active:scale-90 w-full'
          onClick={()=>handleDelete(productId)} // Pass the correct product ID for deletion
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Product_card;
