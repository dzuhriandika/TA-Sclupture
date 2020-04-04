/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, View, Body} from 'native-base';
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
          title="Pameran Seni Rupa dan Desain Grafis"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <Image style={Style.gambar} source={IMAGES.berita1} />
          <View>
            <Text style={Style.body}>
              Jakarta (ANTARA) - Beberapa agenda pilihan yang akan berlangsung
              di Jakarta hari ini, berikut adalah rangkumannya.
            </Text>
          </View>
          <View>
            <Text style={Style.title}>{'\n'}1. Pameran "Warna Dalam Gua"</Text>
            <Text style={Style.body}>
              Pameran karya seniman asal Thailand, Mit Jai Inn ini berlangsung
              di Museum MACAN, Jakarta hingga 1 Maret mendatang. Pameran ini
              mengajak anak-anak untuk ikut berpartisipasi mengekspresikan
              dirinya melalui coretan-coretan di dinding gua yang penuh warna.
            </Text>
          </View>
          <View>
            <Text style={Style.title}>{'\n'}2. "Excursion"</Text>
            <Text style={Style.body}>
              Pameran seni rupa ini menyajikan tentang perjalanan hirup yang
              digelar pada 8-27 Januari di Gedung D, Galeri Nasional Indonesia.
              Pameran ini diselenggarakan oleh Jakarta Illustration Visual Art
              (JIVA) bersama Galeri Nasional Indonesia.
            </Text>
          </View>
          <View>
            <Text style={Style.title}>{'\n'}3. Poze x Mario Photography</Text>
            <Text style={Style.body}>
              Pameran foto kolaborasi yang diadakan di Mal Neo Soho lantai 3
              berlangsung hingga 15 Februari. Tiket dijual mulai dari Rp50.000.
            </Text>
          </View>
          <View>
            <Text style={Style.title}>{'\n'}4. Seek a Seek #2 Kon/Jun/Gsi</Text>
            <Text style={Style.body}>
              Pameran desain grafis dan pasar seni ini berlangsung selama dua
              bulan, mulai dari 29 November 2019 hingga 31 Januari 2020 di
              Dia.Lo.Gue Artspace. Seek a Seek #2 menampilkan karya lebih dari
              40 desainer yang merespons permasalahan seputar zaman digital.
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
