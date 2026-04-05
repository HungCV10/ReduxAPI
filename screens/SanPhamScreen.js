import React from 'react'
import { FlatList, TouchableOpacity, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SanPhamItem from './SanPhamItem'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getListSP } from '../actions/sanPhamAction'

const SanPhamScreen = ({navigation}) => {
    //const navigation = useNavigation()
    const lstSP = useSelector((state)=>state.sanPham.listSanPham)
    const dispatch = useDispatch()

    useFocusEffect(
        React.useCallback(()=>{
            dispatch(getListSP())
        }, [dispatch])
    )

  return (
    <View style={{flex: 1}}>
              <TouchableOpacity onPress={()=>navigation.navigate("AddSanPham")}>
            <Text>Thêm sản phẩm</Text>
        </TouchableOpacity>
        <FlatList
            data={lstSP}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=><SanPhamItem sanPham={item}></SanPhamItem>}
        ></FlatList>
  
    </View>
  )
}

export default SanPhamScreen