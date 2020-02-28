/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Header from '../../components/Header';
import {
  Container,
  Text,
  View,
  Content,
  Image,
  Right,
  Thumbnail,
} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {ScrollView, TouchableOpacity} from 'react-native';
import ArrowLeft from '../../Svg/arrowLeft';
import Arrow from '../../Svg/arrow';
import Card from '../../components/CardMateri';

export default class Materi extends Component {
  render() {
    return (
      <View style={Style.containerView}>
        <Header
          title="Materi"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={Style.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Definition')}>
              <Card title="Seni Ukir" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Type')}>
              <Card title="Fungsi Seni Ukir" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Making')}>
              <Card title="Teknik Seni Ukir" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Garuda')}>
              <Card title="Jenis-jenis Seni Ukir" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Gentongan')}>
              <Card title="Langkah-langkah Pembuatan" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Jepara')}>
              <Card title="Motif Ukir" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Kawung')}>
              <Card title="Alat Ukir" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Keraton')}>
              <Card title="Jenis-jenis Pahat Ukir" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MegaMendung')}>
              <Card title="Perbedaan Ukir & pahat" icon2={<Arrow />} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
