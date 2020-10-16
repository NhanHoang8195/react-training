import React from 'react';
import { useTranslation } from 'react-i18next';
import * as actions from './action';
import {connect} from 'react-redux';
import useInjectReducer from '../useWrapper';
import userReducer from './reducer';

// i18n translations might still be loaded by the http backend
// use react's Suspense
function User(props) {
  const { t } = useTranslation('user');
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <h1>Count: {props.count}</h1>
      <button onClick={props.increaseUser}>User Increase</button>
      <button onClick={props.decreaseUser}>User Decrease</button>
    </div>);
}

const mapStateToProps = state => {
  return {
    count: state.userReducer.count,
    rehydrated: state.userReducer.rehydrated,
  }
};

const mapDispatchToProps = {
  increaseUser: actions.increaseUser,
  decreaseUser: actions.decreaseUser,
};

const wrappedComponent =  useInjectReducer(User, userReducer, 'userReducer');
export default connect(mapStateToProps, mapDispatchToProps)(wrappedComponent);