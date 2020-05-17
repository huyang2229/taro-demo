import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

// import BaseComponent from '../base-component'
import BaseComponent from './base-component'
import CompOne from './comp1'

export default class Comp3 extends BaseComponent {
    render() {
        return (
            <View>
                <CompOne />
                <Text>Comp3</Text>
            </View>
        )
    }
}
