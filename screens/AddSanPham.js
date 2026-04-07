import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { addSanPhamAction } from '../actions/sanPhamAction'
import { useNavigation } from '@react-navigation/native'
const AddSanPham = () => {
  
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleAdd = async () => {
    try {
      if(!name||!price||!image){
        Alert.alert("Không được để trống")
        return
      }
      const obj = {
        name, price, image
      }
      await dispatch(addSanPhamAction(obj))
      navigation.goBack()
    } catch (error) {
      console.log("add: ", error)
    }
  }
  return (
    <View>
      <Text>Thêm sản phẩm</Text>
      <TextInput
        placeholder='Tên sp'
        value={name}
        onChangeText={setName}
      ></TextInput>
      <TextInput
        placeholder='Giá sp'
        value={price}
        onChangeText={setPrice}
      ></TextInput>
      <TextInput
        placeholder='Hình ảnh'
        value={image}
        onChangeText={setImage}
      ></TextInput>
      <TouchableOpacity onPress={handleAdd}>
        <Text>Thêm</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddSanPham