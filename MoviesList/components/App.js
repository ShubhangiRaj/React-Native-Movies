import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');

// import SearchMovies from '../components/SearchMovies';
import MainMovieList from '../components/MainMovieList';
import NowPlaying from '../components/NowPlaying';
import PopularMovies from '../components/PopularMovies';

export default class App extends Component{
	render(){
		return(
			<ScrollableTabView>
		        <MainMovieList tabLabel="Main" />
		        <NowPlaying tabLabel="Mid" />
		        <PopularMovies tabLabel="Right" />
		    </ScrollableTabView>
		);
	}
}