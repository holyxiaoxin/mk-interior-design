import React, { Component } from 'react-native';

class BaseComponent extends Component {
    _bind(...methods) {
        methods.forEach( (method) => this[method] = this[method].bind(this) );
    }
}

export default BaseComponent;