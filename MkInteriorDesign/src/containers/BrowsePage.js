import React, { Component, View, Text } from 'react-native';
import NavBar from '../components/NavBar';

export default class BrowsePage extends Component {
  render() {
    return(
      <View>
        <NavBar drawer={this.props.drawer} title="Discover Styles"/>
        <Text style={{backgroundColor: '#000', color: 'blue', margin: 50}}>
          Browse Page
        </Text>
      </View>

    )
  }
}
