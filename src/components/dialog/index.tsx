import Taro from '@tarojs/taro';
import {View} from '@tarojs/components'
// import BaseComponent from '../base-component'
import { CompOne, CompTwo, BaseComponent } from '../share';
// import { CompOne, CompTwo } from '../share';

export default class Dialog extends BaseComponent {
    render() {
        return (
            <View>
                <CompOne />
                <CompTwo />
            </View>
        )
    }
}
