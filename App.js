import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Custom Components
import Shop from './components/Shop';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Shop/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
