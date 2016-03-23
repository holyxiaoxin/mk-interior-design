import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import window from '../util/window';
import brandLogo from '../assets/images/mk-logo-home.png';
import fbLogo from '../assets/images/fb-home.png';

const { width, height } = window.getDimensions();

export default class LoginPage extends Component {
  render() {
    return(
      <View style={{flex:1, flexDirection: 'column'}}>

        {/*Split view into bottom half and top half*/}
        <View style={styles.topWrapper}>
          {/* Margin bottom 50, can't seem to get it to center using flex */}
          <View>
            <Image
              source={brandLogo}
              style={styles.brandLogo}
            />
          </View>

          {/* Push it to bottom */}
          <View>
            <Text style={styles.titleText}>
              Bringing the fun back {'\n'}
              into home renovation.
            </Text>
          </View>
        </View>

        {/* Push it to bottom */}
        <View style={styles.bottomWrapper}>
          <TouchableHighlight>
            <View style={styles.connectView}>
              <Image
                source={fbLogo}
                style={styles.facebookLogo}
                resizeMode={Image.resizeMode.contain}
              />
              <Text style={styles.connectText}>Connect With Facebook</Text>
            </View>
          </TouchableHighlight>

          {/* Margin top and bottom 50 */}
          <TouchableHighlight style={{marginBottom: 50, marginTop: 50}}>
            <View style={styles.laterView}>
              <Text style={styles.laterText}>Maybe later</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bottomWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  brandLogo: {
    flex: 1,
    flexDirection: 'row',
    width: width*0.3,
    height: height*0.25,
    alignSelf: 'center',
    marginBottom: 50
  },
  titleText: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 20,
    color: '#ddd'
  },
  connectView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
  },
  facebookLogo: {
    height: 30
  },
  connectText: {
    fontSize: 18,
    color: '#ddd'
  },
  laterText: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 10,
    color: '#ddd',
    textDecorationLine: 'underline'
  }
});
