import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/Authslice/authslice.js'
import SidebarReducer from '../features/Sidebarslice/Sidebarslice.js';
import adminProductsReducer from "../features/Product/Productslice.js"
import shopProductReducer from "../features/Shopslice/Shopslice.js"
import shoppingCartReducer from "../features/CartSlice/Cartslice.js"
import AddressReducer from "../features/Shopslice/Addressslice.js"
import reviewReducer from "../features/ReviewSlice/reviewSlice.js"


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

