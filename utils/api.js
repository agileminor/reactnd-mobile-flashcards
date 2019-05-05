import {AsyncStorage} from 'react-native'

export function getDeck(deck_name) {
    return AsyncStorage.getItem('flashcard-decks')
        .then((results) => {
            const data = JSON.parse(results)
            return data[deck_name]
        })
}

export function saveDeck(deck) {
    return AsyncStorage.mergeItem('flashcard-decks', JSON.stringify({
        [deck.title]: deck,
    }))
}

function dummyDeck() {
    const empty_decks = {}
    return empty_decks
}

function formatDecks(results) {
    return results
}

export function getDecks() {
    return AsyncStorage.getItem('flashcard-decks')
        .then((results) => {
            return results === null
            ? dummyDeck()
            : formatDecks(JSON.parse(results))
        })
}