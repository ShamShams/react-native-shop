import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Item from './Item';
import itemsList from '../assets/items';

export default class Items extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text>ITEMS</Text>
                <View style={ styles.items }>
                    { itemsList.map((item) =>
                        <Item name={ item.name } price={ item.price }/>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 5,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'skyblue'
    },
    items: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
})
