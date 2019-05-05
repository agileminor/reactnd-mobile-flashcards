import React, {Component} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

class NewQuestion extends Component {
    render() {
        const {deck} = this.props.navigation.getParam('deck')
        return(
            <View>
                <Text>Question:</Text>
                <TextInput value='question goes here'/>
                <Text>Answer:</Text>
                <TextInput value='answer goes here'/>
                <Button title = 'Add Question'/>
            </View>)
    }
}
export default NewQuestion