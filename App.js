import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Pantallas/Inicio';
import { Button } from 'react-native-web';
import Regis from './Pantallas/Registrarse';
//import 'react-native-gesture-handler';
import React from 'react';


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
          <div className="App">
	<ul>
	<li>
		<Link to="/">Inicio</Link>
	</li>

	<li>
		<Link to="/Registrarse">Registrarse</Link>
	</li>
	</ul>
  <Routes>
                 <Route exact path='/' element={< Inicio />}></Route>
                 <Route exact path='/Registrarse' element={< Regis />}></Route>
          </Routes>
</div>

        </Router>
      
      
      
      


  )
  
}


