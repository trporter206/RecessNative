import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Game, gamesList } from '../models/Game';
import GameListItem from '../components/gameListItem';

function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Games</Text>
      <FlatList
        data={gamesList}
        renderItem={GameListItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Explore;
