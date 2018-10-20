//=========================>> Exercise 1 <<=====================
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import StockButton from './props/stock_button.js'
import API from './props/api.js'
export default class Main extends Component {
  constructor(props){
    super(props);
    this.changeIndex =this.changeIndex.bind(this);
    this.state = {stockName: 'SET',
      stockCode :'INDEXBKK:SET',
      stockIndex:'0.00',
      stockChangeRaw: '+0.00',
      stockChangePercent: '0.00%',
  };
  }
  changeIndex(stockName , stockCode){
    API(stockCode).then((data)=>{
      this.setState({...data,stockName,stockCode});
    });
  }
  render() {
    let colorStyle=(this.state.stockChangeRaw && this.state.stockChangeRaw[0]=='+' )?styles.green:styles.red;
    return (
      <View  style={{flex: 1}}>

        <View style={{flex: 0.5, justifyContent: 'center',alignItems: 'center'}}>
          <View style={{}}>
                <Text style={{fontSize:30}} > {this.state.stockName} </Text>
          </View>

          <View style={{}}>
                <Text style={{fontSize:60,fontWeight: 'bold',}}  > {this.state.stockIndex} </Text>
          </View>
          <View style={{}}>
                <Text style={{fontSize:30 },colorStyle} > {this.state.stockChangeRaw} ({this.state.stockChangePercent}) </Text>
          </View>


        </View>
        <View style={{flex: 0.5,flexDirection: 'row',flexWrap: 'wrap'}}>

          <StockButton name='SET'  code='INDEXBKK:SET' onPress={this.changeIndex}/>
          <StockButton name='S&P' code='INDEXSP: .INX' onPress={this.changeIndex}/>
          <StockButton name='NASDAQ' code='INDEXNASDAQ: .IXIC' onPress={this.changeIndex}/>

          <StockButton name='TSEC Corp' code='ITPE: 6443' onPress={this.changeIndex}/>
          <StockButton name='Set5' code='INDEXBKK:SET' onPress={this.changeIndex}/>

          <StockButton name='Set6' code='INDEXBKK:SET' onPress={this.changeIndex}/>
          <StockButton name='Set7' code='INDEXBKK:SET' onPress={this.changeIndex}/>
          <StockButton name='Set8' code='INDEXBKK:SET' onPress={this.changeIndex}/>
          <StockButton name='Set9' code='INDEXBKK:SET' onPress={this.changeIndex}/>


        </View>

      </View>


    );
  }
}
var styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'blue'
  },
  container: {
    flex: 1,
    paddingTop: 65,
    backgroundColor: 'pink'
  },
  bigContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 0
  },
  footerContainer: {
    justifyContent: 'flex-end',
    backgroundColor: 'yellow'
  },
  red:{
    color: 'red',
  },
  green:{
    color: 'green',
  }
});
// import React from 'react';
// import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             dataSource: null,
//         }
//     }
//     componentDidMount () {
//         return fetch('https://facebook.github.io/react-native/movies.json')
//             .then ( (response) => response.json() )
//             .then( (responseJson) => {
//                 this.setState({
//                     isLoading: false,
//                     dataSource: responseJson.movies,
//                 })
//             })
//         .catch((error) => {
//             console.log(error)
//         });
//     }
//     render() {
//         if (this.state.isLoading) {
//             return (
//                 <View style={styles.container}>
//                     <ActivityIndicator />
//                 </View>
//             )
//         } else {
//             let movies = this.state.dataSource.map((val, key) => {
//                 return <View key={key} style={styles.item}><Text>{val.title}</Text></View>
//             });
//             return (
//                 <View style={styles.container}>
//
//                     {movies}
//                 </View>
//             );
//         }
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     item: {
//         flex: 1,
//         alignSelf: 'stretch',
//         margin: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee'
//     }
// });
