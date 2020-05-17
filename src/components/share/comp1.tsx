import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
// import BaseComponent from '../base-component'
import BaseComponent from './base-component'

export default class Comp1 extends BaseComponent {
    render() {
        return (
            <View>
                <Text>Comp1</Text>
            </View>
        )
    }
}
