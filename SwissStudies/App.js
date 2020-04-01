/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ChoiceBoxAccueil from './components/ChoiceBoxAccueil.js';

const App: () => React$Node = () => {
  return (
    <>
    <SafeAreaView style={styles.SafeView}>
      <View style={styles.View}>
        <ChoiceBoxAccueil style={flex=1} message="Consulter mes bulletins"/>
        <ChoiceBoxAccueil style={flex=1} message="Consulter mes données personnelles"/>
      </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  SafeView: {
    flex:1,
    backgroundColor: "#212121",
  },
  View: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 40,
  }
});

export default App;
