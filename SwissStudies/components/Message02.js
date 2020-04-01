import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Message02 extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
        
    return (
      <View style={styles.element_container}>
        <View style={styles.element}>
          <Text style={styles.element_texte}>{this.props.message}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  element_container: {
    flex:1,
    justifyContent: "flex-end",
  },
  element: {
    margin: 5,
    marginTop: 20,
    padding: 5,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,

  },
  element_texte: {
    fontSize: 25,
    fontWeight: 300,
    textAlign: 'center',
  },
});
