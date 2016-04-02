import React, {
  Component,
  Dimensions,
  View,
  PanResponder,
  StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class TwoSlider extends Component {
  constructor(props) {
    super(props);

    const {
      lineColor, leftSliderColor, rightSliderColor,
      sliderSize
    } = props;

    this.lineColor = lineColor ? lineColor : 'grey';
    this.leftSliderColor = leftSliderColor ? leftSliderColor : 'lightblue';
    this.rightSliderColor = rightSliderColor ? rightSliderColor : 'lightblue';
    this.sliderSize = sliderSize ? sliderSize : 30;

    this.state = {
      leftSliderX: 250
    }
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.handlePanResponderMove.bind(this),
      onPanResponderRelease: this.handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
      onPanResponderStart: this.handlePanResponderStart.bind(this)
    });
  }

  render() {
    return (
      <View>
        <View
          onLayout={(event) => {
            const {x, y, width, height} = event.nativeEvent.layout;
            this.lineWidth = width;
          }}
          style={{flex: 1, height: 1, backgroundColor: this.lineColor}}
        />
        <View
          style={{width: this.sliderSize,
                  height: this.sliderSize,
                  left: this.state.leftSliderX,
                  borderRadius: this.sliderSize,
                  marginTop: -this.sliderSize/2,
                  marginLeft: -this.sliderSize/2,
                  backgroundColor: this.leftSliderColor}}
          {...this.panResponder.panHandlers}
        />
      </View>
    )
  }

  handlePanResponderStart(e, gestureState) {
    const dx = gestureState.dx;
    this.previousLeftSliderX = this.state.leftSliderX;
    // console.log(this.previousLeftSliderX);

    // const negativeX = -dx;
    //
    // // Stores displacement in x-axis at touchStart
    // this.previousLeft = negativeX - this.state.leftSliderX;
    // console.log(this.previousLeft);
  }

  handlePanResponderMove(e, gestureState) {
    const dx = gestureState.dx;
    const positionX = this.previousLeftSliderX + dx;
    if (positionX > 0 && positionX < this.lineWidth) {
      this.setState({ leftSliderX: positionX });
    }
    // current position is difference in distance since touchStart(dx) and displacement in x-axis at touchStart(dx)
    // const positionY = negativeX + this.previousTop;
    // console.log(dx);
    // this.setState()

    // console.log('moving');
  }

  handlePanResponderEnd(e, gestureState) {
    console.log('end');
  }

}
