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
						<Text>Coming Soon</Text>
					</TouchableHighlight>
				</View>
			);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
})