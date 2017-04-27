import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

export default class DisplayMovieCards extends Component{
	render(){
		return(
				<View>
					<Text>
						{this.props.originalTitle}
					</Text>
					<Text>
						{this.props.overview}
					</Text>
				</View>
			);
	}
}

