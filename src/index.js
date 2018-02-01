import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Route from './router/';

import Home from "./pages/home/home";

// 监听state变化
// store.subscribe(() => {
//   console.log('store发生了变化');
// });
const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  )
}


render(Route);

