import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Dialog } from '../ui/dialog'
import Shop_Order_details from './Shop_Order_details.jsx'

const Orders = () => {
  const [openDialog,setOpenDialog] = useState(false)
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>
          Order History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
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
          <TableBody>
            <TableRow>
              <TableCell>123456</TableCell>
              <TableCell>27/06/2024</TableCell>
              <TableCell>In Proccess</TableCell>
              <TableCell>₹ 123</TableCell>
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <TableCell><button onClick={()=>setOpenDialog(true)} className='w-full lg:w-1/2 bg-gray-800 text-white flex justify-center items-center p-2 rounded-lg'>View Details</button></TableCell>
              <Shop_Order_details></Shop_Order_details>
              </Dialog>
            </TableRow>
          </TableBody>
        </Table>
        
      </CardContent>
    </Card>
  )
}

export default Orders