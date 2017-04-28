import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

// import SearchMovies from '../components/SearchMovies';
import SearchMovies from '../components/SearchMovies';
import NowPlaying from '../components/NowPlaying';
import PopularMovies from '../components/PopularMovies';

export default class MainDisplay extends Component{
	render(){
		return(
			<View>
				<SearchMovies />
				<NowPlaying/>
				<PopularMovies/>
			</View>
		);
	}
}