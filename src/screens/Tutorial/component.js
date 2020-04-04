/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Header from '../../components/Header';
import {
  Container,
  Text,
  View,
  Content,
  Image,
  Right,
  Thumbnail,
} from 'native-base';
import Style from './styles';
import IMAGES from '../../config/image';
import {ScrollView, TouchableOpacity, Linking} from 'react-native';
import ArrowLeft from '../../Svg/arrowLeft';
import Arrow from '../../Svg/arrow';
import Card from '../../components/CardMateri';

export default class Materi extends Component {
  render() {
    return (
      <View style={Style.containerView}>
        <Header
          title="Tutorial"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          <View style={Style.container}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=J8TtHfOgZnU')
              }>
              <Card title="Cara mudah belajar mengukir" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=T7cVTb6BBWI')
              }>
              <Card title="Desain ukiran kayu untuk pemula" icon2={<Arrow />} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=re3POcproPs')
              }>
              <Card title="Belajar mengukir styrofoam" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=jpROSlYkJgo')
              }>
              <Card title="Soap Carving" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=3e3-k8_90Xk')
              }>
              <Card title="Rock Carving" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=62VKQ3fUHrE')
              }>
              <Card title="Bone Carving" icon2={<Arrow />} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
