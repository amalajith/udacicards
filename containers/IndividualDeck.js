import React, { Component } from 'react'
import { View, Text } from 'react-native'

class IndividualDeck extends Component {
    render(){
        return(
            <View>
                <Text>{this.props.navigation.state.params.cardItem.title}</Text>
            </View>
        )
    }
}

export default IndividualDeck