import React, { Dimensions } from 'react-native';
import window from '../util/window';
const { width, height } = window.getDimensions();

var BASE_CONTAINER_HEIGHT = 40;

var {
  AppRegistry,
  Text,
  View,
  PanResponder,
  Image
} = React;

var SlidingUpPanel = React.createClass({

  panResponder : {},
  previousTop : -BASE_CONTAINER_HEIGHT,

  getInitialState: function() {
    return {
      offsetTop: this.props.offsetTop,
      handlerHeight : this.props.handlerHeight,
      containerHeight : this.props.handlerHeight,
      containerMinimumHeight : this.props.handlerHeight,
      containerMaximumHeight : this.props.containerMaximumHeight,
      containerHalfHeight : 0,
      containerBackgroundColor : this.props.containerBackgroundColor,
      containerOpacity : this.props.containerOpacity,

      handlerView : this.props.handlerDefaultView,

      handlerBackgroundColor : this.props.handlerBackgroundColor,
      handlerOpacity : this.props.handlerOpacity,

      middleList : false,
    };
  },

  componentDidMount: function() {
    var offsetTop = this.state.offsetTop;
    var containerMinimumHeight = this.state.containerMinimumHeight;
    var containerMaximumHeight = this.state.containerMaximumHeight;
    var containerHalfHeight = this.state.containerHalfHeight;
    var containerBackgroundColor = this.state.containerBackgroundColor;
    var containerOpacity = this.state.containerOpacity;

    var handlerView = this.state.handlerView;

    var handlerHeight = this.state.handlerHeight;
    var handlerBackgroundColor = this.state.handlerBackgroundColor;
    var handlerOpacity = this.state.handlerOpacity;

    //MAKE SURE PROPERTIES ARE SET

    if (handlerHeight == undefined) {
      handlerHeight = BASE_CONTAINER_HEIGHT;
      this.setState({
        handlerHeight,
        containerMinimumHeight : BASE_CONTAINER_HEIGHT,
        containerHeight : BASE_CONTAINER_HEIGHT,
      });
    }

    if (handlerView == undefined) {
      throw "Set a handler view. Hint: It is a React Class."
    }

    if(offsetTop == undefined) {
      offsetTop = BASE_CONTAINER_HEIGHT;
      this.setState({
        offsetTop,
      });
    }

    if (containerMaximumHeight == undefined) {
      containerMaximumHeight = height;
      this.setState({
        containerMaximumHeight,
      });
    }

    if (containerHalfHeight == 0) {
      containerHalfHeight = Math.round((containerMaximumHeight + handlerHeight) / 2);
      this.setState({
        containerHalfHeight,
      });
    }

    if (containerBackgroundColor == undefined) {
      containerBackgroundColor = 'white'
      this.setState({
        containerBackgroundColor,
      });
    }

    if (containerOpacity == undefined) {
      containerOpacity = 1;
      this.setState({
        containerOpacity,
      });
    }

    if (handlerBackgroundColor == undefined) {
      handlerBackgroundColor = 'white';
      this.setState({
        handlerBackgroundColor,
      });
    }

    if (handlerOpacity == undefined) {
      handlerOpacity = 1;
      this.setState({
        handlerBackgroundColor,
      });
    }

  },

  render: function() {
    return (
      <View
        style = {{
          position: 'absolute',
          top: this.state.offsetTop,
          opacity: this.state.containerOpacity,
          height: this.state.containerHeight,
          paddingBottom: this.state.leastContainerHeight,
          backgroundColor : this.state.containerBackgroundColor
        }}
      >
        {this.props.children}
        <View
          style = {{
            height : this.state.handlerHeight,
            width : width,
            justifyContent : 'center',
            opacity : this.state.handlerOpacity,
            backgroundColor : this.state.handlerBackgroundColor}}
          {...this.panResponder.panHandlers}
        >
          {this.state.handlerView}
        </View>
      </View>
    );
  },

  componentWillMount: function() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd,
      onPanResponderStart: this.handlePanResponderStart
    });
  },

  handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    return true;
  },

  handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    return true;
  },

  handlePanResponderMove: function(e: Object, gestureState: Object) {
    var dy = gestureState.dy;
    var y0 = gestureState.y0;
    var negativeY = -dy;

    var positionY = negativeY + this.previousTop;

    // if (positionY >= this.state.containerMinimumHeight && positionY <= this.state.containerMaximumHeight) {
      this.setState({
        containerHeight : -positionY,
        middleList : false
      });

      // This will call getContainerHeight of parent component.
      if (this.props.getContainerHeight != undefined) {
        this.props.getContainerHeight(this.state.containerHalfHeight);
      }
    // }
  },

  handlePanResponderStart: function(e: Object, gestureState: Object) {
    var dy = gestureState.dy;
    var negativeY = -dy;

    this.previousTop = negativeY - this.state.containerHeight;
    this.setState({
      middleList : false
    });

  },

  handlePanResponderEnd: function(e: Object, gestureState: Object) {

    var containerHeight;
    var dy = gestureState.dy;
    var y0 = gestureState.y0;

    if (dy == 0) { // not up or down
      if(this.state.containerHeight == this.state.containerMaximumHeight) {
        containerHeight = this.state.containerMinimumHeight;
      } else {
        containerHeight = this.state.containerMaximumHeight;
      }
    } else if (dy > 0) { // move down
      containerHeight = this.state.containerMaximumHeight;
      this.previousTop += dy;
    } else { // move up
      containerHeight = this.state.containerMinimumHeight;
      this.previousTop = -this.state.containerMinimumHeight;
    }

    if (!this.state.middleList) {
      this.setState({
        containerHeight : containerHeight,
      });
      // This will call getContainerHeight of parent component.
      if (this.props.getContainerHeight != undefined) {
        this.props.getContainerHeight(containerHeight);
      }
    }

  },

});

module.exports = SlidingUpPanel;
