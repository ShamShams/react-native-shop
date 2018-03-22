import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

// Custom Component
import Items from './Items';
import Basket from './Basket';

import items from './data';

export default class Shop extends React.Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Pashmina Style', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    backgroundColor={'#ac4d59'}
                />
                <Items data={items}/>
                <Basket/>
            </View>
        )
    }
}
