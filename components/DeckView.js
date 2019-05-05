import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class DeckView extends Component {
    render() {
        const {deck} = this.props.navigation.getParam('deck')
        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length} cards</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewQuestion',
                    {
                        deck:{deck}
                    })
                }>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('QuizView',
                    {
                        deck:{deck}
                    })
                }>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
                <Text>Delete Deck</Text>
            </View>
            )
    }
}
export default DeckView