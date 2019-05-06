import {AsyncStorage} from 'react-native'

export function getDeck(deck_name) {
    return AsyncStorage.getItem('flashcard-decks')
        .then((results) => {
            const data = JSON.parse(results)
            return data[deck_name]
        })
}

export function saveDeck(deck_title) {
    return AsyncStorage.mergeItem('flashcard-decks', JSON.stringify({
        [deck_title]: {title: deck_title, questions: []}
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

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem('flashcard-decks')
        .then((results) => {
            const decks = JSON.parse(results)
            let deck = decks[title]
            const new_deck = {[title]: deck}
            deck.questions = deck.questions.concat(card)
            AsyncStorage.mergeItem('flashcard-decks', JSON.stringify(
                new_deck))
        })
}

export function clearStorage() {
    return AsyncStorage.removeItem('flashcard-decks')
}