import React, { useState } from 'react';
import { DialogContent } from '../ui/dialog';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';

const Order_details = () => {
    const [orderStatus, setOrderStatus] = useState('');

    const handleStatusChange = (e) => {
        setOrderStatus(e.target.value);
    };

    return (
        <DialogContent className="sm:max-w-[600px] bg-gray-800 border border-teal-300">
            <div className='grid gap-6'>
                <div className='grid gap-2'>
                    <div className='flex items-center justify-between mt-6 text-white'>
                        <p className='text-2xl font-bold text-teal-300'>
                            Order-Id
                        </p>
                        <Label className='text-xl font-bold text-teal-300'>12345</Label>
                    </div>
                    <div className='flex items-center justify-between mt-2 text-white'>
                        <p className='text-md font-medium'>Order-Date</p>
                        <Label className='text-md font-medium text-white'>20/1/12</Label>
                    </div>
                    <div className='flex items-center justify-between mt-2 text-white'>
                        <p className='text-md font-medium'>Order-Price</p>
                        <Label className='text-md font-medium text-white'>₹ 200</Label>
                    </div>
                    <div className='flex items-center justify-between mt-2 text-white'>
                        <p className='text-md font-medium'>Order-Status</p>
                        <Label className='text-md font-medium text-white'>In Progress</Label>
                    </div>
                    <Separator></Separator>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <div className='font-medium text-teal-300'>Order details</div>
                            <ul className='grid gap-3'>
                                <li className='flex items-center justify-between text-white'>
                                    <span>Product One</span>
                                    <span>₹ 100</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <div className='font-medium text-teal-300'>Shipping info</div>
                            <div className='grid gap-0.5 text-white'>
                                <span>John Doe</span>
                                <span>Address</span>
                                <span>City</span>
                                <span>Pincode</span>
                                <span>Notes</span>
                            </div>
                        </div>
                    </div>
                </div>

                <form>
                    <div className=''>
                        <label htmlFor='orderStatus' className='block text-teal-300 font-medium'>
                            Update Order Status
                        </label>
                        <select
                            id='orderStatus'
                            name='orderStatus'
                            value={orderStatus}
                            onChange={handleStatusChange}
                            className='mt-2 w-full p-2 border border-teal-300 bg-gray-700 text-white rounded'
                        >
                            <option value='' disabled>Select</option>
                            <option value='pending'>Pending</option>
                            <option value='inprocess'>In Process</option>
                            <option value='delivered'>Delivered</option>
                            <option value='inshipping'>In Shipping</option>
                            <option value='rejected'>Rejected</option>
                        </select>
                    </div>
                </form>
            </div>
        </DialogContent>
    );
};

export default Order_details;
