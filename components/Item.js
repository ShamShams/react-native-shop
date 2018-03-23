import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

const Item = ({ item, addItem }) => (
    <Card image={{ uri: item.imgUrl }}>
        <Text style={ styles.itemName }>
            { item.name }
        </Text>
        <Text style={ styles.itemPrice }>
            { item.price } €
        </Text>
        <Button
            backgroundColor='#C4A181'
            title='AJOUTER AU PANIER'
            onPress={ addItem }
        />
    </Card>
);

export default Item;

const styles = StyleSheet.create ({
    itemName: {
        marginBottom: 3,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    itemPrice: {
        marginBottom: 10,
        color: '#C4A181',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
