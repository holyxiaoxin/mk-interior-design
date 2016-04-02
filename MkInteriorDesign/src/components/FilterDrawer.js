import React, { Component,
  Dimensions,
  Animated,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import SlideDownPanel from 'react-native-slide-down-panel';
// import SlideDownPanel from './SlideDownPanel';
import TwoSlider from './TwoSlider';
import browseFilterSlidedownIcon from '../assets/images/browse-filter-slidedown-icon.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { THEME_COLOR } from '../config/constants';
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
        <TouchableWithoutFeedback onPress={() => alert('filter!')}>
          <View style={styles.filterBox}>
            <Text style={styles.filterText}>Tap to filter by style</Text><FontAwesome name="plus-circle" size={25} color={THEME_COLOR.DARK_GREY} />
          </View>
        </TouchableWithoutFeedback>
        <View style={{margin: 30}}>
          <TwoSlider/>
        </View>
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

  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: THEME_COLOR.LIGHT_GREY,
    backgroundColor: THEME_COLOR.WHITE_GREEN
  },

  filterText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center'
  },

  image: {
    height : HANDLER_HEIGHT,
    width: width,
    alignItems: 'center',
    backgroundColor : 'gray'
  },


});
