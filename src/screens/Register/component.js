import React, {Component} from 'react';
import {TextInput, View, Text, ScrollView, ToastAndroid} from 'react-native';
import {Button} from 'native-base';
import Style from './styles';
import Email from '../../Svg/Email';
import Password from '../../Svg/Password';
import EmailReg from '../../Svg/emailReg';
import {ENDPOINT} from '../../configs';
import AsyncStorage from '@react-native-community/async-storage';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      school: '',
      email: '',
      fullname: '',
      password: '',
      hidden: true,
    };
  }
  _onPress = async () => {
    const {username, email, fullname, password} = this.state;
    const payload = {
      email: email,
      password: password,
    };
    const params = {username, email, fullname, password};
    if (username === '' && email === '' && fullname === '' && password === '') {
      ToastAndroid.show('Masukan Password & Email', ToastAndroid.SHORT);
    } else {
      try {
        const result = await ENDPOINT.register(params);
        await AsyncStorage.setItem('email', payload.email);
        if (result.code === 201) {
          ToastAndroid.show('Succes to login', ToastAndroid.SHORT);
          this.props.navigation.navigate('App');
        } else {
          ToastAndroid.show('Failed to Register', ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
      }
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={Style.mainScreen}>
          <View style={Style.container}>
            <View style={Style.form}>
              <View style={Style.titleWrapper}>
                <Text style={Style.title}>Daftar</Text>
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Username</Text>
              </View>
              <View style={Style.inputWrapper}>
                <Email />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  placeholder="Username"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                  onChangeText={username => this.setState({username})}
                />
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Fullname</Text>
              </View>
              <View style={Style.inputWrapper}>
                <Email />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  placeholder="Fullname"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                  onChangeText={fullname => this.setState({fullname})}
                />
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Email</Text>
              </View>
              <View style={Style.inputWrapper}>
                <EmailReg />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  placeholder="Email"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                  onChangeText={email => this.setState({email})}
                />
              </View>
              <View style={Style.labelWrapper}>
                <Text style={Style.label}>Password</Text>
              </View>
              <View style={Style.inputWrapper}>
                <Password />
                <TextInput
                  placeholderTextColor="#C4C4C4"
                  secureTextEntry={true}
                  placeholder="Password"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                  onChangeText={password => this.setState({password})}
                />
              </View>
            </View>
            <Button onPress={this._onPress} style={Style.btn}>
              <Text uppercase={false} style={Style.btnTeks}>
                Daftar
              </Text>
            </Button>
            <Text style={Style.registerTeks}>
              Sudah punya akun?
              <Text
                onPress={() => this.props.navigation.navigate('Login')}
                style={Style.registerTeksPress}>
                {' '}
                Masuk Sekarang
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
