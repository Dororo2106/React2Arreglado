import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView,Button, ImageBackground} from 'react-native';
import img from '../Pantallas/Logo.png';
import imagen from '../assets/fondo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Regis from './Registrarse.js';


function Inicio () {

  return(

    <View style={styles.container}>
    <StatusBar style="auto" />

  <Image
    source={imagen}
    style={styles.imagen}
  />

<Button
          title="Add some friends"
          onPress={() =>
            navigation.navigate(Regis)
          }
        />


  <button id="botonR" type="button" style={styles.boton1}  onPress={() =>  this.props.navigation.navigate('Registrarse')}
>     
      <text>Registrarse</text>
  </button>

  <button id="botonIS" type="button" style={styles.boton2} >
      <text>Iniciar Sesión</text>
  </button>


<html>
    <div id="circulo" style={styles.circulo} > </div>
</html>    


<Image
  source={img}
  style={styles.Image}
/>


  </View>
  )
}


const styles = StyleSheet.create({
    container: 
    {
      padding: 450,
      flexDirection:"column",
      flex: 1,
      backgroundColor: '#010B1C',
      alignItems:"center",
      justifyContent: "center"
    },
    title:
    {
      color: "#2C3E50" ,
      fontStyle: "italic",
      fontSize: 60
    },
    Image:
    {
      width:150,
      height: 150,
      top:-207,
      position: "relative"
  
    },
    imagen: {
      width:450,
      height: 950,
      position:"absolute"
    },
    boton1: {
      border : -2,
      width: 200,  
      borderColor: "#EEC3FF",
      lineHeight: -25,
      padding:10,
      fontSize: 18,
      textAlign: "center",
      color:"#EEC3FF",
      borderRadius: 30,
      marginBottom: -110,
      backgroundColor:"transparent",
      position:"absolute",
    },
    boton2: {
      border : -2,
      width: 200,  
      borderColor: "#004290",
      lineHeight: -25,
      padding:10,
      fontSize: 18,
      textAlign: "center",
      color:"#004290",
      borderRadius: 30,
      marginBottom: -10,
      backgroundColor:"#EEC3FF",
      position:"absolute"
    },
    circulo:{
      height:150,
      width:150,
      backgroundColor:"#EEC3FF",
      borderRadius:100,
      margin:210,
      marginTop:-208,
      position: "relative"
    }
   
  });

  
  export default Inicio
