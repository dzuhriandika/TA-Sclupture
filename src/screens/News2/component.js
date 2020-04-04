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
          title=" H(ART)BOUR Festival 2020"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <Image style={Style.gambar} source={IMAGES.berita2} />
          <View>
            <Text style={Style.body}>
              {'\n'}
              TEMPO.CO, Jakarta - Untuk mengenalkan wajah baru dari Terminal
              Eksekutif Merak - Bakaheuni, ASDP Indonesia Ferry menggagas sebuah
              acara yang bertajuk H(ART)BOUR Festival 2020. Ajang ini merupakan
              kegiatan seni yang melibatkan sejumlah seniman dan didapat
              dinikmati oleh warga Jakarta dan sekitarnya.
            </Text>
          </View>
          <View>
            <Text style={Style.body}>
              {'\n'}
              H(ART)BOUR Festival 2020 bertema "Memory Harbour" yang diambil
              dari nama lukisan Jack B. Yeats dari Irlandia tentang
              ingatan-ingatan lama yang dimiliki para penumpang kapal. Festival
              ini kemudian merepresentasikan ke dalam karya seni.
            </Text>
          </View>
          <View>
            <Text style={Style.body}>
              {'\n'}
              "Festival seni ini mengajak kita meredefinisi kembali makna
              pelabuhan tidak lagi menjadi pelabuhan transit, tetapi menjadi
              destinasi pilihan bagi setiap pengunjung terminal, baik yang ingin
              menyeberang atau tidak," ujar Corporate Secretary PT ASDP
              Indonesia Ferry (Persero), Imelda Alini melalui keterangan resmi
              yang diterima Antara, Senin, 10 Februari 2020. Festival ini
              sendiri diadakan untuk menyasar kalangan semua usia dan digagas
              untuk menjadi kegiatan yang ramah keluarga.
            </Text>
          </View>
          <View>
            <Text style={Style.body}>
              {'\n'}
              "Pelabuhan, seperti halnya seni, adalah titik yang melontarkan
              imajinasi, kemungkinan eksplorasi, tempat-tempat serta pengalaman
              baru yang belum pernah dinikmati. Dengan demikian dapat
              menciptakan kenangan baru bagi masyarakat," kata Imelda.
            </Text>
          </View>
          <View>
            <Text style={Style.body}>
              {'\n'}
              H(ART)BOUR Festival didukung penuh oleh berbagai pihak, yaitu PT
              Hutama Karya, BRI, PT Jasaraharja Putera, PT Jasaraharja dan PT.
              PP (Pembangunan Perumahan).
            </Text>
          </View>
          <View>
            <Text style={Style.body}>
              {'\n'}
              Rangkaian H(ART)BOUR Festival dimulai dengan Pameran Seni
              Rupa/Visual di Ruang Publik di Terminal Eksekutif Sosoro Merak dan
              Terminal Eksekutif Anjungan Agung Bakauheni mulai 21 Desember 2019
              sampai 21 Februari 2020.
            </Text>
            <Text />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
