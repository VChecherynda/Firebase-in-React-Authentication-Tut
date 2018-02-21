import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { PasswordForgetForm } from './PasswordForget';
import withAuthorization from './withAuthorization';
import PasswordChangeForm from './PasswordChange';


const AccountPage = ({ authUser }) =>
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;


export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);