import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

export default class DisplayMovieDetail extends Component{
	constructor(props) {
        super(props);
        this.state = {
            originalTitle: this.props.originalTitle,
            overview: this.props.overview
        };
    }
	render(){
		return(
			<View>
				<Text>
					Movie title: {this.props.originalTitle}
				</Text>
				<Text>
					Overview: {this.props.overview}
				</Text>
			</View>
		);
	}
}