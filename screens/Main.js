import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import style from '../MyStyle';

export default class Main extends Component{

    static navigationOptions = {
        title:'Home'
    }

    constructor(props){
        super(props);
        
    }
    
    render(){
        return<View style={style.fullScreenView}>
            <Text>Home Screen coming here...</Text>
        </View>
    }
}
