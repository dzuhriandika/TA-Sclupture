import React, {Component} from 'react';
import {TouchableOpacity, Image, View, ScrollView} from 'react-native';
import Style from './styles';
import Header from '../../components/Header';
import ArrowLeft from '../../Svg/arrowLeft';
import IMAGES from '../../config/image';
import Galeri from '../../components/GaleriGambar';

export default class Profile extends Component {
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header title="Gallery" />
        <ScrollView>
          <View style={Style.container}>
            <View style={Style.contentWrapper}>
              <Galeri
                title="Motif Seni Ukir Aceh"
                gambar={
                  <Image style={Style.gambar} source={IMAGES.galeri1aceh} />
                }
              />
              <Galeri
                title="Motif Seni Ukir Bali"
                gambar={
                  <Image style={Style.gambar} source={IMAGES.galeri2bali} />
                }
              />
              <Galeri
                title="Motif Seni Ukir Dayak"
                gambar={
                  <Image style={Style.gambar} source={IMAGES.galeri3dayak} />
                }
              />
            </View>
            <View style={Style.contentWrapper}>
              <Galeri
                title="Motif Seni Ukir Irian"
                gambar={
                  <Image style={Style.gambar} source={IMAGES.galeri4irian} />
                }
              />
              <Galeri
                title="Motif Seni Ukir Jepara"
                gambar={
                  <Image style={Style.gambar} source={IMAGES.galeri5jepara} />
                }
              />
              <Galeri
                title="Motif Seni Ukir Surakarta"
                gambar={
                  <Image style={Style.gambar} source={IMAGES.galeri6jogja} />
                }
              />
            </View>
            <View style={Style.contentWrapper}>
              <Galeri
                title="Motif Seni Ukir Toraja"
                gambar={
                  <Image
                    style={Style.gambar}
                    source={IMAGES.galeri7surakarta}
                  />
                }
                style={Style.galery}
              />
              <Galeri
                title="Motif Seni Ukir Toraja"
                gambar={
                  <Image style={Style.gambar} source={IMAGES.galeri8toraja} />
                }
              />

              <Galeri
                title="Motif Seni Ukir Papua"
                gambar={
                  <Image style={Style.gambar} source={IMAGES.galeri4irian} />
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
