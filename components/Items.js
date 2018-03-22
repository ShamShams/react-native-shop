import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class Items extends React.Component {
    render() {
        return (
            <ScrollView>
                { this.props.data.map((item, i) =>
                    <Card
                        key={i}
                        image={{uri:item.imgUrl}}
                    >
                        <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center'}}>
                            {item.name}
                        </Text>
                        <Text style={{marginBottom: 10, fontSize: 17, textAlign: 'center'}}>
                            {item.price} €
                        </Text>
                        <Button
                            backgroundColor='#ac4d59'
                            title='I WANT IT !'
                        />
                    </Card>
                )}
            </ScrollView>
        );
    }
}
