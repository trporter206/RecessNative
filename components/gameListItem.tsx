import { Image, StyleSheet, Text, View } from "react-native";
import { Game } from "../models/Game";

function getSportIcon(sportType: String) {
    switch (sportType) {
      case 'pickleball':
        return require('../graphics/tennisIcon.png'); // replace with your actual icon path
      case 'tennis':
        return require('../graphics/tennisIcon.png'); // replace with your actual icon path
      case 'basketball':
        return require('../graphics/basketballIcon.png'); // replace with your actual icon path
      default:
        return require('../graphics/tennisIcon.png'); // default icon
    }
  }

function GameListItem({ item }: { item: Game }) {
    return (
      <View style={styles.gameItem}>
        <Image source={getSportIcon(item.sportType)} style={styles.icon} />
        <View style={styles.gameInfo}>
          <Text style={styles.gameText}>{item.sportType}</Text>
          <Text style={styles.gameText}>{item.name}</Text>
          <Text style={styles.gameText}>{item.time}</Text>
        </View>
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
    gameItem: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    gameInfo: {
      flexDirection: 'column',
      marginLeft: 20, // added margin to separate text from the image
    },
    icon: {
      width: 50,
      height: 50,
    },
    gameText: {
      fontSize: 16,
    },
  });

  export default GameListItem;