/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Text,
  Icon,
  Header,
  Left,
  Body,
  Button,
  Title,
  View,
  Content,
  Alert,
  Thumbnail,
  Card,
} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from 'react-native';
import Materi from '../../Svg/Materi';
import Search from '../../Svg/search';
import Tutorial from '../../Svg/Tutorial';
import Test from '../../Svg/Test';
import Quiz from '../../Svg/Quiz';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {
  static navigationOptions = {header: null};
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

    this.setState({email: split[0]});
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#F7F7F7'}}>
        <View style={{backgroundColor: '#F7F7F7'}}>
          <ImageBackground
            source={IMAGES.bImage}
            style={{width: 100 + '%', height: 220}}>
            <View style={{paddingHorizontal: 15}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  marginTop: 22,
                  fontFamily: 'Nunito-SemiBold',
                }}>
                Hello, {this.state.email}
              </Text>
              <View style={Style.inputWrapper}>
                <Search />
                <TextInput
                  placeholderTextColor="white"
                  placeholder="Cari apa saja disini"
                  underlineColorAndroid="transparent"
                  style={Style.input}
                />
              </View>
              <View style={Style.iconContainer}>
                <View style={Style.card}>
                  
                  <Button
                    onPress={() => this.props.navigation.navigate('Materi')}
                    style={Style.iconBox}>
                    <Materi style={Style.icon} />
                  </Button>
                  <Text style={Style.titleIcon}>Materi</Text>
                </View>
                <View style={Style.card}>
                  <Button
                    onPress={() => this.props.navigation.navigate('Tutorial')}
                    style={Style.iconBox}>
                    <Tutorial style={Style.icon} />
                  </Button>
                  <Text style={Style.titleIcon}>Tutorial</Text>
                </View>
                <View style={Style.card}>
                  <Button
                    onPress={() => this.props.navigation.navigate('Test')}
                    style={Style.iconBox}>
                    <Test style={Style.icon} />
                  </Button>
                  <Text style={Style.titleIcon}>Ujian</Text>
                </View>
                <View style={Style.card}>
                  <Button
                    onPress={() => this.props.navigation.navigate('Quiz')}
                    style={Style.iconBox}>
                    <Quiz style={Style.icon} />
                  </Button>
                  <Text style={Style.titleIcon}>Quiz</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={{marginTop: 50, paddingHorizontal: 15}}>
            <Text
              style={{
                fontSize: 20,
                marginTop: 30,
                marginBottom: 20,
                fontFamily: 'Nunito-SemiBold',
              }}>
              Berita Seni
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Berita1')}>
              <View style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.berita1}
                  style={Style.thumnailMateri}
                />
                <View style={Style.thumnailWrapper}>
                  <Text style={Style.titleMateri}>
                    Pameran Seni Rupa dan Desain Grafis
                  </Text>
                  <Text style={Style.titleThumnail}>
                    Pameran desain grafis dan pasar seni ini berlangsung selama
                    dua bulan, mulai dari ...{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Berita2')}>
              <View style={Style.cardMateri}>
                <Thumbnail
                  square
                  source={IMAGES.berita2}
                  style={Style.thumnailMateri}
                />
                <View style={Style.thumnailWrapper}>
                  <Text style={Style.titleMateri}>
                    H(ART)BOUR Festival 2020
                  </Text>
                  <Text style={Style.titleThumnail}>
                    H(ART)BOUR Festival 2020 bertema "Memory Harbour" yang
                    diambil dari nama lukisan ...{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
