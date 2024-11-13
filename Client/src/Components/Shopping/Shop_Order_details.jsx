import React from 'react';
import { DialogContent } from '../ui/dialog';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';


const Shop_Order_details = () => {


    return (
        <DialogContent className="sm:max-w-[600px]   border ">
            <div className='grid gap-6'>
                <div className='grid gap-2'>
                    <div className='flex items-center justify-between mt-6 text-black'>
                        <p className='text-2xl font-bold text-slate-700'>
                            Order-Id
                        </p>
                        <Label className='text-xl font-bold text-black'>12345</Label>
                    </div>
                    <div className='flex items-center justify-between mt-2 text-black'>
                        <p className='text-md font-medium'>Order-Date</p>
                        <Label className='text-md font-medium text-black'>20/1/12</Label>
                    </div>
                    <div className='flex items-center justify-between mt-2 text-black'>
                        <p className='text-md font-medium'>Order-Price</p>
                        <Label className='text-md font-medium text-black'>₹ 200</Label>
                    </div>
                    <div className='flex items-center justify-between mt-2 text-black'>
                        <p className='text-md font-medium'>Order-Status</p>
                        <Label className='text-md font-medium text-black'>In Progress</Label>
                    </div>
                    <Separator></Separator>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <div className='font-bold text-slate-700 text-lg'>Order details</div>
                            <ul className='grid gap-3'>
                                <li className='flex items-center justify-between text-black'>
                                    <span>Product One</span>
                                    <span>₹ 100</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <div className='text-lg text-slate-700 font-bold'>Shipping info</div>
                            <div className='grid gap-0.5 text-black'>
                                <span>John Doe</span>
                                <span>Address</span>
                                <span>City</span>
                                <span>Pincode</span>
                                <span>Notes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
};

export default Shop_Order_details;
