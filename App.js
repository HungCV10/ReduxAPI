import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store'
import SanPhamScreen from './screens/SanPhamScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddSanPham from './screens/AddSanPham';
import EditSanPham from './screens/EditSanPham';

const Stack = createStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SanPham'>
          <Stack.Screen name='SanPham' component={SanPhamScreen}></Stack.Screen>
          <Stack.Screen name='AddSanPham' component={AddSanPham}></Stack.Screen>
           <Stack.Screen name='editSanPham' component={EditSanPham}></Stack.Screen>
        </Stack.Navigator>
        {/* <SanPhamScreen></SanPhamScreen> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
