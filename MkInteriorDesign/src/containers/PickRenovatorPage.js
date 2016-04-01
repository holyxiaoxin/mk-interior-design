import React, { Component, StyleSheet, View, Text } from 'react-native';
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

export default class PickRenovatorPage extends Component {
    render() {
        const title = 'Discover Styles';

        return(
            <View style={styles.container}>
                <NavBar drawer={this.props.drawer} title={title}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME_COLOR.DARK_WHITE,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 300
    }
})
