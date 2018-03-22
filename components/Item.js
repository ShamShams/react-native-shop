import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Item extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ITEM</Text>
                <Text>{ this.props.name }</Text>
                <Text>{ this.props.price } €</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        width: 100,
        height: 80,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
