import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Item from './Item';

export default class Items extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ITEMS</Text>
                <Item/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 5,
        width: 170,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'skyblue'
    }
})
