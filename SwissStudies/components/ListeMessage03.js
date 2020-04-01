import * as React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';


const UnMessage = props => <View style={styles.element}>
      <Text  style={styles.element_texte}>{props.message}</Text>
    </View>

export default class ListeMessage02 extends React.Component {
  constructor(props){
     super(props);
   }

  render() {   
    return (
      <FlatList 
        style={styles.element_container}
        data={this.props.messages}
        renderItem={({ item }) => <UnMessage message={item.texte} />}
      />      
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
