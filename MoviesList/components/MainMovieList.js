import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions,
    TextInput
} from 'react-native';

import DisplayMovieCards from '../components/DisplayMovieCards';

export default class MainMoviesList extends Component{
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

	handleTextChange(event){
		const movieSearched = event.nativeEvent.text
		this.setState({
			movieSearched: movieSearched
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
	}


	render(){
		return(
				<View style={styles.container}>
					<View>
						<TextInput placeholder="Search Movies" style={styles.input} onSubmitEditing={this.handleTextChange.bind(this)}></TextInput>
						<Text>You searched for {this.state.movieSearched}</Text>
						<DisplayMovieCards originalTitle={this.state.movieDetails.originalTitle} overview={this.state.movieDetails.overview}/>
					</View>
				</View>
			);
	}
} 

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
	container:{
		justifyContent: 'center',
		alignItems: 'center'
	},
	text:{

	},
	movieCard:{

	},
	input:{
		width,
		height: 50
	}
});
