import {StatusBar} from 'expo-status-bar';
import {StyleSheet,Text,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'; 

const Login = () => {
return(
<SafeAreaView>
<Text style={estilos.label}> Login</Text>
<TextInput style ={estilos.input}placeholder='Digite seu email'/>
<Text style={estilos.label}>Digite  a senha </Text>
<TextInput style ={estilos.input}placeholder='Digite a senha '/>
<TouchableOpacity style={styles.botaoOpacity} activeOpacity={0.5}>
            <Text>Entrar</Text>
        </TouchableOpacity>
</SafeAreaView>
);
};

export default Login;

const styles= StyleSheet.create({
label:{
color:'white',
},
input:{
color :'black',
backgrounColor:'#E5E7EB',
padding:10,
borderRadius:10,
marginTop:10,
},
botaoOpacity:{
    marginTop:10,
    backgroundColor:'blueviolet',
    borderRadius:10,
    padding:5,
},
});
