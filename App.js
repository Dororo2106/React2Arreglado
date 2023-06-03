import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Pantallas/Inicio';
import { Button } from 'react-native-web';
import Regis from './Pantallas/Registrarse';
//import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ImageBackground} from 'react-native';
import Sesion from './Pantallas/Sesion';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



const Stack = createNativeStackNavigator();


export default function App ()
{
  return (
  /*  <NavigationContainer>
      <Stack.Navigator initialRouteName='Registrarse'>
        <Stack.Screen name='Inicio' component={Inicio} />
        <Stack.Screen name='Registrarse' component={Regis} />
      </Stack.Navigator>
    </NavigationContainer>*/
    

        <Router>
          <div className="App" style={styles.header} >
    <br></br><br></br>
    <button style={styles.boton1}>
		  <Link to="/" >Inicio</Link>
    </button>

	<button style={styles.boton2}>
		<Link to="/Registrarse">Registrarse</Link>
	</button>
  <button style={styles.boton3}>
		<Link to="/IniciarSesion">Sesion</Link>
	</button>
            <Routes>
                 <Route exact path='/' element={< Inicio />}></Route>
                 <Route exact path='/Registrarse' element={< Regis />}></Route>
                 <Route exact path='/IniciarSesion' element={< Sesion />}></Route>

          </Routes>
</div>

        </Router>
      
      
      
      


  )
  
}

const styles = StyleSheet.create({
  header:
  {
    
  },
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
    fontSize: 30
  },
  Image:
  {
    width:150,
    height: 150,
    top:-358,
    position: "relative"

  },
  imagen: {
    width:450,
    height: 950,
    position:"absolute"
  },
  boton1: {
    border : -2,
    width: 100,
    height:-100,  
    borderColor: "#EEC3FF",
    lineHeight: -25,
    padding:5,
    fontSize: 12,
    textAlign: "center",
    color:"#EEC3FF",
    borderRadius: 30,
    marginBottom: -1,
    backgroundColor:"transparent",
    position:"absolute",
    marginLeft:100,
    marginTop:-40
  },
  boton2: {
    border : -2,
    width: 100,
    height:-100,  
    borderColor: "#EEC3FF",
    lineHeight: -25,
    padding:5,
    fontSize: 12,
    textAlign: "center",
    color:"#EEC3FF",
    borderRadius: 30,
    marginBottom: -1,
    backgroundColor:"transparent",
    position:"absolute",
    marginLeft:-0,
    marginTop:-40
  },
  circulo:{
    height:150,
    width:150,
    backgroundColor:"#EEC3FF",
    borderRadius:100,
    margin:210,
    marginTop:-208,
    position: "relative"
  },
  boton3: {
    border : -2,
    width: 100,
    height:-100,  
    borderColor: "#EEC3FF",
    lineHeight: -25,
    padding:5,
    fontSize: 12,
    textAlign: "center",
    color:"#EEC3FF",
    borderRadius: 30,
    marginBottom: -1,
    backgroundColor:"transparent",
    position:"absolute",
    marginLeft:200,
    marginTop:-40
  },
});


