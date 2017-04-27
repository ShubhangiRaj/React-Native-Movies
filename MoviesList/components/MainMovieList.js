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
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			moviesData: ds.cloneWithRows([]),
			movieSearched: '',
			movieDetails:{
				originalTitle: '',
				overview: ''
			}
		};
	}

	componentDidMount() {
        this.fetchMoviesData();
    }

    renderRow(rowData){
        return (
            <View style={styles.card}>
                <Image
                    source={{uri:'https://image.tmdb.org/t/p/w500_and_h281_bestv2/'+rowData.poster_path}}
                    resizeMode="contain"
                    style={styles.img} />
                <Text style={styles.txt}>{rowData.title} (Rating: {rowData.vote_average})</Text>
            </View>
        );
    }

    fetchMoviesData() {
        const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=466839c4d8544152a58da0ad13d38545';
        fetch(url)
            .then( response => response.json() )
            .then( jsonData => {
                this.setState({
                    moviesData: this.state.moviesData.cloneWithRows(jsonData.results),
                });
            })
            .catch( error => console.log('Error fetching: ' + error) );
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
						<View style={styles.searchBar}>
							<TextInput placeholder="Search Movies" style={styles.input} onSubmitEditing={this.handleTextChange.bind(this)}></TextInput>
						</View>

						<Text>{this.state.movieSearched}</Text>

						<DisplayMovieCards originalTitle={this.state.movieDetails.originalTitle} overview={this.state.movieDetails.overview}/>
						
						<View style={styles.wrapper}>
							<Text>Now Playing</Text>
							<View style={styles.movieListCards}>
								<ListView 
									dataSource = {this.state.moviesData}
									renderRow  = {this.renderRow}
								/>
							</View>
						</View>
					</View>
				</View>
			);
	}
} 

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
	container:{
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text:{

	},
	movieCard:{

	},
	searchBar:{
		backgroundColor: '#ddd'
	},
	input:{
		width,
		height: 50
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
        margin: 10,
        fontSize: 16,
        textAlign: 'left'
    },
});
