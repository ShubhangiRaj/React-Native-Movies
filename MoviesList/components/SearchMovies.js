import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TextInput,
    Dimensions
} from 'react-native';

export default class SearchMovies extends Component{
	render(){
		return(
				<View style={styles.container}>
					<TextInput placeholder="Search Movies" style={styles.input}></TextInput>
				</View>
			);
	}
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
	container:{
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ddd'
	},
	input:{
		width,
		height: 50
	}
});