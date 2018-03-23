import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const Basket = ({ data }) => (
    <View>
        <Text style={ styles.sectionTitle }>PANIER</Text>
        <List style={{ marginBottom: 40 }}>
            { data.map((item, i) =>
                <ListItem
                    key={i}
                    roundAvatar
                    title={ item.name }
                    subtitle={ `${ item.price } €` }
                    avatar={{ uri: item.imgUrl }}
                />
            )}
        </List>
    </View>
);

export default Basket;

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#C4A181',
        marginTop: 10
    }
});
