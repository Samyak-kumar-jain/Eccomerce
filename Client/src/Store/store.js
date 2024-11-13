import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/Authslice/authslice'
import SidebarReducer from '@/features/Sidebarslice/Sidebarslice';
import adminProductsReducer from "../features/Product/Productslice"
import shopProductReducer from "../features/Shopslice/Shopslice"
import shoppingCartReducer from "../features/CartSlice/Cartslice"
import AddressReducer from "../features/Shopslice/Addressslice"
import reviewReducer from "../features/ReviewSlice/reviewSlice"


const store =  configureStore({
  reducer: {
    authen : authReducer,
    sidebar : SidebarReducer,
    adminProducts: adminProductsReducer,
    shopProducts :  shopProductReducer,
    shoppingCart: shoppingCartReducer,
    address:AddressReducer,
   reviewslice:reviewReducer,
  }
})

export default store;

