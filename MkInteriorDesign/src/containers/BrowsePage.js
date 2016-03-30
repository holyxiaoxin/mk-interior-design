import React, { Component, StyleSheet, View, Text } from 'react-native';
import NavBar from '../components/NavBar';
import { THEME_COLOR } from '../config/constants'
import FilterDrawer from '../components/FilterDrawer';
import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
})

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

export default class BrowsePage extends Component {
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }

  render() {
    const NoMoreCards = (
      <Text>No more cards</Text>
    )

    return(
      <View style={styles.container}>
        <NavBar drawer={this.props.drawer} title="Discover Styles"/>
        <FilterDrawer>
          {/*
            The children would be the elements rendered after filter drawer.
            Due to how later elements are rendered infront, we need to render them
            before the filter drawer. [https://github.com/facebook/react-native/issues/698]
          */}
          <SwipeCards
            cards={Cards}

            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => NoMoreCards}

            handleYup={this.handleYup}
            handleNope={this.handleNope}
          />
        </FilterDrawer>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLOR.DARK_WHITE
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
})
