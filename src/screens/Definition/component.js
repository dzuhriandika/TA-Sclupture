/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Header from '../../components/Header';
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
import Tentang from '../../Svg/Tentang';
import Arrow from '../../Svg/arrow';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  render() {
    return (
      <Container>
        <Header
          title="Seni Ukir"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <Text style={Style.body}>
            Alam yang kaya raya telah memberi inspirasi kepada masyarakat yang
            berpikir kreatif, seperti tercermin dari seni ukir nusantara yang
            kemudian melahirkan beragam jenis, tergantung kepada kreativitas dan
            daya dukung alam yang kaya. Khusus untuk seni ukir nusantara yang
            berbahan dasar kayu, semakin beragam karena didukung oleh alam
            nusantara yang memiliki hutan tropis sehingga menghasilkan kayu yang
            bisa dipakai sebagai bahan dasar untuk mengukir. Berbeda dengan seni
            ukir modern, seni ukir nusantara yang tradisional lahir tidak saja
            sebagai karya seni dan tujuan untuk berkesenian, melainkan sangat
            terikat erat dengan berbagai persoalan yang tumbuh dan berkembang di
            masyarakat tradisional. Dengan demikian seni ukir tradisional ini
            pada awalnya bisa lahir karena untuk persembahan kepada leluhur
            sesuai dengan kepercayaan masing-masing. Tak jarang seni ukir
            tradisional juga tercipta karena kepentingan untuk alat berburu,
            alat perang atau keperluan lainnya yang kerap ditemukan pada
            kehidupan sehari-hari mereka. Demikian pula inspirasi bentuk
            ukirannya yang terikat kuat kepada alam, memberi keunikan tersendiri
            yang tak sembarang bisa ditemukan di dalam seni ukir modern. Seni
            ukir nusantara sebagai seni ukir tradisional, masing-masing daerah
            memiliki ciri khas sendiri-sendiri sesuai dengan alam dan lingkungan
            tempat mereka tumbuh dan berkembang. Dari kenyataan ini maka seni
            ukir nusantara semakin kaya ragam dan rupanya. Mengukir adalah
            melakukan sesuatu dengan menggores, memahat, dan menoreh pola pada
            permukaan benda yang akan diukir. Biasanya pada kayu untuk meja,
            lemari, kursi, alat atau perkakas perang, berburu, perkakas atau
            peralatan untuk ibadah dan sebagainya. Di Indonesia seni ukir sudah
            ada sejak zaman prasejarah, yaitu pada zaman batu muda. Pada zaman
            itu manusia sudah mengenal perkakas untuk keperluan rumah tangga
            serta benda-benda yang terbuat dari kayu dan gerabah. Dilihat dari
            jenisnya, ukiran dibagi menjadi: ukiran tembus, ukiran rendah,
            ukiran tinggi, dan ukiran utuh.
          </Text>
        </ScrollView>
      </Container>
    );
  }
}
