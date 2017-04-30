import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TextInput,
    Dimensions,
    TouchableHighlight
} from 'react-native';

import DisplayMovieDetail from '../components/DisplayMovieDetail'

export default class SearchMovies extends Component{
	

	constructor(props){
		super(props);
		this.state = {
			searchText: '',
			movieSearched: '',
			movieDetails:{
				originalTitle: '',
				overview: ''
			}
		};
	}

	onSubmitPressed(){
		const movieSearched = this.state.searchText;

		// this.setState({
		// 	movieSearched: "You searched for " + movieSearched
		// });

		// Fecth API to get data from the TMDB API 
		fetch("https://api.themoviedb.org/3/search/movie?query=" + movieSearched + "&api_key=466839c4d8544152a58da0ad13d38545&append_to_response=videos,images")
				.then((response) => response.json())
				.then((responseJSON) => this._navigate(JSON.stringify(movieSearched)))
				.catch((error) => {
	                console.warn(error);
	            });

	}

	_navigate(responseJSON) {
		// this.props.navigator.push({
		//     id: 'DisplayMovieDetail',
		//    	passProps: {
  //       		movieSearched: this.state.movieSearched,
  //       		movieDetails: {
  //       			originalTitle:  responseJSON.results[0].release_date,
  //       			overview: responseJSON.results[0].overview
  //       		}
  //       	}
		// })
		alert(responseJSON);
	}

	render(){

		return(
			<View style={styles.container}>
				<TextInput 
					placeholder="Search movie" 
					style={styles.input}
					onChange={(event) => {
						movieText = event.nativeEvent.text;
						console.log(movieText);
						this.setState({"searchText" : movieText});
					}}
				/>

				<TouchableHighlight onPress={this.onSubmitPressed.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>

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