import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import style from '../MyStyle';

export default class Register extends Component{

    static navigationOptions = {
        title:'Register'
    }

    constructor(props){
        super(props);
        
    }

    render(){
        return<View style={style.fullScreenView}>
            <Text>Register Screen coming here...</Text>
        </View>
    }
}
