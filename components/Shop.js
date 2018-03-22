import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Items from './Items';
import Basket from './Basket';

export default class Shop extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SHOP</Text>
                <Items/>
                <Basket/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 550,
        padding: 20,
        backgroundColor: 'powderblue',
        borderColor: 'black',
        borderWidth: 1,
    },
    sections: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})
