import React, {Component} from 'react';
import {Text, View, ToastAndroid, Image, TextInput} from 'react-native';
import {Button} from 'native-base';
import axios from 'axios';
import Style from './styles';
import IMAGES from '../../config/image';
import Email from '../../Svg/Email';
import Password from '../../Svg/Password';
import {ENDPOINT} from '../../configs';
import {STORAGE_KEY} from '../../constants';
import storage from '../../utils/storage';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
  static navigationOptions = {header: null};
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  _onPress = async () => {
    const {email, password} = this.state;
    const payload = {
      email: email,
      password: password,
    };
    const params = {email, password};
    if (email === '' && password === '') {
      ToastAndroid.show('Masukan Password & Email', ToastAndroid.SHORT);
    } else {
      try {
        const result = await ENDPOINT.login(params);
        if (result.code === 200) {
          await AsyncStorage.setItem('email', payload.email);
          await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.token);
          console.log(STORAGE_KEY.TOKEN_LOGIN);
          ToastAndroid.show('Succes To Login', ToastAndroid.SHORT);
          this.props.navigation.navigate('App');
        } else {
          ToastAndroid.show('Failed to Login', ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
      }
    }
  };
  render() {
    const {email, password} = this.state;
    return (
      <View style={Style.mainScreen}>
        <View style={Style.container}>
          <View style={Style.form}>
            <View style={Style.titleWrapper}>
              <Text style={Style.title}>Masuk</Text>
            </View>
            <View style={Style.labelWrapper}>
              <Text style={Style.label}>Email</Text>
            </View>
            <View style={Style.inputWrapper}>
              <Email />
              <TextInput
                value={email}
                placeholderTextColor="#C4C4C4"
                placeholder="Email"
                underlineColorAndroid="transparent"
                style={Style.input}
                onChangeText={email => this.setState({email})}
              />
            </View>
            <View style={Style.labelWrapper}>
              <Text style={Style.label}>Pasword</Text>
            </View>
            <View style={Style.inputWrapper}>
              <Password />
              <TextInput
                value={password}
                placeholderTextColor="#C4C4C4"
                placeholder="Password"
                underlineColorAndroid="transparent"
                style={Style.input}
                onChangeText={password => this.setState({password})}
              />
            </View>
            <View style={Style.lupasWrapper}>
              <Text style={Style.lupas}>Lupa Password?</Text>
            </View>
          </View>
          <Button onPress={this._onPress} style={Style.btn}>
            <Text uppercase={false} style={Style.btnTeks}>
              Masuk
            </Text>
          </Button>
          <Text style={Style.registerTeks}>
            Belum punya akun?
            <Text
              onPress={() => this.props.navigation.navigate('Register')}
              style={Style.registerTeksPress}>
              {' '}
              Daftar Sekarang
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
