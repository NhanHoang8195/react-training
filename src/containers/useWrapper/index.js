import { store } from '../../store';


function useInjectReducer(wrappedComponent, asyncReducer, reducer) {
  store.injectReducer(reducer, asyncReducer);

  return wrappedComponent;
}

export default useInjectReducer;