import React from 'react';
import { connect } from 'react-redux';
import { store } from 'app/store';

function useInjectReducer(WrappedComponent, asyncReducer, reducerKey) {
  store.injectReducer(reducerKey, asyncReducer);
  const mapStateToProps = state => ({
    rehydrated: state[reducerKey]?.['_persist']?.rehydrated,
  });
  return connect(mapStateToProps, null)(function (props) {
    const { rehydrated, ...rest } = props;
    return rehydrated === false ? null: <WrappedComponent {...rest} />;
  })
}

export default useInjectReducer;