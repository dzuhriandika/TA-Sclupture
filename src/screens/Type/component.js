/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Container} from 'native-base';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Style from './styles';
import Header from '../../components/Header';
import ArrowLeft from '../../Svg/arrowLeft';
import IMAGES from '../../config/image';

export default class Definition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jenis - Jenis Batik ',
      title2: 'Batik Tulis',
      title3: 'Batik Cap',
      title4: 'Batik Printing',
      body:
        '       Batik tulis adalah batik yang dibuat secara manual menggunakan tangan dengan alat bantu canting untuk menerakan malam pada corak batik. Cara pembuatan batik dengan melukiskan sebuah pola pada kain dengan menggunakan tangan, alat-alat yang diperlukan antara lain: Canting, Gawangan, Wajan, kauli, Anglo, Tipas/ Tepas. Pembuatan batik tulis membutuhkan kesabaran dan ketelatenan yang tinggi karena setiap titik dalam motif berpengaruh pada hasil akhirnya. Motif yang dihasilkan dengan cara ini tidak akan sama persis. Kerumitan ini yang menyebabkan harga batik tulis sangat mahal. Jenis batik ini dipakai raja, pembesar keraton, dan bangsawan sebagai simbol kemewahan.',
      body2:
        '       Batik cap adalah batik yang dibuat dengan menggunakan cap atau semacam stempel motif batik yang terbuat dari tembaga. Cap digunakan untuk menggantikan fungsi canting sehingga dapat mempersingkat waktu pembuatan. Batik cap dihasilkan dari proses pencelupan semacam alat yang dibuat dari tembaga yang sudah dibentuk sedemikian rupa pada kain. Motif batik cap dianggap kurang memiliki nilai seni karena semua motifnya sama persis. Harga batik cap cukup murah karena dapat dibuat secara masal.',
      body3:
        '       Batik printing disebut juga dengan batik sablon, karena proses pembatikan jenis batik ini sangat mirip dengan proses penyablonan. Motif batik telah di buat dan desain di print di atas alat offset/sablon, sehingga dapat sangat memudahkan pengerjaan batik khususnya pewarnaan dapat langsung dilakukan dengan alat ini.',
    };
  }

  render() {
    return (
      <Container>
        <Header
          title="Fungsi Seni Ukir"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Materi')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView style={Style.container}>
          <Text style={Style.body}>
            Fungsi seni ukir termasuk di dalam seni ukir nusantara, di antaranya
            sebagai berikut :
          </Text>
          <View>
            <Text style={Style.title}>{'\n'}1. Fungsi Hias</Text>
            <Text style={Style.body}>
              yaitu ukiran yang dipakai semata-mata sebagai hiasan dan tidak
              mengandung makna sama sekali. Di dalam berbagai perabot, alat
              perang, alat atau perkakas bertani dan sebagainya, banyak yang
              menggunakan seni ukir yang berfungsi hiasan. Dengan demikian ragam
              ukirannya pun tidak memiliki pola baku, bisa terinspirasi oleh
              alam, awan, aliran sungai dan sebagainya. Namun sebagai karya seni
              tentu saja menunjukkan keindahan tersendiri sekalipun fungsinya
              hanya benar-benar sebagai hiasan semata.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              2. Fungsi Magis
            </Text>
            <Text style={Style.body}>
              adalah ukiran yang mengandung simbol-simbol tertentu dan diyakini
              sebagai sesuatu yang magis atau memiliki kekuatan, dikaitkan
              dengan kepercayaan dan kepentingan spiritual. Pada seni ukir
              tradisional banyak sekali seni ukir yang berfungsi magis ini. Di
              Jawa Barat misalnya dikenal seni ukir pada warangka keris, tombak,
              yang dinilai memiliki kekuatan gaib dan kerap menjadi semacam
              tameng dari serangan makhluk jahat. Demikian pula di dalam
              masyarakat suku Batak, dengan mudah ditemukan ukiran yang
              berfungsi magis ini, misalnya di dalam rumah adat atau tombak,
              terdapat simbol-simbol tertentu dengan warna putih dan hitam yang
              dominan, yang dianggap memiliki kekuatan gaib tersendiri.
            </Text>
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              3. Fungsi Simbolik
            </Text>
            <Text style={Style.body}>
              Selain sebagai hiasan, ukiran mengandung suatu simbol yang
              berhubungan dengan spiritual. Oleh karena memiliki nilai dan makna
              tertentu, maka penempatan dan pemasangan karya ukir tidak bisa di
              sembarang tempat. Ukiran fungsi simbolik ini hampir mirip dengan
              ukiran fungsi magis, yakni terkait dengan satu kepercayaan yang
              tumbuh dan berkembang di dalam masyarakat. Setiap suku di
              Indonesia hampir dipastikan memiliki seni ukir simbolik ini, hal
              ini terkait dengan perjalanan peradaban suku-suku di Indonesia
              yang dimulai dengan kepercayaan animisme, dinamisme, kemudian
              datang pengaruh Hindu/Budha, sebelum akhirnya masuk agama Islam.
              {'\n'}
            </Text>
            <Text />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              4. Fungsi Konstruksi
            </Text>
            <Text style={Style.body}>
              adalah ukiran yang selain dipakai sebagai hiasan, juga digunakan
              sebagai pendukung sebuah bangunan. Misalnya tiang pada rumah.
              {'\n'}
            </Text>
            <Text />
          </View>
          <View style={Style.mb20}>
            <Text style={Style.title}>
              {'\n'}
              5. Fungsi Ekonomis
            </Text>
            <Text style={Style.body}>
              yaitu menambah nilai jual. Misalnya ukiran pada kaki kursi, meja,
              lemari, tutup lampu, dan lain sebagainya. Dalam prakteknya untuk
              fungsi ekonomis ini bisa saja menjadikan fungsi ukir lainnya
              sebagai salah satu bahan ukiran namun diterapkan dalam perkakas
              yang memiliki nilai jual. Sebuah ukiran yang pada awalnya
              berfungsi sebagai ukiran magis misalnya, pada masyarakat modern
              sekarang bisa saja diterapkan pada wadah tissue misalnya, yang
              tentunya ragam hias pada ukiran tempat tisu tersebut sudah tidak
              memiliki fungsi simbolis atau fungsi magis lagi.
              {'\n'}
            </Text>
            <Text />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
