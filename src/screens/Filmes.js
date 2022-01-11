import React from 'react';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,Alert } from 'react-native';
import {filmes} from '../data/filmes';

const Filmes = () => {
    return(
    <View style={estilos.container}>
    <Text style={estilos.header}>Meus Filmes</Text>
    <FlatList 
    horizontal
    showHorizontalScrollIndicator={false}
    data={filmes}
    renderItem={({item}) => (
    <TouchableOpacity onPress={() => Alert.alert('Filme selecionado',item.nome) }>
        <Image style={estilos.imagem} source={{uri:item.imgUrl}} />
    </TouchableOpacity>
        )}
    ItemSeparatorComponent={() => <View style={estilos.separador} /> }
    />
    </View>
    );
    };
    
    export default Filmes;
    
    const estilos = StyleSheet.create({
    container:{
    padding :5,
    flex:1,
    },
    header:{
    fontSize:35,
    color:'#010508',
    marginHorizontal:5,
    marginVertical:10,
    },
    imagem:{
    height:256,
    widht:152,
    },
    separador:{
    width:15,
    
    },
    });
    