import React, {
  Component,
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ImageList extends Component {

  render() {
    const images = this.props.images;

    const renderImages = images.map(function(row, i) {
      return (
        <Image key={`image-${i}`}
          source={{uri: 'http://netdna.webdesignerdepot.com/uploads/circular_logos/NASA.jpg'}}
          style={styles.thumbnail}/>
      );
    })

    return (
      <View style={styles.container}>
        { renderImages }
        { this.props.children }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  thumbnail: {
    marginTop: 8,
    width: width/3 - 12,
    height: width/3 - 12,
  }
})
