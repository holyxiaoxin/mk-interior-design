import React, {
  Component,
  Dimensions,
  View,
  Text,
  PanResponder,
  StyleSheet
} from 'react-native';
import numeral from 'numeral';
import { THEME_COLOR, FONT } from '../config/constants';

const { width, height } = Dimensions.get('window');

const SLIDER_BASE_HEIGHT = 1;
const SLIDER_HIGHTLIGHT_HEIGHT = 5;
const ONE_TEXT_MINIMUM_WIDTH = 8;
const TEXT_LABEL_HEIGHT = 20;


export default class TwoSlider extends Component {
  constructor(props) {
    super(props);

    numeral.language('sg', {
      delimiters: {
        thousands: ','
      },
      currency: {
        symbol: 'S$'
      }
    });
    numeral.language('sg');

    const {
      lineBaseColor = 'grey',
      lineHighlightColor = 'paleturquoise',
      leftSliderColor = 'lightblue',
      rightSliderColor = 'lightsteelblue',
      minValue = 0,
      maxValue = 300000,
      sliderSize = 30,
      numberOfStops = 60,
      lineWidth,
      onChange
    } = props;

    const thisProps = {
      lineBaseColor, lineHighlightColor,
      leftSliderColor, rightSliderColor,
      sliderSize, numberOfStops, lineWidth,
      onChange
    };
    Object.assign(this, thisProps);

    this.intervalX = lineWidth / numberOfStops;
    this.intervalValue = (maxValue-minValue) / numberOfStops;

    this.state = {
      leftSliderX: 0,
      rightSliderX: lineWidth,
      leftValue: minValue,
      rightValue: maxValue
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

  componentDidMount() {
    // Make sure that handlerView is set
    if (typeof this.lineWidth === 'undefined') {
      throw "Set lineWidth props in TwoSlider Component. Hint: It is a Number."
    }
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
    const leftTextMinimumWidth = ONE_TEXT_MINIMUM_WIDTH * numeral(this.state.leftValue).format('$0,0').length;
    const rightTextMinimumWidth = ONE_TEXT_MINIMUM_WIDTH * numeral(this.state.rightValue).format('$0,0').length;

    const leftTextWidth = ((v) => {
      // Cannot be less than leftTextMinimumWidth, otherwise it will screw up the view
      if (v < leftTextMinimumWidth) return leftTextMinimumWidth;
      // Sum of leftTextWidth and rightTextWidth cannot be more than this.lineWidth
      if (v > this.lineWidth - rightTextMinimumWidth) return this.lineWidth - rightTextMinimumWidth;
      return v;
    })(this.state.leftSliderX);
    const rightTextWidth =  ((v) => {
      if (v < rightTextMinimumWidth) return rightTextMinimumWidth;
      if (v > this.lineWidth - leftTextMinimumWidth) return this.lineWidth - leftTextMinimumWidth;
      return v;
    })(this.lineWidth - this.state.rightSliderX);
    // middleTextWidth cannot be 0, give it a minimum value
    const middleTextWidth = (this.lineWidth - (leftTextWidth + rightTextWidth)) || 0.01;

    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{height: TEXT_LABEL_HEIGHT, width: leftTextWidth, textAlign: 'right', fontFamily: FONT}}>{numeral(this.state.leftValue).format('$0,0')}</Text>
          <Text style={{height: TEXT_LABEL_HEIGHT, width: middleTextWidth}}></Text>
          <Text style={{height: TEXT_LABEL_HEIGHT, width: rightTextWidth, textAlign: 'left', fontFamily: FONT}}>{numeral(this.state.rightValue).format('$0,0')}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: this.sliderSize/2}}>
          <View style={{height: SLIDER_BASE_HEIGHT, width: this.state.leftSliderX, backgroundColor: this.lineBaseColor}}></View>
          <View style={{height: SLIDER_HIGHTLIGHT_HEIGHT, width: this.state.rightSliderX - this.state.leftSliderX, backgroundColor: this.lineHighlightColor}}></View>
          <View style={{height: SLIDER_BASE_HEIGHT, width: this.lineWidth - this.state.rightSliderX, backgroundColor: this.lineBaseColor}}></View>
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
            marginLeft: -this.sliderSize/2,
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
        if (positionX > 0 && positionX < this.state.rightSliderX) {
          const snapInterval = Math.round(positionX/this.intervalX);
          const snapPositionX = snapInterval * this.intervalX;
          // Because we allow slider position and slider value to be different,
          // so that the values of 2 sliders can overlap but yet placed at different positions,
          // the calculated leftValue using slider position should be checked against the rightValue.
          const leftValue = (snapInterval * this.intervalValue) > this.state.rightValue ?
            this.state.leftValue : (snapInterval * this.intervalValue);
          const previousLeftValue = this.state.leftValue;
          if (this.props.onChange && previousLeftValue !== leftValue) {
            this.props.onChange({ leftValue, rightValue: this.state.rightValue });
          }
          // You dont want the sliders to intersect, so you stop 1/2 slider before
          const slightlyLeftOfRightSliderX = this.state.rightSliderX - this.sliderSize/2;
          this.setState({
            leftSliderX: snapPositionX > slightlyLeftOfRightSliderX ? slightlyLeftOfRightSliderX : snapPositionX,
            leftValue
          });
        }
        break;
      }
      case 'rightSlider': {
        const positionX = this.previousRightSliderX + dx;
        // left boundary is left slider, right boundary is width of line
        if (positionX > this.state.leftSliderX && positionX < this.lineWidth) {
          const snapInterval = Math.round(positionX/this.intervalX);
          const snapPositionX = snapInterval * this.intervalX;
          // Because we allow slider position and slider value to be different,
          // so that the values of 2 sliders can overlap but yet placed at different positions,
          // the calculated rightValue using slider position should be checked against the leftValue.
          const rightValue = (snapInterval * this.intervalValue) < this.state.leftValue ?
            this.state.rightValue : (snapInterval * this.intervalValue);
          const previousRightValue = this.state.rightValue;
          if (this.props.onChange && previousRightValue !== rightValue) {
            this.props.onChange({ leftValue: this.state.leftValue, rightValue });
          }
          // You dont want the sliders to intersect, so you stop 1/2 slider after
          const slightlyRightOfLeftSliderX = this.state.leftSliderX + this.sliderSize/2;
          this.setState({
            rightSliderX: snapPositionX < slightlyRightOfLeftSliderX ? slightlyRightOfLeftSliderX : snapPositionX,
            rightValue
          });
        }
        break;
      }
    }
  }

  handlePanResponderEnd(e, gestureState) {
  }

}
