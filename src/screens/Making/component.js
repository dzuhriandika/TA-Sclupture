/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Thumbnail,
  Left,
  Body,
  Title,
  Right,
  Container,
} from 'native-base';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Style from './styles';
import ArrowLeft from '../../Svg/arrowLeft';
import Header from '../../components/Header';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  render() {
    return (
      <Container>
        <Header
          title="Teknik Seni Ukir"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <Text style={Style.body}>
            Ada beberapa teknik seni ukir yang sering kita temukan dalam
            berbagai karya seni ukir , antara lain :
          </Text>
          <View>
            <Text style={Style.title}>{'\n'}1. Carving</Text>
            <Text style={Style.body}>
              Teknik carving adalah seni chipping dan memotong pada bagian datar
              dari kayu untuk membentuk ukiran agar tampaknya menjadi tiga
              dimensi. Teknik ini biasanya dilakukan dengan menggunakan alat
              bantu seperti pahat dan palu, serta pisau ukir yang digunakan
              untuk memperjelas detail.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              2. Chip Carving
            </Text>
            <Text style={Style.body}>
              Teknik chip carving pada umumnya digunakan pada potongan-potongan
              yang lebih besar dari pekerjaan seperti tunggul pohon atau kayu
              dan menggunakan kapak dan pahat yang lebih besar. Teknik ini
              menciptakan karya yang besar seperti patung dan melibatkan proses
              yang cukup rumit.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              3. Pembakaran Kayu
            </Text>
            <Text style={Style.body}>
              Pembakaran kayu adalah teknik terutama yang digunakan untuk
              menambah desain atau finishing kayu, namun beberapa seniman
              benar-benar menggunakan metode pembakaran untuk mengukir kayu
              kecil. Kayu yang telah dibakar akan menghitam di sekitar ukiran
              akhir dan memperjelas kesan sehingga tampak lebih hidup.
              {'\n'}
            </Text>
            <Text />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              4. Mengerik
            </Text>
            <Text style={Style.body}>
              Teknik mengerik adalah salah satu cara lama dan paling sederhana
              dalam teknik mengukir pemula. Teknik ini hanya membutuhkan tidak
              lebih dari sepotong kayu dan pisau ukir.
              {'\n'}
            </Text>
            <Text />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
