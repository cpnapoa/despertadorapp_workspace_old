/**
 * Componente de tela para dados de cliente
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Configuracao from './Configuracao';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    Button
} from 'react-native';

export default class ConfiguracaoComponente extends Component {

    static navigationOptions = {
        title: 'Configurações'
    }

    constructor(props) {
        super(props);
        this.state = {};
        
        objConfiguracao = new Configuracao();
    }

    render() {
        return (
            <View style={styles.areaTotal}>
                <View style={styles.areaMenu}>
                    <Text>Frequencia</Text>
                    <Text>Outras configs...</Text>
                </View>
                <View style={styles.areaConfiguracao}>
                    <Text>Campo config 1...</Text>
                    <Text>Campo config 2...</Text>
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
    areaConfiguracao: {
        flex: 10,
        alignSelf: 'stretch'
    },
    areaMenu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    areaBotao: {
        flex: 1
    }
});