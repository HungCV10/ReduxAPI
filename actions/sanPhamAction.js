import axios from "axios"
import { setSanPham, addSanPham, deleteSanPham } from "../reducers/sanPhamReducer"

const apiUrl = "http://10.82.2.57:3000/sanpham"
export const getListSP = ()=> async(dispatch)=>{
    try {
        const response = await axios.get(apiUrl)
        console.log(response.data)
        dispatch(setSanPham(response.data))
    } catch (error) {
        console.log("Hiển thị", error)
    }
}

