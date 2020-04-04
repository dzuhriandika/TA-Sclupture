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
          title="Motif Ukir"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <Text style={Style.body}>
            Setiap daerah memiliki ciri khas motif ukiran. Penamaan ukiran
            biasanya berdasarkan tempat dari mana motif itu berasal. Misalnya,
            Motif Pajajaran, Motif Mataram, Motif Majapahit, Motif Bali, Motif
            Jepara, Motif Madura, Motif Dayak, Motif Nias, Motif Pekalongan,
            Motif Cirebon, Motif Yogyakarta dan Motif Surakarta. Masing-masing
            motif memiliki ciri khas tersendiri yang menjadi kekuatan dan
            kekayaan ragam hias seni ukir nusantara.
          </Text>
          <Text style={Style.body}>
            Dari berbagai macam motif tersebut ada beberapa yang memiliki
            persamaan, seperti motif relung, patran, ulir, benangan, cawen,
            pecahan, angkup, endong, simbar, trubusan, cula, sunggar, dan
            jambul. Jenis ukiran ini memiliki kesamaan dalam bentuknya namun
            pada akhirnya memiliki sentuhan tersendiri sehingga tetap saja
            dengan mudah dapat dibedakan. Misalnya seni ukir motif cula antara
            satu daerah dengan daerah lainnya memang sama dari bentuknya, tapi
            penampilan akhirnya tetap memiliki ciri tersendiri, sehingga seni
            ukir motif cula dari daerah A akan berbeda dengan dari daerah B,
            begitu seterusnya. Itulah kenapa seni ukir nusantara benar-benar
            menjadi macam ragam yang memperkaya seni ukir yang ada.
          </Text>
          <View>
            <Text style={Style.title}>{'\n'}1. Motif Seni Ukir Jepara</Text>
            <Image style={Style.gambar} source={IMAGES.galeri5jepara} />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              2. Motif Seni Ukir Toraja
            </Text>
            <Image style={Style.gambar} source={IMAGES.galeri8toraja} />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              4. Motif Seni Ukir Yogyakarta
            </Text>
            <Image style={Style.gambar} source={IMAGES.galeri6jogja} />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              5. Motif Seni Ukir Surakarta
            </Text>
            <Image style={Style.gambar} source={IMAGES.galeri7surakarta} />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
