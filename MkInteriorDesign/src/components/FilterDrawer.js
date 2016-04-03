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
import { mapDispatchToProps, connect } from '../util/connector';
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

class FilterDrawer extends Component {
  render() {

    const state = this.props.state;
    const {
      updateFilterInput, addFilterAsync, deleteFilter
    } = this.props.actions;

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
          <FrontContainer
            filterInput={state.get('filterInput')}
            filterTags={state.get('filterTags')}
            updateFilterInput={updateFilterInput}
            addFilterAsync={addFilterAsync}
            deleteFilter={deleteFilter}
          />
        </SlideDownPanel>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.browse };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrawer);

class FrontContainer extends Component {
  render() {
    const {
      filterInput, filterTags,
      updateFilterInput, addFilterAsync, deleteFilter
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
              style={{flex: 1, padding: 0, paddingLeft: 10}}
              placeholder="Tap to filter by style"
              underlineColorAndroid={THEME_COLOR.WHITE_GREEN}
              onChangeText={(text) => updateFilterInput(text)}
              onSubmitEditing={addFilterAsync.bind(null, filterInput)}
              value={filterInput}
            />
          <TouchableWithoutFeedback onPress={addFilterAsync.bind(null, filterInput)}>
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
