import React, { Component, Dimensions, StyleSheet, View, Text, TouchableHighlight, ListView, Image } from 'react-native'
import { THEME_COLOR } from '../config/constants'
import Layout from '../containers/Layout'
import ImageList from '../components/ImageList'
import Icon from 'react-native-vector-icons/FontAwesome'
import ItemCheckbox from '../components/CheckBox'

const { width, height } = Dimensions.get('window')

export default class PickRenovatorsPage extends Component {
  constructor(props) {
   super(props);
   this.state = {
       dataSource: new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
       }),
       renovators: null,
       loaded: false,
     }
   };

   componentDidMount() {
     this.fetchData();
   }

   fetchData() {
     fetch('http://www.mynest.co/api.php?call=choose_list&nestID=1')
     .then((response) => response.json())
     .then((responseData) => {
       this.setState({
         dataSource: this.state.dataSource.cloneWithRows(responseData.payload),
         loaded: true
       })
     })
  }

  decideForMe() {
  }

  _onCheckCallback() {
    alert("hi")
  }

  renderRenovator(renovator) {
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

              <ItemCheckbox
                onCheck={this._onCheckCallback}
                icon="check"
                size={30}
                checked={false}
              />
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
        <View style={styles.container}>
          <View style={styles.topTextBox}>
            <Text style={styles.topText}>
              You have liked these designs. Now, lets choose the renovators
              to get free quotations from:
            </Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Icon.Button name="thumbs-up" margin={5}  borderRadius={5} backgroundColor={THEME_COLOR.LIGHT_GREEN} onPress={this.decideForMe}>
              <Text style={styles.button}>Help me decide!</Text>
            </Icon.Button>
          </View>

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
      marginLeft: 20,
      marginRight: 10,
      flex: 1
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
    },
    renovatorDetails: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: THEME_COLOR.DARK_WHITE,
      borderBottomWidth: 1,
      borderBottomColor: THEME_COLOR.LIGHT_GREY,
      marginTop: 15,
      paddingBottom: 5
    },
    renovatorLogo: {
      width: 40,
      height: 40,
      borderRadius: 20
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
    },
    button: {
      fontFamily: 'Segoe UI',
      fontSize: 16,
      fontWeight: '600',
      color: THEME_COLOR.LIGHT_WHITE
    }
})
