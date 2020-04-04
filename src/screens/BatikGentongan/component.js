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
          title="langkah Pembuatan"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View>
            <Text style={Style.title}>{'\n'}1. Menyiapkan Bahan</Text>
            <Text style={Style.body}>
              Jika kita mengukir kayu maka yang akan kita siapkan adalah
              kayunya. Jika yang kita ukir adalah batu maka kita harus
              menyiapkan batunya. Dan tentunya kayu atau batu yang akan kita
              ukir harus dipilih yang cocok, berkualitas atau mempunyai mutu
              yang tinggi jika ukiran sudah jadi..
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              2. Siapkan Peralatan yang Dibutuhkan
            </Text>
            <Text style={Style.body}>
              Peralatan yang digunakan untuk membuat ukiran kayu : Gergaji,
              Palu, Satu set pahat ukir yang terdiri dari: 20 buah pahat penuku
              + 10 buah pahat datar. Tambahannya : 5 buah pahat kol + 3 buah
              pahat coret (kecil,sedang,besar), coping saw, scrol saw, Jing saw,
              batu asah, gerinda batu asah.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              3. Teknik dan Langkah-Langkah Mengukir
            </Text>
            <Text style={Style.body}>
              - Membuat pola atau gambar pada kayu yang akan diukir
            </Text>
            <Text style={Style.body}>
              - NGGETA’KI : Proses memindai garis-garis pada lukisan atau pola
              pada kayu.
            </Text>
            <Text style={Style.body}>
              - NDASARI : proses mencongkel bagian dasar di luar motif agar
              lebih dalam.
            </Text>
            <Text style={Style.body}>
              - MBUKAKI : proses membentuk pahatan pada motif batang,daun,dan
              bunganya.
            </Text>
            <Text style={Style.body}>
              - MBENANGI ; proses membentuk benangan/garis pada motif
              batang,daun,dan bunga, membentuk garis pada lekukan daun dan
              bunga.
            </Text>
            <Text style={Style.body}>
              - CAWEN : bentuk garis pada lekukan daun dan bunga.
            </Text>
            <Text style={Style.body}>
              - MBABARI : proses terakhir, merapikan/membersihkan bagian ukiran
              yang belum sempurna.
            </Text>
            <Text style={Style.body}>
              - FINISHING. Adalah proses pekerjaan tahap akhir dari suatu proses
              pembuatan produk ukiran. Finishing merupakan proses yang akan
              membentuk penampilan dari suatu produk ukiran. Finishing dapat
              membuat suatu ukiran menjadi kelihatan bersih, halus, rata seperti
              barang yang baru, finishing dapat juga membuat suatu ukiran
              kelihatan kotor, antik, kuno seperti barang yang sudah berusia
              ratusan tahun, finishing dapat membuat permukaan ukiran menjadi
              rata atau permukaan ukiran menjadi tidak rata , bertekstur, dan
              retak-retak, finishing dapat dibuat dengan lapisan film yang tipis
              sekali atau lapisan film yang tebal sekali. Jadi finishing
              mempunyai variasi yang sangat banyak, dari yang paling sederhana
              dengan alat-alat dan bahan-bahan yang sederhana sampai dengan yang
              paling kompleks yang membutuhkan alat-alat dan bahan-bahan
              finishing yang khusus. Demikian juga dengan bahan-bahan finishing
              terdiri dari banyak jenis dan macamnya mulai dari yang bahan-bahan
              yang murah sampai bahan-bahan yang mahal.
            </Text>
            <Text />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
