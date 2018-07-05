import { Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import './index.css';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {
    //
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {
    //
  }

  componentDidShow() {
    //
  }

  componentDidHide() {
    //
  }

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
