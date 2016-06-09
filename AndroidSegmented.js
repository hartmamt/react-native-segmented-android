'use strict';

var React = require('react');
var { requireNativeComponent, View } = require('react-native');

var NativeAndroidSegmented = requireNativeComponent('AndroidSegmented', AndroidSegmented);

class AndroidSegmented extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.nativeEvent);
    }
  }

  render() {
    return (
      <NativeAndroidSegmented
        {...this.props}
        onChange={this._onChange}/>
    );
  }
}

var colorType = function (props, propName, componentName) {
  var checker = function() {
    var color = props[propName];
    var regex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
    if (!regex.test(color)) {
      return new Error('Only accept color formats: #RRGGBB and #AARRGGBB');
    }
  };

  return React.PropTypes.string(props, propName, componentName) || checker();
}

AndroidSegmented.propTypes = {
  ...View.propTypes,
  childText: React.PropTypes.arrayOf(React.PropTypes.oneOfType([ React.PropTypes.string ])),
  orientation:React.PropTypes.string,
  tintColor:React.PropTypes.arrayOf(React.PropTypes.oneOfType([ React.PropTypes.string ])),
  selectedPosition:React.PropTypes.number,
  onChange: React.PropTypes.func,
}

AndroidSegmented.defaultProps = {

};

module.exports = AndroidSegmented;
