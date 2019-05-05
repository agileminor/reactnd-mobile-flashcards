import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DeckView from './DeckView'
import { connect } from 'react-redux'

class Deck extends Component {
    render() {
        const {deck} = this.props
        const deck_id = deck.title
        return (
            <View>
                <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('DeckView',
                    {
                        deck_id:{deck_id}
                    })}>
                    <Text style={styles.ButtonText}>{deck.title} - {deck.questions.length} cards</Text>
                </TouchableOpacity>
            </View>
            )
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
      },
      header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
      },
    basicText: {
        color: '#292477',
        fontSize:20
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    Button: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    ButtonText: {
      color: '#FFFFFF',
      fontSize: 15,
      textAlign: 'center'
    }
})
function mapStateToProps (decks) {
  return {
    decks
  }
}
export default connect(mapStateToProps)(Deck)