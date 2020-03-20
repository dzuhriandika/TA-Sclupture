/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {View, Text, TouchableOpacity, Modal, Alert} from 'react-native';
import CountDown from 'react-native-countdown-component';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
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
import {Card, Content} from 'native-base';

export default class Component extends React.Component {
  // swiper: Swiper;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      time: 1000,
      jawaban: [],
      jsonJawaban: [],
      modalVisible: false,
      index: '',
    };
    // this.swiper = new Swiper(props);
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    const {params} = this.props.navigation.state;
    const getindex = params ? params.index : 'umroh';
    const result = await ENDPOINT.testById(getindex);
    this.setState({
      index: getindex,
      data: result.data.question,
      time: result.data.time * 60,
    });
  };
  _onTimeout = () => {
    const result = this.state.jsonJawaban;
    const index = this.state.index;
    const soal = this.state.data.length;
    this.setState({modalVisible: !this.state.modalVisible});
    this.props.navigation.navigate('ScoreTest', {result, index, soal});
  };
  _setAnswer = (index, answer) => {
    if (this.state.jawaban.length === 0) {
      const json = JSON.parse(JSON.stringify({[index]: answer}));
      this.setState({jsonJawaban: [...this.state.jsonJawaban, json]}); // ITS WORK
      this.state.jawaban.push({[index]: answer});
      this.forceUpdate();
    } else {
      this.state.jawaban[index] = {[index]: answer};
      const json = JSON.parse(JSON.stringify({[index]: answer}));
      this.setState({jsonJawaban: [...this.state.jsonJawaban, json]});
      this.forceUpdate();
    }
  };

  _searchValue = (key, value) => {
    for (let i = 0; i < this.state.jawaban.length; i++) {
      if (this.state.jawaban[i][key] === value) {
        return true;
      }
    }
  };
  _onPress = () => {
    // alert('check')
    this.setState({modalVisible: !this.state.modalVisible});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          title="Seni Ukir"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Quiz')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <View style={{flexDirection: 'row'}}>
          <CountDown
            size={20}
            until={this.state.time}
            onFinish={() => this._onTimeout()}
            digitStyle={{borderColor: '#EF883D'}}
            digitTxtStyle={{
              color: '#fff',
              backgroundColor: '#EF883D',
              borderRadius: 5,
            }}
            timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            separatorStyle={{color: '#EF883D'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
          <View />
        </View>
        <Modal
          // style={{ justifyContent: 'center', alignItems: 'center'}}
          // animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: '#FFF'
            }}>
            <View
              style={{
                width: 306,
                height: 360,
                backgroundColor: '#FFF',
                paddingBottom: 32,
                paddingTop: 32,
                paddingLeft: 25,
                paddingRight: 25,
              }}>
              {/* <Text>Hello World!</Text> */}
              <View style={{alignItems: 'center'}}>
                <ModalSvg />
              </View>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 12, textAlign: 'center'}}>
                Apakah kamu sudah yakin dengan jawabanmu ? Jangan lupa periksa kembali sebelum mengumpulkan jawaban.
                </Text>
              </View>
              <View style={{flexDirection: 'row-reverse', justifyContent: 'center'}}>
              <Button
                customContainer={{
                  height: 40,
                  width: 80,
                  backgroundColor: '#EF883D',
                  borderWidth: 1,
                  borderColor: '#EF883D',
                }}
                title="Kumpulkan"
                customText={{color: '#FFF'}}
                onPress={this._onTimeout}
              />
              <Button
                  customContainer={{
                    // marginTop: 16,
                    height: 40,
                    width: 20,
                    backgroundColor: '#FFF',
                    borderWidth: 1,
                    borderColor: '#fff',
                  }} />
                <Button
                  customContainer={{
                    // marginTop: 16,
                    height: 40,
                    width: 80,
                    backgroundColor: '#FFF',
                    borderWidth: 1,
                    borderColor: '#EF883D',
                  }}
                  title="Kembali"
                  onPress={this._onPress}
                  customText={{color: '#EF883D'}}
                />
                </View>
            </View>
          </View>
        </Modal>
        <Swiper total={this.state.data.length} onPress={this._onPress}>
          {this.state.data.map((data, i) => (
            <View style={styles.slide} key={i}>
              <Card
                transparent
                style={{
                  marginLeft: 20,
                  marginTop: 20,
                  marginRight: 20,
                  borderRadius: 10,
                  backgroundColor: '#F9FAFB',
                }}>
                <View
                  style={{
                    margin: 15,
                    width: 330,
                    height: 80,
                    padding: 15,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#C4C4C4',
                      fontWeight: '600',
                    }}>{`Pertanyaan no ${i + 1}`}</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#29291E',
                    }}>
                    {data.title}
                  </Text>
                </View>
                {this.state.jawaban.length > 0 &&
                this._searchValue(i, data[0]) ? (
                  <TouchableOpacity onPress={() => this._setAnswer(i, data[0])}>
                    <View
                      style={{
                        margin: 15,
                        width: 330,
                        height: 50,
                        padding: 15,
                        flexDirection: 'row',
                      }}>
                      <ASelect />
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 14,
                          fontWeight: '600',
                          color: '#29291E',
                        }}>
                        {data[0]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      this._setAnswer(i.toString(), data[0].toString())
                    }>
                    <View
                      style={{
                        margin: 15,
                        width: 330,
                        padding: 15,
                        flexDirection: 'row',
                        // justifyContent: 'center'
                      }}>
                      <Aunselect />
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          fontWeight: '600',
                          color: '#29291E',
                        }}>
                        {data[0]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                {this.state.jawaban.length > 0 &&
                this._searchValue(i, data[1]) ? (
                  <TouchableOpacity onPress={() => this._setAnswer(i, data[1])}>
                    <View
                      style={{
                        margin: 15,
                        width: 330,
                        height: 50,
                        padding: 15,
                        flexDirection: 'row',
                        // justifyContent: 'center'
                      }}>
                      <BSelect />
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 14,
                          fontWeight: '600',
                          color: '#29291E',
                        }}>
                        {data[1]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => this._setAnswer(i, data[1])}>
                    <View
                      style={{
                        margin: 15,
                        width: 330,
                        padding: 15,
                        flexDirection: 'row',
                        // justifyContent: 'center'
                      }}>
                      <Bunselect />
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 14,
                          fontWeight: '600',
                          color: '#29291E',
                        }}>
                        {data[1]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                {this.state.jawaban.length > 0 &&
                this._searchValue(i, data[2]) ? (
                  <TouchableOpacity onPress={() => this._setAnswer(i, data[2])}>
                    <View
                      style={{
                        margin: 15,
                        width: 330,
                        height: 50,
                        padding: 15,
                        flexDirection: 'row',
                        // justifyContent: 'center'
                      }}>
                      <CSelect />
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          fontWeight: '600',
                          color: '#29291E',
                        }}>
                        {data[2]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => this._setAnswer(i, data[2])}>
                    <View
                      style={{
                        margin: 15,
                        width: 330,
                        padding: 15,
                        flexDirection: 'row',
                        // justifyContent: 'center'
                      }}>
                      <Cunselect />
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          fontWeight: '600',
                          color: '#29291E',
                        }}>
                        {data[2]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                {this.state.jawaban.length > 0 &&
                this._searchValue(i, data[3]) ? (
                  <TouchableOpacity onPress={() => this._setAnswer(i, data[3])}>
                    <View
                      style={{
                        margin: 15,
                        width: 330,
                        height: 50,
                        padding: 15,
                        flexDirection: 'row',
                        // justifyContent: 'center'
                      }}>
                      <DSelect />
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          fontWeight: '600',
                          color: '#29291E',
                        }}>
                        {data[3]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => this._setAnswer(i, data[3])}>
                    <View
                      style={{
                        margin: 15,
                        width: 330,
                        padding: 15,
                        flexDirection: 'row',
                        // justifyContent: 'center'
                      }}>
                      <Dunselect />
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          fontWeight: '600',
                          color: '#29291E',
                        }}>
                        {data[3]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              </Card>
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
