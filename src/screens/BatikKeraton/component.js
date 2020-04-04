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
          title="Jenis-Jenis Pahat Ukir"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <View>
            <Text style={Style.title}>{'\n'}1. Pahat Penguku</Text>
            <Text style={Style.body}>
              yaitu pahat yang bagian ujung pahatnya melengkung sesuai dengan
              fungsinya untuk memahat bagian-bagian yang melengkung. Membuat
              ragam lingkaran, bulatan daun, bulatan bunga, sisi wajah manusia,
              menggunakan pahat penguku ini.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              2. Pahat Penyilat
            </Text>
            <Text style={Style.body}>
              yaitu pahat yang bentuknya lurus sesuai dengan fungsinya untuk
              mengukir bagian-bagian yang lurus. Pada seni ukir yang berasal
              dari suku Asmat kebanyakan menggunakan pahat penyilat, sehingga
              ragam pahatannya lurus dan tegak.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              3. Pahat Kol
            </Text>
            <Text style={Style.body}>
              yaitu jenis pahat lengkung yang bagian ujungnya untuk membuat
              bentuk cekungan. Membuat cekungan harus menggunakan pahatan ini,
              tidak bisa dengan pahatan lain. Menimbulkan efek dua dimensi
              adalah dengan menggunakan pahat kol ini. Dengan demikian pada
              permukaan datar akan didapat kedalaman-kedalaman tertentu sesuai
              dengan benda atau barang yang menjadi sumber inspirasi pahatan
              yang terdapat di alam yang bentuknya tiga dimensi.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              4. Pahat Pengot
            </Text>
            <Text style={Style.body}>
              Pahat yang bentuknya menyudut ke arah kiri atau kanan, berfungsi
              untuk membersihkan sudut-sudut pada ukiran. Kehalusan hasil akhir
              ukiran sangat tergantung pada keterampilan pengukir atau pemahat
              menggunakan pahat pengot ini.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.body}>
              Bangsa Indonesia mulai mengenal ukir sejak zaman batu muda
              (neolitikum), yakni sekitar tahun 1500 SM. Pada zaman itu nenek
              moyang bangsa Indonesia telah membuat ukiran pada kapak batu,
              tempaan tanah liat atau bahan lain yang ditemuinya. Motif dan
              pengerjaan ukiran pada zaman itu masih sangat sederhana. Umumnya
              bermotif geometris yang berupa garis, titik, dan lengkungan,
              dengan bahan tanah liat, batu, kayu, bambu, kulit, dan tanduk
              hewan Pada zaman yang lebih dikenal sebagai zaman perunggu, yaitu
              berkisar tahun 500 hingga 300 SM. Bahan untuk membuat ukiran telah
              mengalami perkembangan yaitu menggunakan bahan perunggu, emas,
              perak dan lain sebagainya. Dalam pembuatan ukirannya adalah
              menggunakan teknologi cor. Motif-motif yang digunakan pada masa
              zaman perunggu adalah motif meander, tumpal, pilin berganda,
              topeng, serta binatang maupun manusia. Motif meander ditemukan
              pada nekara perunggu dari Gunung merapi dekat Bima. Motif tumpal
              ditemukan pada sebuah buyung perunggu dari kerinci Sumatera Barat,
              dan pada pinggiran sebuah nekara (moko dari Alor, NTT). Motif
              pilin berganda ditemukan pada nekara perunggu dari Jawa Barat dan
              pada bejana perunggu dari Kerinci, Sumatera. Motif topeng
              ditemukan pada leher kendi dari Sumba. Nusa Tenggara, dan pada
              kapak perunggu dari danau Sentani, Irian Jaya. Motif ini
              menggambarkan muka dan mata orang yang memberi kekuatan magis yang
              dapat menangkis kejahatan. Motif binatang dan manusia ditemukan
              pada nekara dari Sangean.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.body}>
              Setelah agama Hindu, Budha, Islam masuk ke Indonesia, seni ukir
              mengalami perkembangan yang sangat pesat, dalam bentuk desain
              produksi, dan motif. Ukiran banyak ditemukan pada badan-badan
              candi dan prasasti-prasasti yang dibuat orang pada masa itu untuk
              memperingati para raja-raja. Bentuk ukiran juga ditemukan pada
              senjata-senjata, seperti keris dan tombak, batu nisan, masjid,
              keraton, alat-alat musik, termasuk gamelan dan wayang. Motif
              ukiran, selain menggambarkan bentuk, kadang-kadang berisi tentang
              kisah para dewa, mitos kepahlawanan, dll. Bukti-bukti sejarah
              peninggalan ukiran pada periode tersebut dapat dilihat pada relief
              candi Penataran di Blitar, candi Prambanan dan Mendut di Jawa
              Tengah.Saat sekarang ukir kayu dan logam mengalami perkembangan
              pesat. Dan fungsinya pun sudah bergeser dari hal-hal yang berbau
              magis berubah menjadi hanya sebagai alat penghias saja.pada ukiran
              kayu meliputi motif Pejajaran, Majapahit, Mataram, Pekalongan,
              Bali, Jepara, Madura, Cirebon, Surakarta, Yogyakarta, dan berbagai
              macam motif yang berasal dari Luar Jawa.
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
