import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Alert,
  Text
} from 'react-native'
import { 
  Container, 
  Content, 
  Form, 
  Item, 
  Input 
} from 'native-base';

import {RoundButton} from '../components/RoundButton'

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}

export default class About extends Component {
  FbLogin(){
    Alert.alert("Fblogin")  
  }

  GLogin(){
    Alert.alert("Google Login")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'red'}}>or continue with</Text>
        <ButtonsRow>
          <RoundButton
            title='F'
            color='#3B5998'
            background='#FFF'
            onPress={ this.FbLogin.bind(this) }
          />
          <RoundButton
            title='G'
            color='#3B5998'
            background='#FFF'
            onPress={ this.GLogin.bind(this) }
          />
        </ButtonsRow>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 400,
    paddingHorizontal: 20,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
    paddingLeft: 80,
    paddingRight: 80,
  },
})
