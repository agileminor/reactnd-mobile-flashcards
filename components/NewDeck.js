import React, {Component} from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native'

class NewDeck extends Component {
    render() {
        return(
            <View>
                <Text>Title:</Text>
                <TextInput value='deck title goes here'/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView')}>
                    <Button title = 'Add Deck'/>
                </TouchableOpacity>
            </View>)
    }
}
export default NewDeck