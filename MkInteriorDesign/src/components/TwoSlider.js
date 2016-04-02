import React, {
  Component,
  Dimensions,
  View,
  Text,
  PanResponder,
  StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SLIDER_BASE_HEIGHT = 1;
const SLIDER_HIGHTLIGHT_HEIGHT = 5;
const TEXT_LABEL_WIDTH = 120;

export default class TwoSlider extends Component {
  constructor(props) {
    super(props);

    const {
      lineBaseColor = 'grey',
      lineHighlightColor = 'paleturquoise',
      leftSliderColor = 'lightblue',
      rightSliderColor = 'lightsteelblue',
      leftSliderPosition = 50,
      rightSliderPosition = 150,
      sliderSize = 30
    } = props;

    const thisProps = { lineBaseColor, lineHighlightColor, leftSliderColor, rightSliderColor, sliderSize };
    Object.assign(this, thisProps);

    this.state = {
      leftSliderX: leftSliderPosition,
      rightSliderX: rightSliderPosition,
      lineWidth: 0
    }
  }

  componentWillMount() {
    this.leftPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.handleLeftPanResponderMove.bind(this),
      onPanResponderRelease: this.handleLeftPanResponderEnd.bind(this),
      onPanResponderTerminate: this.handleLeftPanResponderEnd.bind(this),
      onPanResponderStart: this.handleLeftPanResponderStart.bind(this)
    });
    this.rightPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.handleRightPanResponderMove.bind(this),
      onPanResponderRelease: this.handleRightPanResponderEnd.bind(this),
      onPanResponderTerminate: this.handleRightPanResponderEnd.bind(this),
      onPanResponderStart: this.handleRightPanResponderStart.bind(this)
    });
  }

  render() {
    const styles = {
      slider: {
        width: this.sliderSize,
        height: this.sliderSize,
        borderRadius: this.sliderSize
      }
    }

    // Calculates text boundaries
    let leftTextPosition = this.state.leftSliderX - this.sliderSize*2;
    if (leftTextPosition < 0) {
      leftTextPosition = 0;
    }
    let rightTextPosition = this.state.rightSliderX - this.sliderSize;
    if (rightTextPosition > this.state.lineWidth - TEXT_LABEL_WIDTH) {
      rightTextPosition = this.state.lineWidth - TEXT_LABEL_WIDTH;
    }

    return (
      <View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{left: leftTextPosition}}>S$15,000</Text>
          <Text style={{left: rightTextPosition}}>S$40,000</Text>
        </View>
        <View
          onLayout={(event) => {
            this.setState({lineWidth: event.nativeEvent.layout.width});
          }}
          style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: this.sliderSize/2}}
        >
          <View style={{height: SLIDER_BASE_HEIGHT, width: this.state.leftSliderX, backgroundColor: this.lineBaseColor}}></View>
          <View style={{height: SLIDER_HIGHTLIGHT_HEIGHT, width: this.state.rightSliderX - this.state.leftSliderX + this.sliderSize, backgroundColor: this.lineHighlightColor}}></View>
          <View style={{height: SLIDER_BASE_HEIGHT, flex: 1, backgroundColor: this.lineBaseColor}}></View>
        </View>
        <View
          style={[styles.slider, {
            left: this.state.leftSliderX,
            marginLeft: -this.sliderSize/2,
            marginTop: -(this.sliderSize+SLIDER_HIGHTLIGHT_HEIGHT)/2,
            backgroundColor: this.leftSliderColor}]
          }
          {...this.leftPanResponder.panHandlers}
        />
        <View
          style={[styles.slider, {
            left: this.state.rightSliderX,
            marginLeft: this.sliderSize/2,
            marginTop: -this.sliderSize,
            backgroundColor: this.rightSliderColor}]
          }
          {...this.rightPanResponder.panHandlers}
        />
      </View>
    )
  }


  handleLeftPanResponderStart(e, gestureState) {
    Object.assign(e, {name: 'leftSlider'})
    this.handlePanResponderStart(e, gestureState);
  }
  handleLeftPanResponderMove(e, gestureState) {
    Object.assign(e, {name: 'leftSlider'})
    this.handlePanResponderMove(e, gestureState);
  }
  handleLeftPanResponderEnd(e, gestureState) {
    Object.assign(e, {name: 'leftSlider'})
    this.handlePanResponderEnd(e, gestureState);
  }


  handleRightPanResponderStart(e, gestureState) {
    Object.assign(e, {name: 'rightSlider'})
    this.handlePanResponderStart(e, gestureState);
  }
  handleRightPanResponderMove(e, gestureState) {
    Object.assign(e, {name: 'rightSlider'})
    this.handlePanResponderMove(e, gestureState);
  }
  handleRightPanResponderEnd(e, gestureState) {
    Object.assign(e, {name: 'rightSlider'})
    this.handlePanResponderEnd(e, gestureState);
  }


  handlePanResponderStart(e, gestureState) {
    const dx = gestureState.dx;
    switch(e.name) {
      case 'leftSlider':
        this.previousLeftSliderX = this.state.leftSliderX;
        break;
      case 'rightSlider':
        this.previousRightSliderX = this.state.rightSliderX;
        break;
    }
  }

  handlePanResponderMove(e, gestureState) {
    const dx = gestureState.dx;

    switch(e.name) {
      case 'leftSlider': {
        const positionX = this.previousLeftSliderX + dx;
        // left boundary is 0, right boundary is right slider
        if (positionX > 0 && positionX < this.state.rightSliderX + this.sliderSize/2) {
          this.setState({ leftSliderX: positionX });
        }
        break;
      }
      case 'rightSlider': {
        const positionX = this.previousRightSliderX + dx;
        // left boundary is left slider, right boundary is width of line
        if (positionX > this.state.leftSliderX - this.sliderSize/2 && positionX < this.state.lineWidth - this.sliderSize) {
          this.setState({ rightSliderX: positionX });
        }
        break;
      }
    }
  }

  handlePanResponderEnd(e, gestureState) {
    console.log('end');
  }

}
