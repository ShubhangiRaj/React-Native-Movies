/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            moviesData: ds.cloneWithRows([]),
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
                    resizeMode="cover"
                    style={styles.img} />
                <Text style={styles.txt}>{rowData.title} (Rating: {rowData.vote_average})</Text>
            </View>
        );
    }

    fetchMoviesData() {
        var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=466839c4d8544152a58da0ad13d38545';
        fetch(url)
            .then( response => response.json() )
            .then( jsonData => {
                this.setState({
                    moviesData: this.state.moviesData.cloneWithRows(jsonData.results),
                });
            })
            .catch( error => console.log('Error fetching: ' + error) );
        }

    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerTxt}>Now Playing</Text>
                </View>
                <ListView
                    dataSource={this.state.moviesData}
                    renderRow={this.renderRow}
                    style={styles.container}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2'
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
    headerTxt: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20
    },
    header: {
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f2'
    }
});

AppRegistry.registerComponent('MoviesList', () => MoviesList);
