import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

import App from './components/App';

export default class MoviesList extends Component {
    render(){
        return(
                <View>
                    <App/>
                </View>
            )
    }
}

AppRegistry.registerComponent('MoviesList', () => MoviesList);
