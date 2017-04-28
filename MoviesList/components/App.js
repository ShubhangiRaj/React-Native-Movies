import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

// import SearchMovies from '../components/SearchMovies';
import MainDisplay from '../components/MainDisplay';

export default class App extends Component{
	render(){
		return(
				<View>
					<MainDisplay/>
				</View>
			);
	}
}