import React, { Component, StyleSheet, View, Text, TouchableHighlight, ListView, Image } from 'react-native';
import NavBar from '../components/NavBar';
import { THEME_COLOR } from '../config/constants';
import Button from 'react-native-button';

let DesignGrid = React.createClass({
    render() {
        return (
            <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
})

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
      loaded: true,
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

              <View style={styles.renovatorImages}>
              </View>
          </View>
        </View>
      );
    }

  render() {
    const title = 'Pick Renovators';

    return(
        <View style={styles.container}>
          <NavBar drawer={this.props.drawer} title={title}/>

          <View style={styles.topTextBox}>
            <Text style={styles.topText}>
              You have liked these designs. Now, lets choose the renovators
              to get free quotations from:
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Button containerStyle={{padding:15, width: 250, height:55, overflow:'hidden', borderRadius:4, backgroundColor: THEME_COLOR.LIGHT_GREEN}}
                               style={{fontSize: 20, color: THEME_COLOR.LIGHT_WHITE}} onPress={this.decideForMe}>
              Help me decide!
            </Button>
          </View>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRenovator}
            style={styles.listView}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: THEME_COLOR.DARK_WHITE,
    },
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
      marginLeft: 10,
      marginRight: 10,
    },
    renovatorDetails: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: THEME_COLOR.DARK_WHITE
    },
    renovatorLogo: {
      width: 50,
      height: 50
    },
    renovatorImages: {
      // borderWidth: 2,
      // borderColor: '#00ff00'
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
    }
})
