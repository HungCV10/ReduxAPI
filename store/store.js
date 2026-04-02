import configureStore from "@reduxjs/toolkit"
import sanPhamReducer from "../reducers/sanPhamReducer"
const store = configureStore({
    reducer: {
        sanpham: sanPhamReducer
    }
})
export default store