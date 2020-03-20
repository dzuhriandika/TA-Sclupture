import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import Style from './styles';
import Card from '../../components/Card';
import Header from '../../components/Header';
import ArrowLeft from '../../Svg/arrowLeft';
import IMAGES from '../../config/image';

export default class Lala extends Component {
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header
          title="Tentang Kami"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={Style.container}>
            <View style={Style.card}>
              <Text style={Style.title}>Sclupture</Text>
              <Text style={Style.desc}>
                Sclupture adalah aplikasi pembelajaran seni budaya di bidang
                Ukir & Pahat
              </Text>
            </View>
            <View>
              <Card
                icon1={
                  <Image
                    source={IMAGES.rz}
                    resizeMode="contain"
                    style={Style.nana}
                  />
                }
                title="Didi Kurniawan"
                divisi="UI/UX Designer"
              />
              <Card
                icon1={
                  <Image
                    source={IMAGES.zuh}
                    resizeMode="contain"
                    style={Style.nana}
                  />
                }
                title="Bintang Piaggi"
                divisi="Front-End Developer"
              />
              <Card
                icon1={
                  <Image
                    source={IMAGES.div}
                    resizeMode="contain"
                    style={Style.nana}
                  />
                }
                title="Diva Ayu"
                divisi="Back-End Developer"
              />
              <Card
                icon1={
                  <Image
                    source={IMAGES.rat}
                    resizeMode="contain"
                    style={Style.nana}
                  />
                }
                title="Bungga Fadilah"
                divisi="Content Writer"
              />
              <Card
                icon1={
                  <Image
                    source={IMAGES.mar}
                    resizeMode="contain"
                    style={Style.nana}
                  />
                }
                title="Fitri Setiani"
                divisi="Content Writer"
              />
            </View>
            <Text style={Style.cp}>© 2020. Sclupture - All Right Reserved</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
