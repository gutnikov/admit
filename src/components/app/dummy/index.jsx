import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const dispatchInit = function() {
  return {
    type: 'INIT',
  };
};

class Dummy extends React.PureComponent {
  componentDidMount() {
    this.props.actions.dispatchInit();
  }

  render() {
    return <div>A Component template</div>;
  }
}

function mapStateToProps(/*state*/) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        dispatchInit,
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dummy);
