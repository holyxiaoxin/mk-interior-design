import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import BaseComponent from '../components/BaseComponent';

export default class DrawerList extends BaseComponent {
  constructor(props) {
      super(props);
      this.router = this.props.getRouter();
      this._bind('toProfilePage', 'toBrowsePage', 'toCounterPage',  'toFavoritesPage','toListingPage');
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
      <View style={{flex: 1, flexDirection: "column", backgroundColor: "#fff"}}>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.drawerFont}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toBrowsePage}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.drawerFont}>Browse</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toFavoritesPage}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.drawerFont}>My Favourites</Text>
          </View>
        </TouchableOpacity>
          {
              /*
               <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
               <View style={{flexDirection: "row"}}>
               <Text style={styles.drawerFont}>Chat</Text>
               </View>
               </TouchableOpacity>
               */
          }

        <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.drawerFont}>Blog</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toListingPage}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.drawerFont}>Renovator Listing</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  drawerRow: {
    padding: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  drawerIcon: {
    width: 22,
    height: 22,
    marginLeft: 20,
    marginRight: 20
  },
  drawerFont: {
    fontSize: 20
  }
});
