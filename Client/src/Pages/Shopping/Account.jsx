import React from 'react'
import accountImg from "../../assets/account.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs'
import Orders from '@/Components/Shopping/Orders'
import { AddressForm } from '@/Components/Shopping/Address'

const Account = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative h-[300px] w-full overflow-hidden'>
        <img src={accountImg} className='h-full w-full object-cover oject-center'
        ></img>
      </div>
      <div className='container mx-auto grid grid-cols-1 gap-8 py-8'>
        <div className='flex flex-col rounded-lg border bg-background p-6 shadow-sm'>
        <Tabs defaultValue='orders'>
          <TabsList>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
          </TabsList>
          <TabsContent value="orders">
              <Orders></Orders>
          </TabsContent>
          <TabsContent value="address">
              <AddressForm/>
          </TabsContent>
        </Tabs>
         
        </div>
      </div>
    </div>
  )
}

export default Account