import React, {
  Component,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { THEME_COLOR, FONT } from '../config/constants';
import { mapDispatchToProps, connect } from '../util/connector';
import loginSplashPlaceholder from '../assets/images/login-splash-placeholder.png';


const { width, height } = Dimensions.get('window');

class LoginPage extends Component {
  render() {
    const state = this.props.state;
    const { facebookLoginAsync } = this.props.actions;

    return(
      <View style={{flex:1, flexDirection: 'column', backgroundColor: THEME_COLOR.DARKER_GREY}}>
        <Image
          style={{position: 'absolute', height: height, width: width, opacity: 0.3}}
          resizeMode={Image.resizeMode.cover}
          source={loginSplashPlaceholder} />

        {/*Split view into bottom half and top half*/}
        <View style={styles.topWrapper}>
          {/* Margin bottom 50, can't seem to get it to center using flex */}
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon style={{backgroundColor: 'transparent'}} name="home" size={100} color={THEME_COLOR.RED} />
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
          <View style={{width: 280}}>
            <TouchableOpacity onPress={facebookLoginAsync}>
              <View style={styles.connectView}>
                <Icon name="facebook" style={{marginLeft: 15, marginRight: 15, backgroundColor: 'transparent'}} size={20} color={THEME_COLOR.RED} />
                <Text style={styles.connectText}>Connect With Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>


          {/* Margin top and bottom 50 */}
          <View style={{marginBottom: 50, marginTop: 50, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.router.toInstructionsPage()}>
              <Text style={styles.laterText}>Maybe later</Text>
            </TouchableOpacity>
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
    alignItems: 'center'
  },
  titleText: {
    fontFamily: FONT,
    flex: 1,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: 'transparent',
    color: THEME_COLOR.LIGHT_WHITE
  },
  connectView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: THEME_COLOR.LIGHT_WHITE
  },
  facebookLogo: {
    height: 30
  },
  connectText: {
    fontFamily: FONT,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'transparent',
    color: THEME_COLOR.LIGHT_WHITE
  },
  laterText: {
    fontFamily: FONT,
    flexDirection: 'row',
    fontSize: 10,
    color: THEME_COLOR.LIGHT_WHITE,
    backgroundColor: 'transparent',
    textDecorationLine: 'underline'
  }
});
