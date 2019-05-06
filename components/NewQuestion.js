import React, {Component} from 'react'
import { StyleSheet, Text, View, Button, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import {addCardToDeck} from '../utils/api'

class NewQuestion extends Component {
    state = {
        question: '',
        answer: ''
    }
    handleChangeQ = (question) => {
        this.setState(() => ({
            question
        }))
    }
    handleChangeA = (answer) => {
        this.setState(() => ({
            answer
        }))
    }
    handleSubmit = () => {
        const {dispatch} = this.props
        const {question, answer} = this.state
        const {deck} = this.props.navigation.getParam('deck')
        const new_question = {
            question: question,
            answer: answer
        }
        dispatch(addQuestion(deck.title, new_question))
        addCardToDeck(deck.title, new_question)
        //TODO add storage of updated deck
        Keyboard.dismiss()
        this.props.navigation.goBack()
    }
    render() {
        const {deck} = this.props.navigation.getParam('deck')
        return(
            <View>
                <TextInput
                        style={styles.textInput}
                        placeholder="Put question here"
                        value={this.state.question}
                        onChangeText={this.handleChangeQ}
                        maxLength={100}
                    />
                <TextInput
                        style={styles.textInput}
                        placeholder="Put answer here"
                        value={this.state.answer}
                        onChangeText={this.handleChangeA}
                        maxLength={100}
                    />
                    <TouchableOpacity style={styles.saveButton} onPress={this.handleSubmit}>
                        <Text style={styles.saveButtonText}>Add Question</Text>
                    </TouchableOpacity>
            </View>)
    }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
      },
      header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
      },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    }
})
export default connect()(NewQuestion)