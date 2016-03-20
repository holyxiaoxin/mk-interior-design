import React, { Component, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class DrawerList extends Component {
  constructor(props) {
      super(props);
      this.toProfilePage = this.toProfilePage.bind(this);
      this.toBrowsePage = this.toBrowsePage.bind(this);
    }

  toProfilePage() {
    // this.props.closeDrawer();
    this.props.router.toProfilePage();
  }

  toBrowsePage() {
    // this.props.closeDrawer();
    this.props.router.toBrowsePage();
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
        <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.drawerFont}>My Favourite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.drawerFont}>Chat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
          <View style={{flexDirection: "row"}}>
            <Text style={styles.drawerFont}>Blog</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toProfilePage}>
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
