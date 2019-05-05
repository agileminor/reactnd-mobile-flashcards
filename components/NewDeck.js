import React, {Component} from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

class NewDeck extends Component {
    state = {
        deck_title: ''
    }
    handleChange = (deck_title) => {

        this.setState(() => ({
            deck_title
        }))
    }
    handleSubmit = () => {
      const {dispatch} = this.props
        const {deck_title} = this.state
        //this.props.onAddDeck(new_deck)
        //TODO add storage of new deck
        dispatch(addDeck(deck_title))
        Keyboard.dismiss()
        this.props.navigation.navigate('DeckList')
    }
    render() {
        return(
            <View>
                 <TextInput
                        style={styles.textInput}
                        placeholder="Enter deck name here"
                        value={this.state.deck_title}
                        onChangeText={this.handleChange}
                        onBlur={Keyboard.dismiss}
                        maxLength={100}
                    />
                    <TouchableOpacity style={styles.saveButton} onPress={this.handleSubmit}>
                        <Text style={styles.saveButtonText}>Add Deck</Text>
                    </TouchableOpacity>
            </View>)
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
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    }
})
export default connect()(NewDeck)