import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

export default function decks ( state={}, action) {
    switch(action.type) {
        case RECEIVE_DECKS :
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck_id]: {
                    title: action.deck_id,
                    questions: []
                }
            }
        case ADD_QUESTION:
            const {deck_id, question } = action
            let updated_questions = state[deck_id].questions.concat(question)
            let updated_deck = {
                ...state[deck_id],
                questions: updated_questions
            }
            return {
                ...state,
                [deck_id]: updated_deck,
            }
        default:
            return state
    }
}