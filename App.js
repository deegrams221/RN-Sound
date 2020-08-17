import { Audio } from 'expo-av';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Global
// colors
const listBackgroundColors = {
  1: '#3498DB',
  2: '#E8290B',
  3: '#AE1438',
  4: '#2475B0',
  5: '#30336B',
  6: '#0A3D62',
  7: '#25AE60',
  8: '#10A881',
  9: '#E74292',
  10: '#DFAF2B',
};

// sounds
const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav'),
};

export default class App extends React.Component {
  // method to play sound
  playSound = async (number) => {
    // create an object from the audio sound
    const soundObject = new Audio.Sound();

    // load the sound, get a playback status
    // see what the duration is of the playback
    // once the sound is done unload it from the system
    // catch any errors (for both the .then and the try)
    try {
      let path = soundList[number];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playbackDurationMillis);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gridContainer}>
          <Image style={styles.logo} source={require('./assets/logo.png')} />
          <ScrollView>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[1] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('one');
                }}
              >
                <Text style={styles.itemText}>One</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[2] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('two');
                }}
              >
                <Text style={styles.itemText}>Two</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[3] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('three');
                }}
              >
                <Text style={styles.itemText}>Three</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[4] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('four');
                }}
              >
                <Text style={styles.itemText}>Four</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[5] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('five');
                }}
              >
                <Text style={styles.itemText}>Five</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[6] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('six');
                }}
              >
                <Text style={styles.itemText}>Six</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[7] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('seven');
                }}
              >
                <Text style={styles.itemText}>Seven</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[8] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('eight');
                }}
              >
                <Text style={styles.itemText}>Eight</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[9] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('nine');
                }}
              >
                <Text style={styles.itemText}>Nine</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[
                  { backgroundColor: listBackgroundColors[10] },
                  styles.item,
                ]}
                onPress={() => {
                  this.playSound('ten');
                }}
              >
                <Text style={styles.itemText}>Ten</Text>
              </TouchableOpacity>
            </View>
            <Image style={styles.logo} source={require('./assets/logo.png')} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gridContainer: {
    flex: 1,
    margin: 5,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  itemText: {
    color: '#FFF',
    fontSize: 20,
  },
});
