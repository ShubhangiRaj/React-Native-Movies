import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Navigator
} from 'react-native';

import SearchMovies from './components/SearchMovies';
import DisplayMovieDetail from './components/DisplayMovieDetail';

export default class MoviesList extends Component {
    render(){
        return(
            <Navigator 
                initialRoute = {{name: 'SearchMovies'}}
                renderScene = {this.renderScene.bind(this)}
            />
        );
    }

    renderScene(route, navigator){
        if(route.name === 'SearchMovies'){
            return <SearchMovies navigator = {navigator} {...route.passProps}/>
        }
        if (route.name === 'DisplayMovieDetail'){
            return <DisplayMovieDetail navigator={navigator} {...route.passProps}/>
        }
    }
}

AppRegistry.registerComponent('MoviesList', () => MoviesList);

