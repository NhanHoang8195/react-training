import React from 'react';
import { connect } from 'react-redux';
import {store}  from 'app/store';
import { PERSIST_KEY } from 'app/constants/reducerKeys';

function useInjectReducer(WrappedComponent, asyncReducer, asyncSaga, reducerKey) {
  store.injectReducer(reducerKey, asyncReducer);
  store.injectSaga(reducerKey, asyncSaga);
  const mapStateToProps = state => ({
    rehydrated: state[reducerKey]?.[PERSIST_KEY]?.rehydrated,
  });
  return connect(mapStateToProps, null)(function (props) {
    const { rehydrated, ...rest } = props;
    return rehydrated === false ? null: <WrappedComponent {...rest} />;
  });
}

export default useInjectReducer;
