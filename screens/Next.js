import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import style from '../MyStyle';

export default class Next extends Component{

    static navigationOptions = {
        title:'Next'
    }

    constructor(props){
        super(props);
        
    }
    
    render(){
        return<View style={style.fullScreenView}>
            <Text>Next Screen coming here...</Text>
        </View>
    }
}
