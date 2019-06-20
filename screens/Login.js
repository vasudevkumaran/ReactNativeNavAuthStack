import React, {Component} from 'react';
import {View,TextInput,Button} from 'react-native';
import style from '../MyStyle';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component{

    static navigationOptions = {
        title:'Login'
    }

    constructor(props){
        super(props);
        this.state = {username:'',password:''}
    }

    checkLogin = async () => {
        const {username,password} = this.state;
        if (username === 'admin' && password === 'admin'){
            //allow login
            await AsyncStorage.setItem('username',username);
            this.props.navigation.navigate('Loading');
        }else{
            //show error
            await AsyncStorage.clear();
        }
    }

    render(){
        return<View style={style.fullScreenView}>
            <TextInput placeholder="Enter Username"  style={style.textInput} 
            value={this.state.username} keyboardType='default' 
            onChangeText={(text) => this.setState({username:text})}
            />
            <TextInput placeholder="Enter Password"  style={style.textInput} 
            value={this.state.password} keyboardType='default' secureTextEntry={true}
            onChangeText={(text) => this.setState({password:text})}
            />
            <Button title="Login" onPress={this.checkLogin} />
        </View>
    }
}
