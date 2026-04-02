import React from 'react'
import { View, Text, Image } from 'react-native'
const SanPhamItem = ({ sanPham }) => {
    return (
        <View>
            <Image style={{ height: 100, width: 100 }}
                source={{ uri: sanPham.image }}
            ></Image>
            <Text>Tên: {sanPham.name}</Text>
            <Text>Giá: {sanPham.price}</Text>
        </View>
    )
}

export default SanPhamItem