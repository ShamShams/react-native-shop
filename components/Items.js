import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

import Item from './Item';
import Basket from './Basket';

const Items = ({ data, name, price, image, addItem }) => (
    <View>
        <Text style={ styles.sectionTitle }>COLLECTION GOLDEN</Text>
        { data.map((item, i) =>
            <Item
                key={i}
                item={ item }
                addItem={ addItem }
            />
        )}
    </View>
);

export default Items;

const styles = StyleSheet.create({
    sectionTitle: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        color: '#C4A181',
    }
});
