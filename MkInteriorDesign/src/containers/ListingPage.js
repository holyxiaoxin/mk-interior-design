import React, { Component, StyleSheet, View, Text } from 'react-native';
import { THEME_COLOR, FONT } from '../config/constants';
import NavBar from '../components/NavBar';

export default class ListingPage extends Component {
    render() {
        const title = 'Renovator Listing';

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
    }
})
