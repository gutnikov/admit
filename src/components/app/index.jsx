import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Switch, Route, Link } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../../store';

import Main from './routes/main';
import Reports from './routes/reports';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Router history={history}>
        <div>
          <Link to="/reports">Reports</Link>
          <Link to="/">Main</Link>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/reports" exact component={Reports} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
