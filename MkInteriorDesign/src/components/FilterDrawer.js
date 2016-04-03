import React, { Component,
  Dimensions,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableWithoutFeedback
} from 'react-native';
// import SlideDownPanel from 'react-native-slide-down-panel';
import SlideDownPanel from './SlideDownPanel';
import TwoSlider from './TwoSlider';
import browseFilterSlidedownIcon from '../assets/images/browse-filter-slidedown-icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { THEME_COLOR, FONT } from '../config/constants';
const { width, height } = Dimensions.get('window');

var MAXIMUM_HEIGHT = 200;
var HANDLER_HEIGHT = 30;
var OFFSET_TOP = 0;

export default class FilterDrawer extends Component {
  render() {
    return (
      <View>
        <View style={styles.backContainer}>
          {this.props.children}
        </View>
        <SlideDownPanel
          ref="panel"
          offsetTop={OFFSET_TOP}
          initialHeight={MAXIMUM_HEIGHT}
          containerMaximumHeight={MAXIMUM_HEIGHT}
          handlerHeight={HANDLER_HEIGHT}
          handlerDefaultView={<Handler/>}
        >
          <FrontContainer/>
        </SlideDownPanel>
      </View>
    )
  }
}

class FrontContainer extends Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
      filterTags: ['tag1', 'tag2']
    };
  }

  render() {
    return (
      <View style={styles.frontContainer}>
          <View style={styles.filterBox}>
            {
              this.state.filterTags.map((filterTag, index) =>
                <View key={`filter-tag-${index}`} style={styles.filterTagWrapper}>
                  <Text style={styles.filterTagText}>{filterTag}</Text>
                  <TouchableWithoutFeedback onPress={this.deleteFilterTag.bind(this, index)}>
                    <Icon name="times" size={15} color={THEME_COLOR.DARK_GREY} />
                  </TouchableWithoutFeedback>
                </View>

              )
            }
            <TextInput
              style={{flex: 1, padding: 0, paddingLeft: 10}}
              placeholder="Tap to filter by style"
              underlineColorAndroid={THEME_COLOR.WHITE_GREEN}
              onChangeText={(filterText) => this.setState({filterText})}
              onSubmitEditing={this.addFilter.bind(this)}
              value={this.state.filterText}
            />
            <TouchableWithoutFeedback onPress={this.addFilter.bind(this)}>
              <Icon name="plus-circle" size={25} color={THEME_COLOR.DARK_GREY} />
            </TouchableWithoutFeedback>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.budgetText}>Budget: </Text>
            <View style={{flex: 1, marginRight: 20}}><TwoSlider/></View>
          </View>
      </View>
    )
  }

  addFilter() {
    const filterText = this.state.filterText;
    if (filterText === '') return;
    const filterTags = this.state.filterTags;
    filterTags.push(filterText);
    this.setState({filterText: '', filterTags});
  }

  deleteFilterTag(index) {
    const filterTags = this.state.filterTags;
    filterTags.splice(index, 1);
    this.setState({filterTags});
  }

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
  backContainer: {
    marginTop: HANDLER_HEIGHT
  },
  frontContainer: {
    flex : 1,
    width: width,
    backgroundColor: THEME_COLOR.DARK_WHITE
  },
  filterBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 6,
    paddingRight: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: THEME_COLOR.LIGHT_GREY,
    backgroundColor: THEME_COLOR.WHITE_GREEN
  },
  filterTagWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 3,
    marginRight: 3,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8
  },
  filterTagText: {
    paddingRight: 5,
    fontFamily: FONT
  },
  filterText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONT
  },
  budgetText: {
    margin: 20,
    alignSelf: 'flex-end',
    fontSize: 16,
    fontFamily: FONT
  },
  image: {
    height : HANDLER_HEIGHT,
    width: width,
    alignItems: 'center',
    backgroundColor : 'gray'
  },
});
