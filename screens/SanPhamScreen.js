import React from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SanPhamItem from './SanPhamItem'
import { useFocusEffect } from '@react-navigation/native'
import { getListSP } from '../actions/sanPhamAction'

const SanPhamScreen = () => {
    const lstSP = useSelector((state)=>state.sanPham.listSanPham)
    const dispatch = useDispatch()

    useFocusEffect(
        React.useCallback(()=>{
            dispatch(getListSP())
        }, [dispatch])
    )

  return (
    <View>
        <FlatList
            data={lstSP}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=><SanPhamItem sanPham={item}></SanPhamItem>}
        ></FlatList>
    </View>
  )
}

export default SanPhamScreen