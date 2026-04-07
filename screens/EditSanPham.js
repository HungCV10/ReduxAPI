import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { editSanPhamAction } from '../actions/sanPhamAction'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const EditSanPham = ({route}) => {
    const sanPham = route.params
    const [name, setName] = useState(sanPham.name)
    const [price, setPrice] = useState(sanPham.price.toString())
    const [image, setImage] = useState(sanPham.image)

    const dispatch = useDispatch()
    const navigation = useNavigation()
      const handleEdit = async () => {
        try {
          if(!name||!price||!image){
            Alert.alert("Không được để trống")
            return
          }
          const obj = {
            name, price, image
          }
          await dispatch(editSanPhamAction(sanPham.id, obj))
          navigation.goBack()
        } catch (error) {
          console.log("Edit: ", error)
        }
      }
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
             <TouchableOpacity onPress={handleEdit} >
               <Text>Sửa</Text>
             </TouchableOpacity>
           </View>
    )
}

export default EditSanPham