import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
const SanPhamItem = ({ sanPham }) => {
    const navigation = useNavigation()

    const btnSua = ()=>{
        navigation.navigate("editSanPham", sanPham)
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
        </View>
    )
}

export default SanPhamItem