import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Game } from '../models/Game'; // Assuming this is the correct path

interface GameDetailsRouteParams {
  game: Game;
}

interface GameDetailsProps {
  route: {
    params: GameDetailsRouteParams;
  };
}

const GameDetails = ({ route }: GameDetailsProps) => {
  const { game } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.name}</Text>
      <Text>Date: {game.date}</Text>
      <Text>Time: {game.time}</Text>
      <Text>Sport Type: {game.sportType}</Text>
      <Text>Description: {game.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default GameDetails;
