import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import ImageUpload from './ImageUpload.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addNewProduct, editProduct, fetchAllProducts } from '../../features/Product/Productslice.js';

const ProductForm = ({ onClose, isEditMode, currentEditId, setcurrentEditId, setFormVisible }) => {
  const [imageFile, setImageFile] = useState(null);
  const [uploadImgUrl, setImgUploadUrl] = useState('');
  const [imagLoadingState, setImageLoadingState] = useState(false);
  
  const dispatch = useDispatch();

  // Initial form state
  const initialFormState = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salePrice: '',
    totalStock: ''
  };

  // Form fields state
  const [formData, setFormData] = useState(initialFormState);

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(()=>{})
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const productData = {
      ...formData,
      image: uploadImgUrl
    };

    if (currentEditId !== null) {
      // Edit mode
      dispatch(editProduct({
        id: currentEditId,
        formData,
      })).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          setFormData(initialFormState);
          setcurrentEditId(null);
          setImageFile(null);
          setImgUploadUrl('');
          toast.success('Product edited successfully');
          
        }
      });
    } else {
      // Add new product
      dispatch(addNewProduct(productData)).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllProducts());
          setFormData(initialFormState);
          setImageFile(null);
          setImgUploadUrl('');
          toast.success('Product added successfully');
           // Close the form
        }
      });
    }
  };

  return (
    <div className='fixed top-0 right-0 w-68 h-full bg-gray-900 shadow-lg p-6 transition-transform transform translate-x-0 duration-300 ease-in-out opacity-100 overflow-y-auto max-h-full border border-gray-700'>
      <X onClick={onClose} className='mb-4 mr-2 cursor-pointer bg-teal-600 right-0 absolute text-white p-1 border rounded-md hover:bg-red-500'>Close</X>
      <h1 className='flex mb-7 justify-center text-slate-100 font-semibold text-3xl'>
        {currentEditId !== null ? 'Edit Product' : 'Add Product'}
      </h1>

      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <ImageUpload
          isEditMode={isEditMode}
          imageFile={imageFile}
          setImageFile={setImageFile}
          uploadImgUrl={uploadImgUrl}
          setImgUploadUrl={setImgUploadUrl}
          setImageLoadingState={setImageLoadingState}
          imagLoadingState={imagLoadingState}
        />

        {/* Title Field */}
        <div>
          <label className='block mb-1 text-teal-300'>{currentEditId !== null ? "Edit product" : "Add Product"}</label>
          <input
            name="title"
            type="text"
            placeholder="Enter product title"
            className='border rounded-md p-2 w-full bg-gray-800 text-white border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300'
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        {/* Description Field */}
        <div>
          <label className='block mb-1 text-teal-300'>Description</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            className='border rounded-md p-2 w-full bg-gray-800 text-white border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300'
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        {/* Category Field */}
        <div>
          <label className='block mb-1 text-teal-300'>Category</label>
          <select
            name="category"
            className='border rounded-md p-2 w-full bg-gray-800 text-white border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300'
            value={formData.category}
            onChange={handleInputChange}
          >
             <option value="">Select</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
            <option value="accessories">Accessories</option>
            <option value="footwear">Footwear</option>
          </select>
        </div>

        {/* Brand Field */}
        <div>
          <label className='block mb-1 text-teal-300'>Brand</label>
          <select
            name="brand"
            className='border rounded-md p-2 w-full bg-gray-800 text-white border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300'
            value={formData.brand}
            onChange={handleInputChange}
          >
             <option value="">Select</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="puma">Puma</option>
            <option value="levi">Levi's</option>
            <option value="zara">Zara</option>
            <option value="h&m">H&M</option>
          </select>
        </div>

        {/* Price Field */}
        <div>
          <label className='block mb-1 text-teal-300'>Price</label>
          <input
            name="price"
            type="number"
            placeholder="Enter product price"
            className='border rounded-md p-2 w-full bg-gray-800 text-white border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300'
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        {/* Sale Price Field */}
        <div>
          <label className='block mb-1 text-teal-300'>Sale Price</label>
          <input
            name="salesPrice"
            type="number"
            placeholder="Enter sale price (optional)"
            className='border rounded-md p-2 w-full bg-gray-800 text-white border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300'
            value={formData.salePrice}
            onChange={handleInputChange}
          />
        </div>

        {/* Total Stock Field */}
        <div>
          <label className='block mb-1 text-teal-300'>Total Stock</label>
          <input
            name="totalStock"
            type="number"
            placeholder="Enter total stock"
            className='border rounded-md p-2 w-full bg-gray-800 text-white border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300'
            value={formData.totalStock}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className='bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 transition-colors'>
          {currentEditId !== null ? 'Edit Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
