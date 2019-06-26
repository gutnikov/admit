import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import AppLayout from './layout';
import pages from './pages';
import { routeTo } from 'store/router';
import autobind from 'utils/react/autobind';

class App extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  getSidebar() {
    return pages.map(function({ text, url }) {
      return (
        // eslint-disable-next-line
        <ListItem button key={text} onClick={this.handleSidebarItemClick.bind(this, url)}>
          <ListItemText primary={text} />
        </ListItem>
      );
    }, this);
  }

  getMain() {
    return (
      <Switch>
        {pages.map(({ url, component }) => (
          <Route key={url} path={url} exact component={component} />
        ))}
      </Switch>
    );
  }

  handleSidebarItemClick(url) {
    this.props.actions.routeTo(url);
  }

  render() {
    return <AppLayout sidebarItems={this.getSidebar()} main={this.getMain()} />;
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        routeTo,
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
