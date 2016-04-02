import React, { Component, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import NavBar from '../components/NavBar';
import { THEME_COLOR } from '../config/constants'
import FilterDrawer from '../components/FilterDrawer';
import SwipeCards from 'react-native-swipe-cards';

let DesignGrid = React.createClass({
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
]

export default class PickRenovatorsPage extends Component {
  decideForMe() {
        alert("hi");
  }

  render() {
    const title = 'Pick Renovators';

    return(
        <View style={styles.container}>
          <NavBar drawer={this.props.drawer} title={title}/>

          <View style={styles.topTextBox}>
            <Text style={styles.topText}>
              You have liked these designs. Now, lets choose the renovators
              to get free quotations from:
            </Text>
          </View>

          <TouchableHighlight onPress={this.decideForMe}>
            <Text style={styles.topButton}>Help me decide!</Text>
          </TouchableHighlight>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: THEME_COLOR.DARK_WHITE,
    },
    topTextBox: {
      padding: 20
    },
    topText: {
      fontFamily: 'Segoe UI',
      fontWeight: '400',
      fontSize: 16,
      color: '#939598'
    },
    topButton: {
      flexDirection: "row",
      justifyContent: "center"
    }
})
