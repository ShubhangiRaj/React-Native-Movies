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

import DisplayMovieDetail from '../components/DisplayMovieDetail'

export default class SearchMovies extends Component{
	constructor(props){
		super(props);
		this.state = {
			movieSearched: '',
			movieDetails:{
				originalTitle: '',
				overview: ''
			}
		};
	}

	onSubmitPressed(event){
		const movieSearched = event.nativeEvent.text
		this.setState({
			movieSearched: "You searched for " + movieSearched
		});

		// Fecth API to get data from the TMDB API 
		fetch("https://api.themoviedb.org/3/search/movie?query=" + movieSearched + "&api_key=466839c4d8544152a58da0ad13d38545&append_to_response=videos,images")
			.then((response) => response.json())
			.then((responseJSON) => {
				this.setState({
					movieDetails:{
						originalTitle: responseJSON.results[0].release_date,
						overview: responseJSON.results[0].overview
					}
				});
			})
			.catch((error) => {
                console.warn(error);
            });


		this.props.navigator.push({
		    title: 'Display Movie Detail',
		    component: DisplayMovieDetail,
		    passProps: {
        		originalTitle: this.state.movieDetails.originalTitle,
        		overview: this.state.movieDetails.overview,
        	}
		});
	}


	render(){
		return(
				<View style={styles.container}>
					<TextInput placeholder="Search Movies" style={styles.input} onSubmitEditing={this.onSubmitPressed.bind(this)}></TextInput>
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