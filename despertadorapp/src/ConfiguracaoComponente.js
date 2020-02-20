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
    Button,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ConfiguracaoComponente extends Component {

    static navigationOptions = {
        title: 'ConfiguracaoComponente'
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.voltar = this.voltar.bind(this);
        this.exibirEstatisticas = this.exibirEstatisticas.bind(this);

        objConfiguracao = new Configuracao();
        this.exibirEstatisticas();
    }

    voltar() {
        const { navigation } = this.props;

        navigation.navigate('MensagemComponente');
    }

    async exibirEstatisticas() {
        let estado = this.state;
        let mensagensExibir;
        let mensagensExibidas;

        let promiseItensExibir = await AsyncStorage.getItem('msgExibir');
            
        if(promiseItensExibir) {
            mensagensExibir = JSON.parse(promiseItensExibir);
        }

        let promiseItensExibidas = await AsyncStorage.getItem('msgExibidas');
            
        if(promiseItensExibidas) {
            mensagensExibidas = JSON.parse(promiseItensExibidas);
        }
        
        estado.qtdMensagensExibir = 0;
        estado.qtdMensagensExibidas = 0;

        if(mensagensExibir instanceof Array) {
            estado.qtdMensagensExibir = mensagensExibir.length;
        }
        if(mensagensExibidas instanceof Array) {
            estado.qtdMensagensExibidas = mensagensExibidas.length;
        }
        this.setState(estado);
    }

    render() {
        return (
            <View style={styles.areaTotal}>
                <View style={styles.areaMenu}>
                    <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between', margin: 10}}>
                        <Icon name="caret-left" size={30} color="#022C18" onPress={this.voltar} />
                    </View>
                </View>
                <View style={styles.areaConfiguracao}>
                    <Text>Campo config 1...</Text>
                    <Text>Campo config 2...</Text>
                    <Text>Mensagens a exibir: {this.state.qtdMensagensExibir}</Text>
                    <Text>Mensagens exibidas: {this.state.qtdMensagensExibidas}</Text>
                </View>
                <View style={styles.areaBotao}>
                    <Button title="OK"></Button>
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
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#5FC594',
        width: '100%'
    },
    areaBotao: {
        flex: 1
    }
});