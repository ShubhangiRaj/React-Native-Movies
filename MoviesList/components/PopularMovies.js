import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableHighlight
} from 'react-native';


export default class PopularMovies extends Component{
	render(){
		return(
				<View style = {styles.container}>
					<TouchableHighlight style = {styles.button}>
						<Text>CLICK to know POPULAR MOVIES</Text>
					</TouchableHighlight>
				</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		margin: 10
	},
	button:{
		borderWidth: 2,
		backgroundColor: '#ddd'
	}
})