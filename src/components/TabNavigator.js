import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-Icons';
import Login from '../screens/Login';
import Filmes from '../screens/Filmes';
import Creditos from '../screens/Creditos';

const Tab = createBottonTabNavigator();

const TabNavigator = () => {
return (
<Tab.navigator InitialRouteName="Login" 
screenOptions={{ 
headerShown:false,
tabBarActiveTintColor:'coral', 
tabBarInactiveTintColor:'darkseagreen', 
tabBarStyle:{
backgroundColor:'#F7FEE7',
},
}}
>
<Tab.Screen 
name="Login" 
component={Login} 
options={{
tabBarIcon:({color,focused}) => (
<Ionicons 
name={focused ? 'person' : 'person-outline'} 
Size={24} 
color={color}
/>
),
}}
/> 

<Tab.Screen 
name="Filme" 
component={Filme} 
options={{
tabBarIcon:({color,focused}) => (
<View 
style={[styles.filmeIconContainer,
focused && styles.filmeIconContainerFocused]}
>
<Ionicons name={focused ? 'Film' : 'film-outline'}
 Size={40}
 color={color}
/>
</View>
),
tabBarLabel:'',
}}
/>
<Tab.Screen 
name="Creditos" 
component={Creditos} 
options={{
tabBarIcon:({color,focused}) => (
<Ionicons name={focused ? 'information' : 'information-outline'}
 Size={24} 
color={color}/>
),
}}/>

</Tab.navigator>

)
}
export default TabNavigator;

const styles = StyleSheet.create({
filmeIconContainer:{
backgroundColor:'#F7FEE7',
borderColor:'darkseagreen',
borderWidth:1,
borderRadius:58,
padding:10,
marginTop:5,
width:65,
hight:65,
alignItens:'center',
},
filmeIconContainerFocused:{
borderColor:'coral',
},

});


