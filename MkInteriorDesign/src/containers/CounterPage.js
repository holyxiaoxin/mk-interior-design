import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { mapDispatchToProps, connect } from '../util/Connector';

class CounterPage extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement } = this.props.actions;
    const { count } = this.props.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Clicked: {count} times</Text>
        <TouchableHighlight onPress={increment}>
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={incrementIfOdd}>
          <Text style={styles.text}>Increment if odd</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => incrementAsync()}>
          <Text style={styles.text}>Increment async</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const mapStateToProps = (state) => {
  return { state: state.counter };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
