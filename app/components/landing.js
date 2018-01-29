import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Login from './login';
import Secured from './secured';

class Landing extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render () {
    const {routes} = this.context;
    //const goToPageTwo = () => Actions.pageTwo({text: 'Helo world'});

    /*  if (this.props.isLoggedIn) {
          return <Secured />;
      } else {}*/
          return <Login />;



  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1
  }
})
const mapStateToProps = (state, props) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(Landing);
