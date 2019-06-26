import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const dispatchInit = function() {
  return {
    type: 'INIT',
  };
};

export class App extends React.Component {
  componentDidMount() {
    this.props.actions.dispatchInit();
  }

  render() {
    return <div>App is ehre</div>;
  }
}

function mapStateToProps(state) {
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
)(App);
