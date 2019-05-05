export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck_id) {
  return {
    type: ADD_DECK,
    deck_id,
  }
}

export function addQuestion (deck_id, question) {
    return {
        type: ADD_QUESTION,
        deck_id,
        question
    }
}

