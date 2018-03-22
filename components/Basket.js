import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Basket extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>BASKET</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 5,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'skyblue'
    }
})
