import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
    render() {
        const {deck_id} = this.props.navigation.getParam('deck_id')
        const {decks} = this.props
        const deck = decks[deck_id]
        return (
            <View>
                <Text style={styles.basicText}>{deck.title}</Text>
                <Text style={styles.basicText}>{deck.questions.length} cards</Text>
                <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('NewQuestion',
                    {
                        deck:{deck}
                    })
                    }
                    style={styles.Button}
                >
                    <Text style={styles.ButtonText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('QuizView',
                    {
                        deck:{deck}
                    })}
                    style={styles.Button}
                >
                    <Text style={styles.ButtonText}>Start Quiz</Text>
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
export default connect(mapStateToProps)(DeckView)