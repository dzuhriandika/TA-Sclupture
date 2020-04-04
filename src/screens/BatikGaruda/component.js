/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, View, Body} from 'native-base';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import ArrowLeft from '../../Svg/arrowLeft';
import Header from '../../components/Header';
import Style from './styles';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  render() {
    return (
      <Container>
        <Header
          title="Jenis-Jenis Seni Ukir"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <Text style={Style.body}>
            Menurut Bastomi (1982 : 3-4), terdapat enam jenis seni ukir yang
            dihasilkan oleh para seniman, antara lain yaitu :
          </Text>
          <View>
            <Text style={Style.title}>{'\n'}1. Jenis Ukiran Cembung</Text>
            <Text style={Style.body}>
              TUkiran cembung merupakan berbentuk ukiran cembung, jenis ukiran
              ini banyak digunakan pada pembuatan relief.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              2. Jenis Ukiran Cekung
            </Text>
            <Text style={Style.body}>
              Ukiran cekung yaitu suatu bentuk ukiran yang membentuk cekung.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              3. Jenis Ukiran Susun
            </Text>
            <Text style={Style.body}>
              Ukiran susun adalah suatu ukiran yang berbentuk bersusun-susun.
              Misalnya pada ukiran daun yang besar di bawah ukiran daun yang
              sedang dan kecil sehingga terjadi bentuk yang indah.
            </Text>
            <Text />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              4. Jenis Ukiran Garis ( Cawen)
            </Text>
            <Text style={Style.body}>
              Ukiran garis merupakan bentuk ukiran yang diukir pada garis-garis
              gambarnya saja. Jenis ukiran garis banyak digunakan pada logam
              sebagai ukiran guratan.
            </Text>
            <Text />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              5. Jenis Ukiran Takokan
            </Text>
            <Text style={Style.body}>
              Yaitu Suatu bentuk ukiran yang tidak menggunakan bingkai, jadi
              ukiran ini memperlihatkan tepi-tepi batas ukiran. Ukiran takokan
              erat hubungannya dengan jenis ukiran krawangan.
            </Text>
            <Text />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              6. Jenis Ukiran Tembus (Krawangan)
            </Text>
            <Text style={Style.body}>
              Ukiran tembus atau krawangan adalah suatu bentuk ukiran yang tidak
              menerapkan dasar, jadi ukiran ini dasarnya tembus (berlubang).
              Sehingga sering dipakai untuk penyekat ruang (sketsel), kursi,
              ukir tempel dan sebagainya.
              {'\n'}
            </Text>
            <Text />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
