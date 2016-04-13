import React, { Component, Dimensions, StyleSheet, View, Text, TouchableHighlight, ListView, Image } from 'react-native'
import { THEME_COLOR } from '../config/constants'
import Layout from '../containers/Layout'
import NavBar from '../components/NavBar'
import BaseComponent from '../components/BaseComponent'

const { width, height } = Dimensions.get('window')

export default class ListingPage extends BaseComponent {
  constructor(props) {
   super(props);
   this._bind('renderRenovator');
   this.state = {
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       }),
       renovators: null,
       loaded: false
     }
   };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://www.mynest.co/api.php?call=listing_retrieveall&nestID=1')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.payload),
        loaded: true
      })
    })
 }

 renderRenovator(renovator) {
     let $this = this;
     let logo = 'http://www.mynest.co/app/img/' + renovator.logoURL + '.jpg';
     let imageUrl = 'http://www.mynest.co/app/img/' + renovator.picImgURL + '.jpg';

     return (
       <View style={styles.renovatorRow}>
         <View style={styles.renovatorDetails}>
             <Image
               source={{uri: 'http://netdna.webdesignerdepot.com/uploads/circular_logos/NASA.jpg'}}
               style={styles.renovatorLogo}
             />

             <View style={styles.rightContainer}>
               <Text style={styles.renovatorNameText}>{renovator.name}</Text>
             </View>
         </View>

         <View style={styles.imageContainer}>
           <Image
             source={{uri: imageUrl}}
             style={styles.image}/>
         </View>
       </View>
     );
   }

 render() {
   return(
     <Layout drawer={this.props.drawer} title='Renovator Listing' backgroundColor={THEME_COLOR.LIGHT_WHITE}>
       <View style={styles.container}>
         <ListView
           dataSource={this.state.dataSource}
           renderRow={this.renderRenovator}
           style={styles.listView}
         />
       </View>
     </Layout>
   )
 }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: THEME_COLOR.LIGHT_WHITE
    },
    listView: {
    },
    renovatorRow: {
      marginTop: 5
    },
    renovatorDetails: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
      paddingBottom: 5,
      marginLeft: 10,
    },
    renovatorLogo: {
      width: 40,
      height: 40
    },
    renovatorNameText: {
      fontFamily: 'Segoe UI',
      fontWeight: '600',
      fontSize: 16,
      color: THEME_COLOR.MIDDLE_GREY,
      textAlign: 'center',
      marginLeft: 10,
    },
    rightContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    imageContainer: {
      flex: 1,
      marginTop: 5
    },
    image: {
      width: width,
      height: 1080 / (1920 / width)
    }
})
