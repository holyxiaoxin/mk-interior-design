import React, { Component,
  Dimensions,
  Animated,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
// import SlideDownPanel from 'react-native-slide-down-panel';
import SlideDownPanel from './SlideDownPanel';
import browseFilterSlidedownIcon from '../assets/images/browse-filter-slidedown-icon.png';
import { THEME_COLOR } from '../config/constants'
const { width, height } = Dimensions.get('window');

var MAXIMUM_HEIGHT = 200;
var HANDLER_HEIGHT = 40;
var OFFSET_TOP = 0;

export default class FilterDrawer extends Component {
  constructor() {
    super();
    this.state = { containerHeight : 0 };
  }

  getContainerHeight(containerHeight) {
    this.setState({
      containerHeight : containerHeight
    });
  }

  render() {
    return (
      <View style={styles.parentContainer}>
        <View style={styles.backContainer}>
          {this.props.children}
        </View>
        <SlideDownPanel
          ref="panel"
          offsetTop={OFFSET_TOP}
          containerMaximumHeight={MAXIMUM_HEIGHT}
          handlerHeight={HANDLER_HEIGHT}
          handlerDefaultView={<Handler/>}
          getContainerHeight={this.getContainerHeight.bind(this)}
        >
          <FrontContainer />
        </SlideDownPanel>
      </View>
    )
  }
}

function FrontContainer() {
  return (
    <View style={styles.frontContainer}>
      <Text>This is where the filter will be</Text>
    </View>
  )
}

function Handler() {
  return (
    <Image
      style={styles.image}
      source={browseFilterSlidedownIcon}
    />
  )
}

const styles = StyleSheet.create({
  parentContainer: {
    flex : 1,
  },

  backContainer: {
    flex : 1,
    marginTop: HANDLER_HEIGHT
  },

  frontContainer: {
    flex : 1,
    width: width,
    backgroundColor: THEME_COLOR.DARK_WHITE
  },

  logText: {
    color : 'white',
    fontWeight: '700',
  },

  image: {
    height : HANDLER_HEIGHT,
    width: width,
    alignItems: 'center',
    backgroundColor : 'gray'
  },


});
