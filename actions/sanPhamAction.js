import axios from "axios"
import { addSanPham, deleteSanpham, editSanPham, setSanPham } from "../reducers/sanPhamReducer"

const apiUrl = "http://10.82.2.107:3000/sanpham"

export const getListSP = ()=> async(dispatch)=>{
    try {
        const response = await axios.get(apiUrl)
        console.log(response.data)
        dispatch(setSanPham(response.data))
    } catch (error) {
        console.log("Hiển thị", error)
    }
}

export const addSanPhamAction = (sanPham)=> async(dispatch)=>{
    try {
        const response = await axios.post(apiUrl, sanPham)
        console.log(response.data)
        dispatch(addSanPham(response.data))
    } catch (error) {
        console.log("Hiển thị", error)
    }
}

export const editSanPhamAction = (id, sanPham)=> async(dispatch)=>{
    try {
        const response = await axios.put(`${apiUrl}/${id}`, sanPham)
        console.log(response.data)
        dispatch(editSanPham(response.data))
    } catch (error) {
        console.log("edit error", error)
    }
}

export const deleteSanPhamAction = (id)=> async(dispatch)=>{
    try {
        const response = await axios.delete(`${apiUrl}/${id}`)
        console.log(response.data)
        dispatch(deleteSanpham(id))
    } catch (error) {
        console.log("delete error", error)
    }
}
