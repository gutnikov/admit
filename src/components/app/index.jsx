import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '@material-ui/core/Button';

const dispatchInit = function() {
  return {
    type: 'INIT',
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.actions.dispatchInit();
  }

  render() {
    return (
      <Button variant="contained" color="primary">
        imabutton!
      </Button>
    );
  }
}

function mapStateToProps() {
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
