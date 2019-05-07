import React, {Component} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'

class QuizView extends Component {
    state = {
        index:0,
        num_correct:0,
        num_incorrect:0,
        show_answer: false
    }
    Increment = (type, deck) => {
        let {index, num_correct, num_incorrect} = this.state;
        if (type ==='correct')
            num_correct = num_correct + 1
        else
            num_incorrect = num_incorrect + 1
        if ((deck.questions.length - index) === 1) {
            const percent = num_correct / deck.questions.length * 100
            clearLocalNotification()
                .then(setLocalNotification)
            this.props.navigation.replace('QuizScore',
                    {
                        percent: percent,
                        deck: deck,
                    })

        } else {
            this.setState({num_correct: num_correct, num_incorrect: num_incorrect, index: index+1})
        }
    }

    render() {
        const {deck} = this.props.navigation.getParam('deck')
        const {index, num_correct, num_incorrect, show_answer} = this.state
        return(<View>
                {(deck.questions.length === 0)
                ?
                    <View>
                    <Text> Please add a card to the deck </Text>
                    </View>
                : <View>
                    <Text>Question: {deck.questions[index].question}</Text>
                    <Button title = 'Show/Hide Answer' onPress = {() => this.setState({show_answer: !show_answer})}/>
                    <Text>{(show_answer) ? `Answer: ${deck.questions[index].answer}` : ''}</Text>
                    <View>
                        <Button title = 'Correct' onPress = {() => this.Increment('correct', deck)}/>
                        <Button title = 'Incorrect' onPress = {() => this.Increment('incorrect', deck)}/>
                    </View>
                    <Text>{deck.questions.length - (num_correct + num_incorrect + 1)} questions remaining</Text>
                    </View>
                }
                </View>
            )
    }
}
export default QuizView