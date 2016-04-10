import React, {
  Component,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';
import numeral from 'numeral';
import { mapDispatchToProps, connect } from '../util/connector';
import NavBar from '../components/NavBar';
import { THEME_COLOR, FONT, IS_ANDROID } from '../config/constants';
import Layout from '../containers/Layout';
import FilterDrawer from '../components/FilterDrawer';
import SwipeCards from '../components/SwipeCards';
import BaseComponent from '../components/BaseComponent';
import browseCardPlaceHolder from '../assets/images/browse-card-placeholder-image.png';
import Icon from 'react-native-vector-icons/FontAwesome';

import Orientation from 'react-native-orientation';

const { width, height } = Dimensions.get('window');

class Card extends Component {
  constructor() {
    super();
    numeral.language('sg', {
      delimiters: {
        thousands: ','
      },
      currency: {
        symbol: 'S$'
      }
    });
    numeral.language('sg');
  }

  componentDidMount() {
    Orientation.lockToPortrait(); //this will lock the view to Portrait
    // Orientation.lockToLandscape(); //this will lock the view to Landscape
    // Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations

    // Orientation.addOrientationListener(this._orientationDidChange);
  }


  render() {
    const { location, name, houseType, style, size, price } = this.props;
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardInfoWrapper}>
          <Text style={styles.cardTitleText}>{location}</Text>
          <Text style={styles.cardSubtitleText}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cardTopLeftInfoText}>{houseType}</Text>
            <Text style={styles.cardInfoSeperator}>·</Text>
            <Text style={styles.cardTopRightInfoText}>{style}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.cardBottomLeftInfoText}>{size} m²</Text>
            <Text style={styles.cardInfoSeperator}>·</Text>
            <Text style={styles.cardBottomRightInfoText}>{numeral(price).format('$0,0')}</Text>
          </View>
        </View>

        <Image
          source={browseCardPlaceHolder}
          style={styles.cardImage} />
        <View style={styles.cardTextInputWrapper}>
          <TextInput
            style={styles.cardTextInput}
            placeholder="Add quick note"
            placeholderTextColor={THEME_COLOR.DARK_WHITE}
            underlineColorAndroid={THEME_COLOR.LIGHT_WHITE} />
          <View style={styles.cardSubmitWrapper}>
            <Text style={styles.cardSubmitText}>OK</Text>
          </View>
        </View>
      </View>
    )
  }
}

const NopeButton = () => {
  return (
    <View style={[styles.SwipeButton, { marginRight: 20 }]}>
      <Icon name="times" size={50} color={THEME_COLOR.RED} />
    </View>
  )
}

const YupButton = () => {
  return (
    <View style={[styles.SwipeButton, { marginLeft: 20 }]}>
      <Icon name="heart" size={40} color={THEME_COLOR.LIGHT_GREEN} />
    </View>
  )
}

export default class BrowsePage extends BaseComponent {
  handleYup (card) {
    console.log(`Yup for ${card.location}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.location}`)
  }

  render() {
    const state = this.props.state;
    const {
      onChangeFilterInput, addFilterAsync, deleteFilter, onChangeSlider
    } = this.props.actions;

    const NoMoreCards = (
      <Text>No more cards</Text>
    )

    return(
      <Layout drawer={this.props.drawer} title='Discover Styles'>
        <FilterDrawer
          state={state.get('filter')}
          onChangeFilterInput={onChangeFilterInput}
          addFilterAsync={addFilterAsync}
          deleteFilter={deleteFilter}
          onChangeSlider={onChangeSlider}
        >
          {/*
            The children would be the elements rendered after filter drawer.
            Due to how later elements are rendered infront, we need to render them
            before the filter drawer. [https://github.com/facebook/react-native/issues/698]
          */}
            <SwipeCards
              cards={state.get('listings').toJS()}
              renderCard={(cardData) => <Card {...cardData} />}
              renderNoMoreCards={() => NoMoreCards}
              showYup={false}
              showNope={false}
              renderYupButton={YupButton}
              renderNopeButton={NopeButton}
              handleYup={this.handleYup}
              handleNope={this.handleNope}
              backgroundColor={THEME_COLOR.MIDDLE_WHITE}
            />
        </FilterDrawer>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return { state: state.browse };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 20,
    height: 380,
    borderWidth: 2,
    borderColor: THEME_COLOR.DARK_WHITE,
    borderRadius: 10,
    backgroundColor: THEME_COLOR.LIGHT_WHITE,
  },
  cardInfoWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cardTitleText: {
    fontFamily: FONT,
    color: THEME_COLOR.DARK_GREY,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardSubtitleText: {
    fontFamily: FONT,
    color: THEME_COLOR.DARK_GREY,
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  cardTopLeftInfoText: {
    fontFamily: FONT,
    color: THEME_COLOR.LIGHT_GREY,
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
  },
  cardTopRightInfoText: {
    fontFamily: FONT,
    color: THEME_COLOR.LIGHT_GREY,
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
  },
  cardInfoSeperator: {
    marginLeft: 12,
    marginRight: 12
  },
  cardBottomLeftInfoText: {
    fontFamily: FONT,
    color: THEME_COLOR.LIGHT_GREY,
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
  },
  cardBottomRightInfoText: {
    fontFamily: FONT,
    color: THEME_COLOR.LIGHT_GREY,
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
  },
  cardImage: {
    height: 220,
    width: width - 20
  },
  cardTextInputWrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 40
  },
  cardTextInput: {
    fontFamily: FONT,
    flex: 1,
    padding: 0,
    paddingLeft: 10,
    fontSize: 16,
  },
  cardSubmitWrapper: {
    backgroundColor: THEME_COLOR.DARK_WHITE,
    justifyContent: 'center',
    margin: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  cardSubmitText: {
    fontFamily: FONT,
    color: THEME_COLOR.LIGHT_WHITE,
  },
  SwipeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: THEME_COLOR.DARKER_WHITE,
    backgroundColor: THEME_COLOR.MIDDLE_WHITE,
    borderWidth: 8,
    borderRadius: 50,
    width: 90,
    height: 90,
  }
});
