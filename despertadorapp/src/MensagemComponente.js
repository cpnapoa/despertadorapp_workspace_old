/**
 * Componente de tela para dados de cliente
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Mensagem from './Mensagem';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Alert,
    View,
    Image,
    Text,
    Console,
    StatusBar,
    TextInput,
    Button
} from 'react-native';

export default class MensagemComponente extends Component {

    constructor(props) {
        super(props);
        this.state = {textoMensagem: ''};
        this.exibirMensagem = this.exibirMensagem.bind(this);
        this.tratarExibirMensagem = this.tratarExibirMensagem.bind(this);
        objMensagem = new Mensagem();
    }

    render() {
        return (
            <View style={styles.areaTotal}>
                <View style={styles.areaMenu}>
                    <Text>MENU</Text>
                </View>
                <View style={styles.areaMensagem}>
                    <Text>{this.state.textoMensagem}</Text>
                </View>
                <View style={styles.areaBotao}>
                    <Button onPress={this.exibirMensagem} title="OK"></Button>
                </View>
            </View>
        );
    }
    exibirMensagem() {
        objMensagem.sortearMensagem(this.tratarExibirMensagem);
    }
    
    tratarExibirMensagem(oJsonMensagem) {
        if(oJsonMensagem && oJsonMensagem.length > 0) {
        
        let estado = this.state;

        estado.textoMensagem = oJsonMensagem[0].texto;
        this.setState(estado);
        } else {
            Alert.alert('Cadastrado não localizado.');
        }
    }
}

const styles = StyleSheet.create({
    areaTotal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    areaMensagem: {
        flex: 10,
        alignSelf: 'stretch'
    },
    areaMenu: {
        flex: 1
    },
    areaBotao: {
        flex: 1
    }
});