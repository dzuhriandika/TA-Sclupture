/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  FlatList,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Swiper from '../../components/Swipper';
import styles from './styles';
import {ENDPOINT} from '../../configs';
import ModalSvg from '../../Svg/ModalSVG';
import ASelect from '../../Svg/ASelect';
import BSelect from '../../Svg/BSelect';
import CSelect from '../../Svg/CSelect';
import DSelect from '../../Svg/DSelect';
import Aunselect from '../../Svg/AUnselect';
import Bunselect from '../../Svg/BUnselect';
import Cunselect from '../../Svg/CUnselect';
import Dunselect from '../../Svg/DUnselect';
import ArrowLeft from '../../Svg/arrowLeft';
import scale from '../../utils/scaling';
import {Card, Content, Button} from 'native-base';
import METRICS from '../../constants/metrics';
import {ScrollView} from 'react-native-gesture-handler';

export default class Component extends React.Component {
  // swiper: Swiper;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: '',
    };
    // this.swiper = new Swiper(props);
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    const result = await ENDPOINT.cekById();
    console.log(result);
    this.setState({
      data: result.data.question,
    });
    console.log(this.state.data);
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          title="Seni Ukir"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 30,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CountDown
            size={18}
            digitStyle={{borderColor: '#EF883D'}}
            digitTxtStyle={{
              color: '#fff',
              backgroundColor: '#EF883D',
              borderRadius: 5,
              padding: 5,
            }}
            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            separatorStyle={{color: '#EF883D'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
          <Button
            bordered
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              borderColor: '#C4C4C4',
              borderRadius: 10,
              width: 77,
              height: 30,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#C4C4C4'}}>selesai</Text>
          </Button>
        </View>
        <ScrollView>
          <Swiper total={this.state.data.length} onPress={this._onPress}>
            {this.state.data.map(data => (
              <View>
                <Card
                  transparent
                  style={{
                    marginLeft: 20,
                    padding: 20,
                    marginRight: 20,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#C4C4C4',
                      fontWeight: '600',
                      fontFamily: 'Nunito-Regular',
                    }}>
                    soal no {data.questionId}
                  </Text>
                  <Text style={{fontFamily: 'Nunito-Regular'}}>
                    {data.title}
                  </Text>
                  <View style={{flexDirection: 'row', padding: 15}}>
                    <Aunselect />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#29291E',
                        fontFamily: 'Nunito-Regular',
                      }}>
                      {data[0]}
                    </Text>
                  </View>

                  <View style={{padding: 15, flexDirection: 'row'}}>
                    <Aunselect />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#29291E',
                        fontFamily: 'Nunito-Regular',
                      }}>
                      {data[1]}
                    </Text>
                  </View>

                  <View style={{padding: 15, flexDirection: 'row'}}>
                    <Aunselect />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#29291E',
                        fontFamily: 'Nunito-Regular',
                      }}>
                      {data[2]}
                    </Text>
                  </View>

                  <View style={{padding: 15, flexDirection: 'row'}}>
                    <Aunselect />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#29291E',
                        fontFamily: 'Nunito-Regular',
                      }}>
                      {data[3]}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#C4C4C4',
                      fontWeight: '600',
                      fontFamily: 'Nunito-Regular',
                    }}>
                    jawaban benar
                  </Text>
                  <View style={{padding: 15, flexDirection: 'row'}}>
                    <ASelect />
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#29291E',
                        fontFamily: 'Nunito-Regular',
                      }}>
                      {data.answer}
                    </Text>
                  </View>
                </Card>
                <Card
                  transparent
                  style={{
                    padding: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    backgroundColor: '#F5F5F5',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#EF883D',
                      fontFamily: 'Nunito-Regular',
                      fontWeight: 'bold',
                    }}>
                    Pembahasan
                  </Text>
                  <Text style={{fontFamily: 'Nunito-Regular'}}>
                    {data.pembahasan}
                  </Text>
                </Card>
              </View>
            ))}
          </Swiper>
        </ScrollView>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
