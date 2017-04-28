import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions
} from 'react-native';

export default class DisplayMovieDetail extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>
					Movie title {this.props.movieDetails.originalTitle}
				</Text>
				<Text>
					Overview {this.props.movieDetails.overview}
				</Text>
			</View>
		);
	}
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		margin: 10
	},
	input:{
		width,
		height: 50
	}
});