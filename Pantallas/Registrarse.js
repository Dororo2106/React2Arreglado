import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView,Button, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Regis () {

    return( 
      <View style={styles.container}>
 
      <div style={styles.title}>
      <h1>Registrarse</h1>
      <TextField id="Nombre" label="Nombre" variant="outlined" fullWidth  margin="normal"  />
      <TextField id="Correo" label="Correo" variant="outlined" fullWidth  margin="normal" />
      <TextField id="Contraseña" label="Contraseña" variant="outlined" fullWidth  margin="normal" />
      <TextField id="CContraseña" label="Confirmar Contraseña" variant="outlined" fullWidth  margin="normal" />


 </div>
 <button id="botonR" type="button" style={styles.boton1}  >
      <text>Registrarse</text>

  </button>


      </View> 
    )


}


const styles = StyleSheet.create({
    container: 
    {
      padding: 450,
      flexDirection:"column",
      flex: 1,
      backgroundColor: '#E8EDE7',
      alignItems:"center",
      justifyContent: "center",
    },
    title:
    {
      color: "#000000" ,
      fontStyle: "italic",
      fontSize: 36,
      fontFamily: 'Monospace',
      margin: 140
    },
    boton1: {
      border : -2,
      width: 250,  
      borderColor: "#085483",
      lineHeight: -25,
      padding:10,
      fontSize: 18,
      textAlign: "center",
      color:"#FFFFFF  ",
      borderRadius: 30,
      marginBottom: -640,
      backgroundColor:"#085483",
      position:"absolute",
    
      
    }
 


   
  });

  export default Regis