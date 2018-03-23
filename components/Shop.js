import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

// Custom Component
import Item from './Item';
import Basket from './Basket';

import items from './data';

export default class Shop extends React.Component {
    state = {
        purchases: []
    };

    addItem = (list, item) => {
        this.setState({
            purchases: [...list, item]
        })
    }

    render() {
        const { purchases } = this.state;

        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MAISONS DU MONDE', style: { color: '#fff' } }}
                    backgroundColor={'#C4A181'}
                />

                { purchases.length != 0 && <Basket data={ purchases }/> }

                <Text style={ styles.sectionTitle }>COLLECTION GOLDEN</Text>
                { items.map((item, i) =>
                    <Item
                        key={i}
                        item={ item }
                        addItem={ () => this.addItem(purchases, item) }
                    />
                )}
            </View>
        )
    }
}

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
