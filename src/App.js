import React, { PureComponent } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
            <Header />
              <Route path='/login' exact component={Login}></Route>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
