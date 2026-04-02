import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listSanPham: []
}

const sanPhamSlice = createSlice({
    name: "sanPham",
    initialState,
    reducers: {
        setSanPham(state, action){
            state.listSanPham  = action.payload
            // action.payload: thông tin muốn truyền vào reducer
        }
    },

})

export const {setSanPham} = sanPhamSlice.actions

export default sanPhamSlice.reducer