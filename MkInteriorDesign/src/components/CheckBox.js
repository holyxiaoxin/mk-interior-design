'use strict';

var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} = React;

var ItemCheckbox = React.createClass({
  propTypes: {
    onCheck: React.PropTypes.func,
    onUncheck: React.PropTypes.func,
    icon: React.PropTypes.string,
    size: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    color: React.PropTypes.string,
    iconSize: React.PropTypes.string,
    checked: React.PropTypes.bool,
    style: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      onCheck: null,
      onUncheck: null,
      icon: "check",
      size: 30,
      backgroundColor: 'white',
      color: 'grey',
      iconSize: 'normal,',
      checked: false,
    };
  },

  getInitialState: function () {
    return {
      checked: false,
      bg_color: this.props.backgroundColor,
    };
  },

  _getCircleCheckStyle: function() {
    return {
      width: this.props.size,
      height: this.props.size,
      backgroundColor: this.state.bg_color,
      borderColor: this.props.color,
      borderWidth: 2,
      // borderRadius: this.props.size/2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
    };
  },

  _getIconSize: function() {
    if (this.props.iconSize == 'small') {
      return this.props.size * 0.5;
    } else if (this.props.iconSize == 'normal') {
      return this.props.size * 0.6;
    } else {
      return this.props.size * 0.7;
    }
  },

  _getCircleIconStyle: function() {
    return {
      color: this.props.backgroundColor,
      flex: 1,
      width: this._getIconSize(),
      height: this._getIconSize(),
      // marginRight: 10
    };
  },

  _completeProgress: function() {
    if (this.state.checked) {
      this.setState({
        checked: false,
        bg_color: this.props.backgroundColor,
      });
      if (this.props.onUncheck) {
        this.props.onUncheck();
      }
    } else {
      this.setState({
        checked: true,
        bg_color: this.props.color,
      });
      if (this.props.onCheck) {
        this.props.onCheck();
      }
    }
  },

  componentDidMount: function() {
    if (this.props.checked) {
      this._completeProgress();
    }
  },

  render: function() {
    return(
      <View style={this.props.style}>

          <View style={this._getCircleCheckStyle()}>
            <TouchableWithoutFeedback
              onPress={this._completeProgress}
              >
            <Icon.Button name={this.props.icon}
              size={this._getIconSize()}
              color={this.props.backgroundColor}
              backgroundColor='transparent'
              style={this._getCircleIconStyle()}
            />

          </TouchableWithoutFeedback>
          </View>
      </View>
    );
  },
});

module.exports = ItemCheckbox;
