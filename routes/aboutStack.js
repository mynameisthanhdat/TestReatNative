import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
            }
        }
    }
}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee'},
        // headerTintColor: '#444'
    }
});

export default AboutStack;