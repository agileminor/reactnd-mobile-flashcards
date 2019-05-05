import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DeckView from './DeckView'

class Deck extends Component {
    render() {
        const {deck} = this.props
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView',
                    {
                        deck:{deck}
                    })}>
                    <Text>{deck.title} - {deck.questions.length} cards</Text>
                </TouchableOpacity>
            </View>
            )
    }
}
export default Deck