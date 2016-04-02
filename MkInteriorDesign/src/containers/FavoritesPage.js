import React, { Component, StyleSheet, View, Text } from 'react-native';
import { THEME_COLOR, FONT } from '../config/constants';
import Layout from '../containers/Layout';
import ImageList from '../components/ImageList';

const MOCKED_DATA = {
  "success": true,
  "payload": {
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
          },
          {
              "picID": 6,
              "picImgURL": "ss91kAs"
          }
      ]
  }
}

export default class FavoritesPage extends Component {
    render() {
        const images = MOCKED_DATA.payload.thumbnails;

        return(
          <Layout drawer={this.props.drawer} title='My Favorites'>
            <View style={styles.container}>
              <ImageList images={images}/>
            </View>
          </Layout>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 10
  }
})
