/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Animated,
  StatusBar,
} from 'react-native';

import Wifi from 'react-native-vector-icons/Feather'
import Portrait from 'react-native-vector-icons/AntDesign'
import Network from 'react-native-vector-icons/MaterialCommunityIcons'
import Bluetooth from 'react-native-vector-icons/Feather'
import Airplane from 'react-native-vector-icons/MaterialCommunityIcons'
import InvertColor from 'react-native-vector-icons/MaterialCommunityIcons'

const iconSize = 20
const iconColor = "white"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  showTextElement = (text,opacity) => {
    return(
      <Animated.View opacity ={opacity?opacity:1}>
        <Text  style={{ fontSize: 12, marginTop: 6,color:'white', fontFamily:'sans-serif',fontWeight:'500'}}>{text}</Text>
      </Animated.View>
      
    )
  }

  

  render() {

    const animatedViewHeight = this.state.scrollY.interpolate({
      inputRange: [0, 300 - 50],
      outputRange: [300, 50],
      extrapolate: 'clamp'
    })

    const childWidth = this.state.scrollY.interpolate({
      inputRange: [0, 300 - 150],
      outputRange: ['100%', '50%'],
      extrapolate: 'clamp'
    })

    const opacityVal = this.state.scrollY.interpolate({
      inputRange: [0, 300 - 170],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    return (
      <View style={{ flex: 1 }}>
        <Animated.View style={{ padding: 30, justifyContent: 'center', alignItems: 'center', flex: 3, height: animatedViewHeight, backgroundColor: '#686868', position: 'absolute', top: 0, right: 0, left: 0 }} >
          <View style={{ flex: 1,paddingVertical:5, width: "100%", backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>

            <Animated.View style={{ paddingHorizontal: 4, flex: 1, flexDirection: 'row', width: childWidth, alignItems: 'center', justifyContent: 'space-between', alignSelf: 'flex-start' }}>
              <View style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}>
                <Wifi name={"wifi-off"} size={iconSize} color={iconColor} />
                {this.showTextElement("Wifi",opacityVal)}
              </View>
              <View style={{ flex:1,alignItems: 'center', justifyContent: 'center' }}>
              <Network name={"network-strength-3"} size={iconSize} color={iconColor} />
                {this.showTextElement("Jio4G",opacityVal)}
              </View>
              <View style={{ flex:1,alignItems: 'center', justifyContent: 'center' }}>
              <Airplane name={"airplane-off"} size={iconSize} color={iconColor} />
                {this.showTextElement("Flight",opacityVal)}
              </View>
            </Animated.View>


            <Animated.View style={{ paddingHorizontal: 4, flex: 1, flexDirection: 'row', width: childWidth, alignItems: 'center', justifyContent: 'space-between', alignSelf: 'flex-end' }}>
              <View style={{ flex:1,alignItems: 'center', justifyContent: 'center' }}>
              <Bluetooth name={"bluetooth"} size={iconSize} color={iconColor} />
                {this.showTextElement("BLE",opacityVal)}
              </View>
              <View style={{ flex:1,alignItems: 'center', justifyContent: 'center' }}>
              <InvertColor name={"invert-colors"} size={iconSize} color={iconColor} />
                {this.showTextElement("Invert",opacityVal)}
              </View>
              <View style={{ flex:1,alignItems: 'center', justifyContent: 'center' }}>
              <Portrait name={"mobile1"} size={iconSize} color={iconColor} />
                {this.showTextElement("Mobile",opacityVal)}
              </View>
            </Animated.View>
          </View>
        </Animated.View>

        <ScrollView
          scrollEventThrottle={16}
          style={{ flex: 7 }}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: {
                y: this.state.scrollY
              }
            }
          }])}
        >
          <View style={{ height: 800 }}></View>
        </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  textStyle: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
})


export default App;
