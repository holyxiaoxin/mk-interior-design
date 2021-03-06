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
import { THEME_COLOR, FONT, NAVBAR_OFFSET_HEIGHT } from '../config/constants';
const { width, height } = Dimensions.get('window');

const MAXIMUM_HEIGHT = 200;
const HANDLER_HEIGHT = 30;
const OFFSET_TOP = 0;

const BUDGET_TEXT_WIDTH = width/5;

export default class FilterDrawer extends Component {
  render() {
    const {
      state,
      onChangeFilterInput, addFilterAsync, deleteFilter, onChangeSlider
    } = this.props;

    return (
      <View>
        <View style={styles.backContainer}>
          {this.props.children}
        </View>
        <SlideDownPanel
          offsetTop={OFFSET_TOP}
          initialHeight={HANDLER_HEIGHT}
          containerMaximumHeight={MAXIMUM_HEIGHT}
          handlerHeight={HANDLER_HEIGHT}
          handlerDefaultView={<Handler/>}
          containerBackgroundColor="transparent"
          handlerBackgroundColor="transparent"
        >
          <FrontContainer
            filterInput={state.get('filterInput')}
            filterTags={state.get('filterTags')}
            onChangeFilterInput={onChangeFilterInput}
            addFilterAsync={addFilterAsync}
            deleteFilter={deleteFilter}
            onChangeSlider={onChangeSlider}
          />
        </SlideDownPanel>
      </View>
    )
  }
}

class FrontContainer extends Component {
  render() {
    const {
      filterInput, filterTags,
      onChangeFilterInput, addFilterAsync,
      deleteFilter, onChangeSlider
    } = this.props;

    return (
      <View style={styles.frontContainer}>
          <View style={styles.filterBox}>
            {
              filterTags.map((filterTag, index) =>
                <View key={`filter-tag-${index}`} style={styles.filterTagWrapper}>
                  <Text style={styles.filterTagText}>{filterTag}</Text>
                  <TouchableWithoutFeedback onPress={deleteFilter.bind(null, index)}>
                    <Icon name="times" size={15} color={THEME_COLOR.DARK_GREY} />
                  </TouchableWithoutFeedback>
                </View>
              )
            }
            <TextInput
              ref="filterTextInput"
              style={{flex: 1, height: 20, fontSize: 14, alignSelf: 'center', padding: 0, paddingLeft: 10, paddingRight: 10}}
              placeholder="Tap to filter by style"
              autoCorrect={false}
              underlineColorAndroid={THEME_COLOR.WHITE_GREEN}
              onChangeText={onChangeFilterInput}
              onSubmitEditing={addFilterAsync.bind(null, filterInput)}
              onEndEditing={() =>
                {
                  setTimeout(() => {
                    this.refs.filterTextInput.focus()
                  }, 0);
                }
              }
              value={filterInput}
            />
            <TouchableWithoutFeedback onPress={addFilterAsync.bind(null, filterInput)}>
              <Icon name="plus-circle" size={25} color={THEME_COLOR.DARK_GREY} />
            </TouchableWithoutFeedback>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.budgetText}>Budget: </Text>
            <View style={{flex: 1, alignItems: 'center'}}>
              <TwoSlider
                lineWidth={width-BUDGET_TEXT_WIDTH-50}
                onChange={onChangeSlider}
              />
            </View>
          </View>
      </View>
    )
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
    height: height - NAVBAR_OFFSET_HEIGHT - HANDLER_HEIGHT,
    marginTop: HANDLER_HEIGHT,
    overflow: 'hidden'
  },
  frontContainer: {
    flex : 1,
    width: width,
    backgroundColor: THEME_COLOR.DARK_WHITE,
    overflow: 'hidden'
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
    width: BUDGET_TEXT_WIDTH,
    textAlign: 'center',
    alignSelf: 'flex-end',
    fontSize: 16,
    fontFamily: FONT
  },
  image: {
    height : HANDLER_HEIGHT,
    width: width,
    backgroundColor : 'transparent'
  },
});
