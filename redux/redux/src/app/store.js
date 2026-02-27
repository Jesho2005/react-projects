import {configureStore} from '@reduxjs/toolkit'
import Slice from './slice'
const Store=configureStore({
    reducer:{
        usersinfo:Slice,
    }
})
export default Store;