import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/TabNavigator';
import { Game } from './models/Game';

export type RootStackParamList = {
  GameDetails: { game: Game };
  // ... other screens and their params
};


function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App;
