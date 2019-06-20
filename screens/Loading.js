import React, {Component} from 'react';
import {View,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Loading extends Component{

    constructor(props){
        super(props);
        this.checkIfLoggedInOrNot();
    }

    checkIfLoggedInOrNot = async () => {
        const username = await AsyncStorage.getItem('username');
        if (username){
            //logged in
             this.props.navigation.navigate('HomeStack');
        }else{
            // yet to login
             this.props.navigation.navigate('AuthStack');
        }
    }

    render(){
        return<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator/>
        </View>
    }
}
