import Loadable from 'react-loadable';
import React from 'react';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
      return <div>加载中</div>
  }  
//   loading: Loading,
});

// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }

export default () => (<LoadableComponent />);