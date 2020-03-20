/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import {scale} from '../../utils/scaling';
import {blue, white, red, black, green} from '../../styles/colors';
import metrics from '../../constants/metrics';
import {ENDPOINT} from '../../configs';
import {Container, Card} from 'native-base';
import Header from '../../components/Header';
import ArrowLeft from '../../Svg/arrowLeft';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nilai: 0,
      falseAnswer: 0,
      trueAnswer: 0,
      soal: 10,
    };
  }
  componentDidMount() {
    this._getparams();
  }
  _getparams = async () => {
    const {params} = this.props.navigation.state;
    const getindex = params ? params.index : 'umroh';
    const answer = params ? params.result : 'bakaa';
    const soal = params ? params.soal : 'bakaa';
    // this is fucking log
    // console.log(getindex);
    // const jawaban = `{answer: ${this.state.jawaban}}`;
    // console.log(answer)
    // console.log(JSON.stringify(answer));
    // console.log(JSON.parse(answer));
    // const jsonanswer = await JSON.stringify(answer);
    // console.log(jsonanswer)
    // console.log(result);
    const result = await ENDPOINT.getNilai(getindex, answer);
    this.setState({
      soal,
      nilai: result.data.value,
      trueAnswer: result.data.trueAnswer,
      falseAnswer: result.data.falseAnswer,
    });
  };
  _onPress = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <Container>
        <Header
          title="Hasil"
          iconLeft={
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Quiz')}>
              <ArrowLeft />
            </TouchableOpacity>
          }
        />
        <View
          style={{
            flex: 1,
            padding: scale(20),
          }}>
          <Card
            style={{
              width: 100 + '%',
              height: scale(450),
              borderRadius: scale(10),
            }}>
            <View
              style={{
                paddingTop: scale(30),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Nilai</Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: scale(30),
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#26C723',
                    borderWidth: scale(10),
                    height: scale(175),
                    width: scale(175),
                    borderRadius: 5000,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 50,
                      color: black,
                      lineHeight: 191,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {this.state.nilai}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: scale(30)}}>
                  <View
                    style={{
                      width: scale(56),
                      height: scale(56),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          backgroundColor: '#26C723',
                          borderRadius: 5000,
                          width: scale(15),
                          height: scale(15),
                        }}
                      />
                      <Text style={{color: black, marginLeft: scale(5)}}>
                        Benar
                      </Text>
                    </View>
                    <Text style={{color: '#C4C4C4'}}>
                      {this.state.trueAnswer}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: scale(56),
                      height: scale(56),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: scale(24),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          backgroundColor: '#E74343',
                          borderRadius: 5000,
                          width: scale(15),
                          height: scale(15),
                        }}
                      />
                      <Text style={{color: black, marginLeft: scale(5)}}>
                        Salah
                      </Text>
                    </View>
                    <Text style={{color: '#C4C4C4'}}>
                      {this.state.falseAnswer}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: scale(56),
                      height: scale(56),
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: scale(24),
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          backgroundColor: '#CECECE',
                          borderRadius: 5000,
                          width: scale(15),
                          height: scale(15),
                        }}
                      />
                      <Text style={{color: black, marginLeft: scale(5)}}>
                        Soal
                      </Text>
                    </View>
                    <Text style={{color: '#C4C4C4'}}>{this.state.soal}</Text>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingTop: scale(25),
                }}>
                Dalam Waktu
              </Text>
              <Text style={{color: '#C4C4C4'}}>30 Menit</Text>
            </View>
          </Card>
          <View
            style={{
              width: metrics.screenWidth,
              marginTop: scale(24),
              height: scale(240),
            }}>
            <Button
              customContainer={{
                height: 50,
                backgroundColor: '#EF883D',
                borderRadius: 10,
                width: scale(310),
              }}
              title="Selesai"
              customText={{color: '#FFF'}}
              onPress={this._onPress}
            />
          </View>
        </View>
      </Container>
    );
  }
}
