/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Text, Content, Icon} from 'native-base';
import Header from '../../components/Header';
import Card from '../../components/CardQuiz';
import Style from './styles';
import Arrow from '../../Svg/arrow';
import {TouchableOpacity, View, FlatList} from 'react-native';
import {ENDPOINT} from '../../configs';
import PropTypes from 'prop-types';
import ArrowLeft from '../../Svg/arrowLeft';

export default class Quiz extends Component {
  static navigationOptions = {tabbarVisible: true};
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      data: [],
    };
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    try {
      const result = await ENDPOINT.quizAll();
      console.log(result);
      const data = result.data[0];
      console.log(data);
      this.setState({data: data});
      console.log(this.state.data);
    } catch (e) {
      console.log(e);
    }
  };
  _onPress = () => {};
  _toDetail = index => {
    this.props.navigation.navigate('PlayTest', {
      index,
      type: this.state.type,
    });
  };
  render() {
    return (
      <Container>
        <Header
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
          title="Quiz"
        />
        <Content style={Style.container}>
          <View>
            <TouchableOpacity
              onPress={() => this._toDetail('5e7265b445593b24a82792c9')}>
              <Card
                title="Ujian Seni Ukir"
                divisi="15 Soal"
                icon2={<Arrow />}
              />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
