import { StyleSheet, Text, View } from 'react-native'

export default function Creditos() {
    return (
        <View styles={styles.container}>
            <Text style={styles.texto}>IFNMG - Instituto Federal Norte de Minas Gerais - Campus Pirapora 2022.
            </Text>
        </View>
    )
};

export default Creditos;

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'white',
        alignItens:'center',
        justifyContent:'center',
    },
    texto:{
        fontSize:20,
        fontFamily:'arial',
        color:'green',
    },
});
