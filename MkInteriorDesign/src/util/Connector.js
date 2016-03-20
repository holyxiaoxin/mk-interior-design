import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions/index';

exports.connect = connect;

// Just map all actions for the default method
exports.mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(Actions, dispatch) };
}
