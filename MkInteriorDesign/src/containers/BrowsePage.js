import React, { Component, StyleSheet, View, Text } from 'react-native';
import NavBar from '../components/NavBar';
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
      <View>
        <NavBar drawer={this.props.drawer} title="Discover Styles"/>
          <SwipeCards
            cards={Cards}

            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => NoMoreCards}

            handleYup={this.handleYup}
            handleNope={this.handleNope}
          />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
})
