import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Deck from './Deck'

class DeckList extends Component {
    state = {
        decks: [
            {
                title: 'React',
                questions: [
                  {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                  },
                  {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                  }
                ]
              },
             {
                title: 'JavaScript',
                questions: [
                  {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                  }
                ]
              }
        ]
    }
    render () {
        return (
            <View>
            {this.state.decks.map((deck) => (
                <Deck key= {deck.title} navigation= {this.props.navigation} deck={deck} />
                ))
            }
            </View>
            )
    }
}

export default DeckList