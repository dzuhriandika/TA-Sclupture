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
              <Card title="Teknik Memahat" icon2={<Arrow />} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=U_Qu6e-nYkY')
              }>
              <Card title="Teknik Mengkilapkan" icon2={<Arrow />} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
