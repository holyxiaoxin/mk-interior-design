import React, {
  Component,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';
import { mapDispatchToProps, connect } from '../util/connector';
import NavBar from '../components/NavBar';
import { THEME_COLOR } from '../config/constants';
import Layout from '../containers/Layout';
import FilterDrawer from '../components/FilterDrawer';
import SwipeCards from '../components/SwipeCards';
import BaseComponent from '../components/BaseComponent';
import browseCardPlaceHolder from '../assets/images/browse-card-placeholder-image.png';

const { width, height } = Dimensions.get('window');

export default class Card extends Component {
  render() {
    return (
      <View style={{
          alignItems: 'center',
          width: width - 20,
          height: 400,
          borderWidth: 2,
          borderColor: THEME_COLOR.DARK_WHITE,
          borderRadius: 10,
          backgroundColor: THEME_COLOR.LIGHT_WHITE,
        }}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
          <View style={{alignSelf: 'center'}}><Text style={{fontSize: 18, fontWeight: 'bold'}}>Punggol Northsore (Blk 123)</Text></View>
          <View style={{alignSelf: 'center'}}><Text style={{fontSize: 14, fontWeight: 'bold', fontStyle: 'italic'}}>Our Journey</Text></View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, flex: 1, textAlign: 'right'}}>Apartment</Text>
            <Text style={{marginLeft: 12, marginRight: 12}}>·</Text>
            <Text style={{fontSize: 14, flex: 1, textAlign: 'left'}}>Scandinavian</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, flex: 1, textAlign: 'right'}}>111 m²</Text>
            <Text style={{marginLeft: 12, marginRight: 12}}>·</Text>
            <Text style={{fontSize: 14, flex: 1, textAlign: 'left'}}>S$30,000</Text>
          </View>
        </View>


        <View>
          <Image
            source={browseCardPlaceHolder}
            style={{height: 220, width: width - 20}} />
            <View style={{
                flexDirection: 'row',
                alignSelf: 'stretch',
                margin: 10
              }}>
              <TextInput
                style={{
                  flex: 1,
                  width: 1, // mind-blowing width 1 ?!, otherwise can't flex 1
                  padding: 0,
                  fontSize: 16,
                }}
                placeholder="Add quick note"
                underlineColorAndroid={THEME_COLOR.LIGHT_WHITE}
              />
              <View style={{
                  backgroundColor: THEME_COLOR.DARK_WHITE,
                  justifyContent: 'center',
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderRadius: 5,
                }}>
                <Text style={{color: THEME_COLOR.LIGHT_WHITE}}>OK</Text>
              </View>
            </View>
        </View>







      </View>
    )
  }
}

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'}
]

export default class BrowsePage extends BaseComponent {
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }

  render() {
    const state = this.props.state;
    const {
      updateFilterInput, addFilterAsync, deleteFilter
    } = this.props.actions;

    const NoMoreCards = (
      <Text>No more cards</Text>
    )

    return(
      <Layout drawer={this.props.drawer} title='Discover Styles'>
        <FilterDrawer
          state={state}
          updateFilterInput={updateFilterInput}
          addFilterAsync={addFilterAsync}
          deleteFilter={deleteFilter}
        >
          {/*
            The children would be the elements rendered after filter drawer.
            Due to how later elements are rendered infront, we need to render them
            before the filter drawer. [https://github.com/facebook/react-native/issues/698]
          */}
          <View style={{height: 500, backgroundColor: THEME_COLOR.MIDDLE_WHITE}}>
            <SwipeCards
              cards={Cards}
              renderCard={(cardData) => <Card {...cardData} />}
              renderNoMoreCards={() => NoMoreCards}
              handleYup={this.handleYup}
              handleNope={this.handleNope}
              backgroundColor={THEME_COLOR.MIDDLE_WHITE}
            />
          </View>
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
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300
  }
})
