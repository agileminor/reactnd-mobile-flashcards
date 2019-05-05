import React, {Component} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
class QuizScore extends Component {
    render() {
        const {percent, deck} = this.props.navigation.state.params
        return(
            <View>
                <Text>Score: {percent} %</Text>
                <View>
                    <Button title = 'Decks' onPress={() => this.props.navigation.replace('Home')}/>
                    <Button title = 'Restart Quiz' onPress={() => this.props.navigation.navigate('QuizView',
                        {
                            deck:{deck}
                        })
                    }
                    />
                </View>
            </View>)
    }
}
export default QuizScore