import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
const EditSanPham = ({route}) => {
    const sanPham = route.params
    const [name, setName] = useState(sanPham.name)
    const [price, setPrice] = useState(sanPham.price)
    const [image, setImage] = useState(sanPham.image)
    return (
       <View>
             <Text>Sửa sản phẩm</Text>
             <TextInput
               placeholder='Tên sp'
               value={name}
               onChangeText={setName}
             ></TextInput>
             <TextInput
               placeholder='Giá sp'
               value={price}
               onChangeText={setPrice}
               keyboardType='numeric'
             ></TextInput>
             <TextInput
               placeholder='Hình ảnh'
               value={image}
               onChangeText={setImage}
             ></TextInput>
             <TouchableOpacity >
               <Text>Sửa</Text>
             </TouchableOpacity>
           </View>
    )
}

export default EditSanPham