import React, { Component,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import hamburgerIcon from '../assets/images/hamburger-nav.png';


export default class NavBar extends Component {
  render() {
    const { title, drawer: { openDrawer, closeDrawer } } = this.props;
    const leftButtonConfig = (
      <TouchableHighlight style={styles.flexCenter} onPress={openDrawer}>
        <Image
          style={styles.hamburgerIcon}
          source={hamburgerIcon}
        />
      </TouchableHighlight>
    )

    const rightButtonConfig = (
      <TouchableHighlight style={styles.flexCenter} onPress={() => alert('stubbed next')}>
        <Text style={{paddingRight: 10}}>Next</Text>
      </TouchableHighlight>
    )

    const titleConfig = (
      <TouchableHighlight style={styles.flexCenter} onPress={() => alert('stubbed title')}>
        <Text>{title}</Text>
      </TouchableHighlight>
    )

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar
          style={styles.navBar}
          title={titleConfig}
          leftButton={leftButtonConfig}
          rightButton={rightButtonConfig} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  navBar: {
    height: 55,
    marginTop: -12, // there is some weird extra top padding by default
  },
  flexCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  hamburgerIcon: {
    marginLeft: 10,
    width: 20,
    height: 20
  }
});
