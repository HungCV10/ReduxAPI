import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { deleteSanPhamAction } from '../actions/sanPhamAction'
import { useDispatch } from 'react-redux'
const SanPhamItem = ({ sanPham }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const btnSua = () => {
        navigation.navigate("editSanPham", sanPham)
    }
    const btnXoa = ()=>{
        Alert.alert(
            "xác nhận", "bạn có muốn xóa không?",
            [
                {text: "Hủy"},
                {text: "xóa", onPress: async()=>{
                    try {
                        await dispatch(deleteSanPhamAction(sanPham.id))
                    } catch (error) {
                        console.log("lỗi xóa: ", error)
                    }
                }}
            ]
        )
    }
    return (
        <View>
            <Image style={{ height: 100, width: 100 }}
                source={{ uri: sanPham.image }}
            ></Image>
            <Text>Tên: {sanPham.name}</Text>
            <Text>Giá: {sanPham.price}</Text>
            <TouchableOpacity onPress={btnSua}>
                <Text>Sửa</Text>
            </TouchableOpacity>
                 <TouchableOpacity onPress={btnXoa}>
                <Text>xóa</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SanPhamItem