import * as React from 'react';
import { Text, View, StyleSheet,Button,Alert,TouchableOpacity } from 'react-native';


export default class ChoiceBoxAccueil extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      //<View style={styles.element_container}>
        //<Button
          //style={styles.element}
          //buttonstyle={styles.element}
          //title={this.props.message}
          //onPress={() => Alert.alert('Bouton '+ this.props.message +" cliqué.")}
        ///>
      //</View>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Bouton '+ this.props.message +" cliqué.")}>
        <Text style={styles.texte}>{this.props.message}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  button:{
    minHeight: '30%',
    //maxHeight:300,
    shadowColor: 'rgba(0,0,0, .5)', // IOS
    shadowOffset: { height: 12, width: 12 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 1, //IOS
    alignItems: "center",
    backgroundColor: "#bff4ff",
    borderRadius:20,
    //alignSelf:'center',
    alignItems: 'center',
    justifyContent:'center',

  },
  texte: {
    fontSize:20,
    fontFamily: "Helvetica Neue",
    fontWeight: "900",
	  color: '#212121',
	  textAlign: 'center'
  },
});
