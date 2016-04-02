import React, { Component, Dimensions, StyleSheet, View, Text, TouchableHighlight, ListView, Image } from 'react-native';
import { THEME_COLOR } from '../config/constants';
import Layout from '../containers/Layout';
import Button from 'react-native-button';
import ImageList from '../components/ImageList';

const { width, height } = Dimensions.get('window');

const PICK_RENOVATORS_MOCK_DATA = {
    "success": true,
    "payload": [
        {
            "rpID": 1,
            "name": "Weikin Interior Designs",
            "logoURL": "92laASf",
            "thumbnails": [
                {
                    "picID": 1,
                    "picImgURL": "ss91kAs"
                },
                {
                    "picID": 2,
                    "picImgURL": "ss91kAs"
                },
                {
                    "picID": 3,
                    "picImgURL": "ss91kAs"
                },
                {
                    "picID": 4,
                    "picImgURL": "ss91kAs"
                },
                {
                    "picID": 5,
                    "picImgURL": "ss91kAs"
                }
            ],
            "thumbMore": 20 // if 0, no need to display the 'x more' grid
        },
        {
            "rpID": 2,
            "name": "Ken Tan Interior Designs",
            "logoURL": "92laASf",
            "thumbnails": [
              {
                  "picID": 1,
                  "picImgURL": "ss91kAs"
              },
              {
                  "picID": 2,
                  "picImgURL": "ss91kAs"
              },
              {
                  "picID": 3,
                  "picImgURL": "ss91kAs"
              },
              {
                  "picID": 4,
                  "picImgURL": "ss91kAs"
              },
              {
                  "picID": 5,
                  "picImgURL": "ss91kAs"
              }
            ],
            "thumbMore": 15 // if 0, no need to display the 'x more' grid
        },
        {
            "rpID": 3,
            "name": "JR Lim Interior Designs",
            "logoURL": "92laASf",
            "thumbnails": [
              {
                  "picID": 1,
                  "picImgURL": "ss91kAs"
              },
              {
                  "picID": 2,
                  "picImgURL": "ss91kAs"
              },
              {
                  "picID": 3,
                  "picImgURL": "ss91kAs"
              },
              {
                  "picID": 4,
                  "picImgURL": "ss91kAs"
              },
              {
                  "picID": 5,
                  "picImgURL": "ss91kAs"
              }
            ],
            "thumbMore": 10 // if 0, no need to display the 'x more' grid
        }
    ]
}

export default class PickRenovatorsPage extends Component {
  constructor(props) {
   super(props);
   this.state = {
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       }),
       loaded: false,
     }
   };

   componentDidMount() {
     this.fetchData();
   }

   fetchData() {
     this.setState({
      dataSource: this.state.dataSource.cloneWithRows(PICK_RENOVATORS_MOCK_DATA.payload),
      loaded: true
    })
  }

  decideForMe() {
    alert(PICK_RENOVATORS_MOCK_DATA.payload);
  }

  renderRenovator(renovator) {
      return (
        <View style={styles.renovatorRow}>
          <View style={styles.renovatorDetails}>
              <Image
                source={{uri: 'http://netdna.webdesignerdepot.com/uploads/circular_logos/NASA.jpg'}}
                style={styles.renovatorLogo}/>

              <View style={styles.rightContainer}>
                <Text style={styles.renovatorNameText}>{renovator.name}</Text>
              </View>
          </View>

          <ImageList images={renovator.thumbnails}>
            <View style={styles.moreBox}>
              <Text style={styles.moreText}>
                {renovator.thumbMore} MORE
              </Text>
            </View>
          </ImageList>
        </View>
      );
    }

  render() {
    return(
      <Layout drawer={this.props.drawer} title='Pick Renovators'>
        <View style={styles.topTextBox}>
          <Text style={styles.topText}>
            You have liked these designs. Now, lets choose the renovators
            to get free quotations from:
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Button containerStyle={{padding:15, width: 250, height:55, overflow:'hidden', borderRadius:10, backgroundColor: THEME_COLOR.LIGHT_GREEN}}
                             style={{fontSize: 20, color: THEME_COLOR.LIGHT_WHITE}} onPress={this.decideForMe}>
            Help me decide!
          </Button>
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRenovator}
          style={styles.listView}/>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
    topTextBox: {
      padding: 20
    },
    topText: {
      fontFamily: 'Segoe UI',
      fontWeight: '400',
      fontSize: 16,
      color: THEME_COLOR.LIGHT_GREY
    },
    topButton: {
      flexDirection: "row",
      justifyContent: "center"
    },
    listView: {
      marginTop: 20
    },
    renovatorRow: {
    },
    renovatorDetails: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: THEME_COLOR.DARK_WHITE,
      borderBottomWidth: 1,
      borderBottomColor: THEME_COLOR.LIGHT_GREY,
      marginTop: 15
    },
    renovatorLogo: {
      width: 50,
      height: 50
    },
    renovatorNameText: {
      fontFamily: 'Segoe UI',
      fontStyle: 'italic',
      fontWeight: '600',
      fontSize: 16,
      color: THEME_COLOR.LIGHT_GREY,
      textAlign: 'center'
    },
    rightContainer: {
      flex: 1
    },
    moreBox: {
      width: width/3 - 10,
      height: width/3 - 10
    }
})
