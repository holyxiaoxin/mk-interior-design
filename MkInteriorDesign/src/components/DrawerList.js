import React, { Component, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default class DrawerList extends Component {
  constructor(props) {
    super(props);
    this.toLanding = this.toLanding.bind(this);
    this.toSignIn = this.toSignIn.bind(this);
    this.toCompanies = this.toCompanies.bind(this);
  }
  toLanding() {
    this.props.closeDrawer();
    this.props.router.slideToLanding();
  }
  toSignIn() {
    this.props.closeDrawer();
    this.props.router.slideToSignIn();
  }
  toCompanies() {
    this.props.closeDrawer();
    this.props.router.slideToCompanies();
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: "column", backgroundColor: "white"}}>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toLanding}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-cat.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Landing Page</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toSignIn}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-fav.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toCompanies}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-map.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Companies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toCompanies}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-msg.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Companies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerRow} onPress={this.toCompanies}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/images/nav-icons-issue.png')}
              style={styles.drawerIcon} />
            <Text style={styles.drawerFont}>Companies</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  drawerRow: {
    paddingTop: 20,
    paddingBottom: 20,
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
