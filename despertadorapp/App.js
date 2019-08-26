/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MensagemComponente from './src/MensagemComponente';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import Configuracao from './src/Configuracao';
import ConfiguracaoComponente from './src/ConfiguracaoComponente';

export default class App extends Component {
  
  render() {
    
    return (
      <MensagemComponente />
    );
  }
};