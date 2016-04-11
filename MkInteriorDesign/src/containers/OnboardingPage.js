import React, {
  Dimensions, StyleSheet, View, Image, Text, TouchableOpacity
} from 'react-native';
import { THEME_COLOR, FONT, TOPBAR_OFFSET_HEIGHT } from '../config/constants';
import BaseComponent from '../components/BaseComponent'
import Layout from '../containers/Layout';
import SwipeableViews from 'react-swipeable-views/lib/index.native.animated';
import tutorial1 from '../assets/images/tutorial-1.png'
import tutorial2 from '../assets/images/tutorial-2.png'

const { width, height } = Dimensions.get('window');

const UPPER_CONTAINER_HEIGHT = (height - TOPBAR_OFFSET_HEIGHT) * (3/4);
const LOWER_CONTAINER_HEIGHT = (height - TOPBAR_OFFSET_HEIGHT) * (1/4);

export default class OnboardingPage extends BaseComponent {
  constructor() {
    super();
    this.state = { index: 0 };
  }

  render() {
    const { index } = this.state;
    const instructionText = [
      (<View><Text style={styles.instructionText}>Swipe 'Right' to like design</Text><Text style={styles.instructionText}>or Swipe 'Left' to pass</Text></View>),
      (<View><Text style={styles.instructionText}>Choose renovators</Text><Text style={styles.instructionText}>with same design as you!</Text></View>),
      (<View><Text style={styles.instructionText}>Chat with your renovators</Text><Text style={styles.instructionText}>in real-time for FREE!</Text></View>)
    ];

    return (
      <Layout renderNavBar={false}>
        <View style={{backgroundColor: THEME_COLOR.DARK_GREEN}}>
          <SwipeableViews style={styles.slideContainer} index={0} onChangeIndex={(index) => this.setState({index})}>
            <View style={styles.slide}>
              <Image style={{width, height: UPPER_CONTAINER_HEIGHT}} source={tutorial1} resizeMode={Image.resizeMode.contain}/>
            </View>
            <View style={styles.slide}>
              <Image style={{width, height: UPPER_CONTAINER_HEIGHT}} source={tutorial2} resizeMode={Image.resizeMode.contain}/>
            </View>
            <View style={styles.slide}>
              <Image style={{width, height: UPPER_CONTAINER_HEIGHT}} source={tutorial1} resizeMode={Image.resizeMode.contain}/>
            </View>
          </SwipeableViews>

          <View style={{height: LOWER_CONTAINER_HEIGHT}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 15}}>
              <View style={[styles.dot, {backgroundColor: index === 0 ? 'white' : 'transparent'}]}></View>
              <View style={[styles.dot, {backgroundColor: index === 1 ? 'white' : 'transparent'}]}></View>
              <View style={[styles.dot, {backgroundColor: index === 2 ? 'white' : 'transparent'}]}></View>
            </View>
            { instructionText[index] }
            {
              index === 2 ?
              <View style={{flex: 1, width: 120, alignSelf: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => this.props.router.toBrowsePage()}>
                <View style={styles.startWrapper}>
                  <Text style={styles.startText}>
                    Start!
                  </Text>
                </View>
                </TouchableOpacity>
              </View>
              : <View></View>
            }
          </View>

        </View>

      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  slideContainer: {
    height: UPPER_CONTAINER_HEIGHT
  },
  slide: {
    flex: 0,
    backgroundColor: THEME_COLOR.DARK_GREEN
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  dot: {
    height: 10,
    width: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    margin: 2,
    borderColor: THEME_COLOR.LIGHT_WHITE
  },
  instructionText: {
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME_COLOR.LIGHT_WHITE,
    textAlign: 'center'
  },
  startWrapper: {
    flexDirection: 'row',
    width: 120,
    paddingTop: 6,
    paddingBottom: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: THEME_COLOR.DARK_WHITE,
  },
  startText: {
    fontFamily: FONT,
    fontWeight: 'bold',
    fontSize: 16,
    color: THEME_COLOR.DARK_GREEN,
  }
});
