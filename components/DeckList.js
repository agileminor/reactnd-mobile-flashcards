import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationEvents} from 'react-navigation'
import Deck from './Deck'
import {getDecks} from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

class DeckList extends Component {
    state = {
        decks:{
            'React': {
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
              }
            }
        };

    updateDecks = () => {
        getDecks().then(decks => {
            this.setState({
                decks: decks
            })
        })
    };
    componentDidMount () {
        const { dispatch } = this.props
        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
    }
    render () {
        const {decks} = this.props;
        console.log('in decklist')
        console.log(decks)
        return (
            <View>
            {/*
                <NavigationEvents
                    onWillFocus = {payload => {
                        console.log("will focus", payload)
                    }}
                />
            */}
            {Object.keys(decks).map((deck_id) => (
                <Deck key= {decks[deck_id].title} navigation= {this.props.navigation} deck={decks[deck_id]} />
                ))
            }
            </View>
            )
    }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(DeckList)
