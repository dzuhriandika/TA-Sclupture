/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, View, Body} from 'native-base';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Style from './styles';
import ArrowLeft from '../../Svg/arrowLeft';
import Header from '../../components/Header';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Motif Batik Gentongan',
      from: 'Asal  : Madura',
      attribute:
        'Ciri-ciri	: Batik Gentongan ini diambil dari gentong atau gerabah yang dipakai sebagai wadah untuk mencelup kain batik pada cairan warna. Menggunakan motif abstrak sederhana, tanaman atau kombinasi keduanya. Biasanya menggunakan warna terang seperti merah, kuning, hijau atau ungu.',
      history:
        'Sejarah	: Batik Tulis Gentongan Kuno merupakan batik peninggalan dari nenek moyang terdahulu yang diturunkan ke beberapa generasinya hingga sekarang. Sumber dari cerita leluhur (Buyut) yang diceritakan oleh nenek kita bahwa batik ini adalah mahar pernikahan dari salah satu leluhur, budaya terdahulu di Desa Tlaga Biru, Kecamatan Tanjungbumi yang digunakan mahar untuk pernikahan berupa batik Tulis Gentongan yang dibuat sebaik mungkin untuk menghormati calon pasangan hidup. Menurut cerita leluhur batik ini sudah ada sejak zaman Kiai Syaikhona Kholil Bangkalan  sekitar tahun 1900 – 1920an. Hingga saat ini masih baik barangnya karena disimpan dengan baik. Dari segi motif pun bisa kelihatan sangat berbeda dengan motif batik gentongan yang berkembang akhir – akhir ini. Masih tersimpannya dengan baik Batik Gentongan Kuno yang notabene pemiliknya adalah para pengrajin karena turun temurun dari leluhurnya terdahulu. Hal ini membuat Batik Gentongan Kuno masih banyak ditemui di daerah tanjungbumi bangkalan madura. Secara sejarah nenek moyang para  pengrajin terdahulu membuat batik gentongan salah satunya digunakan untuk mahar pengantin. serta nenek moyang para pengrajin terdahulu menyimpan baik – baik Batik Gentongan Kuno yang dahulu adalah mahar untuk pernikahan mereka, dan menurunkan batik tersebut pada anak cucunya hingga sekarang.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Perbedaan Seni Ukir dan Seni Pahat"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View>
            <Text style={Style.body}>
              Seni ukir ini memang selalu dihubungkan dengan seni pahat, namun
              dua kegiatan ini sangat berbeda.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.body}>
              {'\n'}- Seni pahat lebih bertujuan untuk menghasilkan karya tiga
              dimensi, seperti patung.
            </Text>
            <Text style={Style.body}>
              - Sementara seni ukir, pada umumnya produknya lebih mengarah pada
              benda wujud dwimatra (dua dimensi).
            </Text>
            <Text style={Style.body}>
              - Seni pahat merupakan suatu kegiatan karya seni ukir yang dibuat
              dalam bentuk empat sampai lima dimensi.
            </Text>
            <Text style={Style.body}>
              - Sedangkan seni ukir hanya menggunakan bidang datar, yang
              kemudian dibentuk.
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
