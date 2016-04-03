import React, { Component, StyleSheet, View, Text, TextInput } from 'react-native';
import { mapDispatchToProps, connect } from '../util/connector';
import NavBar from '../components/NavBar';
import { THEME_COLOR } from '../config/constants';
import Layout from '../containers/Layout';
import FilterDrawer from '../components/FilterDrawer';
import SwipeCards from 'react-native-swipe-cards';
import BaseComponent from '../components/BaseComponent';

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
          <View style={{height: 500}}>
            <SwipeCards
              cards={Cards}
              renderCard={(cardData) => <Card {...cardData} />}
              renderNoMoreCards={() => NoMoreCards}
              handleYup={this.handleYup}
              handleNope={this.handleNope}
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
