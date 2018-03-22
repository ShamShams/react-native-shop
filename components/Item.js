import React from 'react';
import { Card } from 'react-native-elements';

export default class Item extends React.Component {

    render() {
        return (
            <Card
                title={}
                image={require('../images/pic2.jpg')}
            >
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
                <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW'
                />
            </Card>
        );
    }

}
