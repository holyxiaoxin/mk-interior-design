import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import BaseComponent from '../components/BaseComponent';

import { NAVBAR_TOPBAR_HEIGHT, IS_ANDROID, THEME_COLOR, FONT } from '../config/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import profilePlaceholder from '../assets/images/drawer-profile-placeholder.png';


export default class DrawerList extends BaseComponent {
  constructor(props) {
      super(props);
      this.router = this.props.getRouter();
      this._bind('toProfilePage', 'toBrowsePage', 'toCounterPage', 'toFavoritesPage', 'toListingPage');
    }

  toProfilePage() {
    this.props.closeDrawer();
    this.router.toProfilePage();
  }

  toBrowsePage() {
    this.props.closeDrawer();
    this.router.toBrowsePage();
  }

  toCounterPage() {
    this.props.closeDrawer();
    this.router.toCounterPage();
  }

  toFavoritesPage() {
    this.props.closeDrawer();
    this.router.toFavoritesPage();
  }

  toListingPage() {
    this.props.closeDrawer();
    this.router.toListingPage();
  }

  render() {
    // const { router = {} } = this.props;
    return (
      <View style={{flex: 1, flexDirection: "column", backgroundColor: THEME_COLOR.DARK_GREEN, paddingTop: IS_ANDROID ? 0 : NAVBAR_TOPBAR_HEIGHT}}>
        <TouchableOpacity style={styles.drawerRow} onPress={this.props.closeDrawer}>
            <Icon name="chevron-left" size={20} color={THEME_COLOR.LIGHT_WHITE} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
          <Image
            source={profilePlaceholder}
            style={{height: 60, width: 60, borderWidth: 2, borderRadius: 30, borderColor: THEME_COLOR.LIGHT_WHITE}}
          />
          <Text style={styles.drawerText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toBrowsePage}>
          <View style={styles.drawerTextWrapper}>
            <Icon name="picture-o" size={40} color={THEME_COLOR.LIGHT_WHITE} />
            <Text style={styles.drawerText}>Browse</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toFavoritesPage}>
          <View style={styles.drawerTextWrapper}>
            <Icon name="heart" size={38} color={THEME_COLOR.LIGHT_WHITE} />
            <Text style={styles.drawerText}>My Favourite</Text>
          </View>
        </TouchableOpacity>
          {
              /*
               <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
               <View style={styles.drawerTextWrapper}>
               <Text style={styles.drawerText}>Chat</Text>
               </View>
               </TouchableOpacity>
               */
          }

        <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
          <View style={styles.drawerTextWrapper}>
            <Icon name="newspaper-o" size={35} color={THEME_COLOR.LIGHT_WHITE} />
            <Text style={styles.drawerText}>Blog</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toListingPage}>
          <View style={styles.drawerTextWrapper}>
            <Icon name="book" size={40} color={THEME_COLOR.LIGHT_WHITE} />
            <Text style={styles.drawerText}>Renovator</Text>
            <Text style={styles.drawerText}>Listing</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  drawerRow: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12
  },
  drawerIcon: {
    width: 22,
    height: 22,
    marginLeft: 20,
    marginRight: 20
  },
  drawerTextWrapper: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  drawerText: {
    fontFamily: FONT,
    fontSize: 12,
    color: THEME_COLOR.LIGHT_WHITE,
  }
});
