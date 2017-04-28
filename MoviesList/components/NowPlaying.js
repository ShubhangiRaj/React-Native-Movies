import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions,
    TextInput,
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
			movieSearched: "You searched for " + movieSearched
		});

		// Fecth API to get data from the TMDB API 
		fetch("https://api.themoviedb.org/3/search/movie?query=" + movieSearched + "&api_key=466839c4d8544152a58da0ad13d38545&append_to_response=videos,images")
			.then((response) => response.json())
			.then((responseJSON) => {
				this.setState({
					movieDetails:{
						originalTitle: responseJSON.results[0].title,
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
					<View style={styles.searchBar}>
						<TextInput placeholder="Search Movies" style={styles.input} onSubmitEditing={this.handleTextChange.bind(this)}></TextInput>
					</View>

					<Text style={styles.txt}>{this.state.movieSearched}</Text>

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
	searchBar:{
		justifyContent: 'center',
		alignItems: 'center'
	},
	input:{
		height: 50,
		width: 300,
		backgroundColor: '#eee',
		marginTop:10,
		borderWidth: 1,
		borderColor: '#222',
		borderRadius: 2,
	},
	wrapper:{
		justifyContent: 'center',
		alignItems: 'center'
	},
	card: {
        borderWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        marginBottom: 10,
        elevation: 1
    },
    img: {
        height: 200
    },
    txt: {
        marginLeft: 30,
        marginTop:20,
        marginBottom:10,
        fontSize: 16,
        textAlign: 'left'
    },
});
