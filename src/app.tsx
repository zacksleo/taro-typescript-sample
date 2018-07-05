import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index';

import './app.css';

class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: 'WeChat',
    }
  };

  componentDidMount() {
    //
  }

  componentDidShow() {
    //
  }

  componentDidHide() {
    //
  }

  componentCatchError() {
    //
  }

  render() {
    return (
      <Index />
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
