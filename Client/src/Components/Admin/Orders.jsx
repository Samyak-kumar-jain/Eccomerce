import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Dialog } from '../ui/dialog'
import Order_details from './Order-details.jsx'

const AdminOrders = () => {

  const [openDialog,setOpenDialog] = useState(false)
  return (
    <Card className="w-full bg-gray-800 text-white ">
      <CardHeader>
        <CardTitle>
          All Orders
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead>
                Order Id
              </TableHead>
              <TableHead>
                Order Date
              </TableHead>
              <TableHead>
                Order Status
              </TableHead>
              <TableHead>
                Order Price
              </TableHead>
              <TableHead>
                <span className='sr-only'></span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            <TableRow className="hover:bg-gray-800">
              <TableCell>123456</TableCell>
              <TableCell>27/06/2024</TableCell>
              <TableCell>In Proccess</TableCell>
              <TableCell>₹ 123</TableCell>
              <TableCell>
                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <button 
                onClick={()=>setOpenDialog(true)}
                className='w-1/2 bg-teal-400 text-white flex justify-center items-center p-2 rounded-lg'>View Details</button>
                <Order_details></Order_details>
                </Dialog>
                
               </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
      </CardContent>
    </Card>
  )
}

export default AdminOrders