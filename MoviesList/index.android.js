// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     ListView,
//     Image,
//     Navigator
// } from 'react-native';

// import App from './components/App';

// export default class MoviesList extends Component {
//     render(){
//         return(
//             <View>
//                 <App/>
//             </View>
//             );
//     }

//     // render(){
//     //     return(
//     //         <Navigator 
//     //             initialRoute = {{id: 'SearchMovies'}}
//     //             renderScene = {this.renderScene.bind(this)}
//     //         />
//     //     );
//     // }

//     // renderScene(route, navigator){
//     //     var routeId = route.id;
//     //     if(routeId=== 'SearchMovies'){
//     //         return <SearchMovies navigator = {navigator} {...route.passProps}/>
//     //     }
//     //     if (routeId === 'DisplayMovieDetail'){
//     //         return <DisplayMovieDetail navigator={navigator} {...route.passProps}/>
//     //     }
//     // }
// }

// AppRegistry.registerComponent('MoviesList', () => MoviesList);

import React, { Component } from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

// import components
import MainMovieList from './components/MainMovieList';
import NowPlaying from './components/NowPlaying';
import PopularMovies from './components/PopularMovies';

export default class MoviesList extends Component{
    render() {
        return <ScrollableTabView
                    style={{marginTop: 20}}
                    renderTabBar={() => <DefaultTabBar />}
                >
                <MainMovieList tabLabel="Now Playing" />
                <NowPlaying tabLabel="Search Movies" />
                <PopularMovies tabLabel="Coming Soon" />
            </ScrollableTabView>;
  }
}
AppRegistry.registerComponent('MoviesList', () => MoviesList);
