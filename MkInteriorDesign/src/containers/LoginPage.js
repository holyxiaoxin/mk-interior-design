import React, {
  Component,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import brandLogo from '../assets/images/mk-logo-home.png';
import fbLogo from '../assets/images/fb-home.png';
import { mapDispatchToProps, connect } from '../util/connector';

const { width, height } = Dimensions.get('window');

class LoginPage extends Component {
  render() {
    const state = this.props.state;
    const { facebookLoginAsync } = this.props.actions;

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
          <TouchableHighlight style={{marginLeft: 50, marginRight: 50}} onPress={facebookLoginAsync}>
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
          <View style={{marginBottom: 50, marginTop: 50, alignItems: 'center'}}>
            <TouchableHighlight onPress={() => this.props.router.toBrowsePage()}>
              <Text style={styles.laterText}>Maybe later</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: 'row',
    fontSize: 10,
    color: '#ddd',
    textDecorationLine: 'underline'
  }
});
