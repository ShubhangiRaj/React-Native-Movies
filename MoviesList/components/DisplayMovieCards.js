import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ScrollView
} from 'react-native';

export default class DisplayMovieCards extends Component{
	render(){
		return(
				<ScrollView style={styles.container}>
					<Text style={styles.titleText}>
						{this.props.originalTitle}
					</Text>
					<Text style={styles.overviewText}>
						{this.props.overview}
					</Text>
				</ScrollView>
			);
	}
}

const styles = StyleSheet.create({
	container:{
		marginLeft: 30,
		marginRight: 30,
        marginBottom:10,
        textAlign: 'left'
	},
	titleText:{
		fontSize:18
	},
	overviewText:{
		marginTop:5,
		fontSize:16
	}

});