import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class ListeMessage01 extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
        
    const contenu = this.props.messages.map(m=>
      <View style={styles.element}>
        <Text  style={styles.element_texte}>{m}</Text>
      </View>
    )
    return (
      <View style={styles.element_container}>
        {contenu}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  element_container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: 'yellowgreen',    
  },
  element: {
    margin: 5,
    padding:5,
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
