import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard';
import Profile from '../screens/profile';
import Explore from '../screens/explore';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Dashboard"
          component={Dashboard} 
        />
        <Tab.Screen
          name="Explore" 
          component={Explore}
        />
        <Tab.Screen
          name="Profile" 
          component={Profile}
        />
      </Tab.Navigator>
    );
  }
  
  

export default TabNavigator;
