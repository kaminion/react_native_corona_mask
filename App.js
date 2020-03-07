import React from 'react';
import Home from './views/Home';
import Announce from './views/Announce';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
      >
          <Tab.Screen name="Home" options={{
            tabBarLabel: "마스크 판매지도"
          }} 
          component={Home} ></Tab.Screen>
          <Tab.Screen name="maskFive" component={Announce}
            options={{
              tabBarLabel: "마스크 5부제란?"
            }}
          ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>

  );
};


export default App;
