import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listSanPham: []
}

const sanPhamSlice = createSlice({
    name: "sanPham",
    initialState,
    reducers: {
        setSanPham(state, action) {
            state.listSanPham = action.payload
            // action.payload: thông tin muốn truyền vào reducer
        },
        addSanPham(state, action) {
            state.listSanPham.push(action.payload)
        },
        editSanPham(state, action) {
            const { id, sanPham } = action.payload
            // lấy id, sanrpham từ trong action payload
            state.listSanPham.forEach((sp, index) => {
                // duyệt từng sản phẩm, nếu tìm thấy sản phẩm có id giống => cập nhật lại sản phẩm đó
                if (sp.id = id) {
                    state.listSanPham[index] = { ...sp, ...sanPham }
                    //...sp: giữa sản phẩm cũ
                    //...sanPham: ghi đè dữ liệu mới
                }
            })
        },
        deleteSanpham(state, action) {
            state.listSanPham = state.listSanPham.filter((sp) => sp.id != action.payload)
        }
    },

})

export const { setSanPham, addSanPham, editSanPham, deleteSanpham } = sanPhamSlice.actions

export default sanPhamSlice.reducer