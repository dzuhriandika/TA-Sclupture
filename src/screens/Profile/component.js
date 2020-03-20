import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import IMAGES from '../../config/image';
import Header from '../../components/Header';
import {Container, Text, View} from 'native-base';
import Style from './styles';
import Edit from '../../Svg/Edit';
import Tentang from '../../Svg/Tentang';
import Arrow from '../../Svg/arrow';
import Keluar from '../../Svg/Keluar';
import Bantuan from '../../Svg/Bantuan';
import Card from '../../components/CardProfile';
import AsyncStorage from '@react-native-community/async-storage';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    let data = await AsyncStorage.getItem('email');
    let split = data.split('@');

    this.setState({email: split[0], data});
  }
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header title="Profile" />
        <View style={Style.container}>
          <View style={Style.profilWrapper}>
            <Image
              source={IMAGES.profil}
              resizeMode="contain"
              style={Style.profil}
            />
            <View style={Style.nameWrapper}>
              <Text style={Style.name}>{this.state.email}</Text>
              <Text style={Style.smk}>{this.state.data}</Text>
            </View>
          </View>
          <View style={Style.editIcon}>
            <TouchableOpacity>
              <Edit />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AboutUs')}>
            <Card title="Tentang Kami" icon1={<Tentang />} icon2={<Arrow />} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Bantuan')}>
            <Card title="Bantuan" icon1={<Bantuan />} icon2={<Arrow />} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Card title="Keluar" icon1={<Keluar />} icon2={<Arrow />} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
