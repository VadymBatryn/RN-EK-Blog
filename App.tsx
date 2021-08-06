import React from 'react';
import {Provider} from 'react-redux';
//Navigation
import AppNavigator from './src/navigation/BlogAppNavigation';
//Store
import {store} from './src/store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
