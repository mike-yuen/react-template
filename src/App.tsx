import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Template from './templates';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Template />
      </Provider>
    );
  }
}

export default App;
