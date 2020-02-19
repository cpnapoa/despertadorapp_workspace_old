/**
 * Componente de tela para dados de cliente
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Mensagem from './Mensagem';
import Util from './Util';
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

// import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { PushNotification } from 'react-native-push-notification';

// const icone = (<Icon name="rocket" size={30} color="#900" />);

//<Icon name='sc-telegram' type='evilicon' color='#517fa4' />;
export default class MensagemComponente extends Component {

    static navigationOptions = {
        title: 'Mensagens'
    }
    constructor(props) {
        super(props);
        
        this.state = {textoMensagem: ''};
        this.buscarMensagens = this.buscarMensagens.bind(this);
        this.tratarBuscarMensagens = this.tratarBuscarMensagens.bind(this);
        this.exibirProximaMensagem = this.exibirProximaMensagem.bind(this);
        objMensagem = new Mensagem();
        objUtil = new Util();
        // var PushNotification = require("react-native-push-notification");
        // PushNotification.localNotificationSchedule({
        //     //... You can use all the options from localNotifications
        //     message: "Notificado!!!", // (required)
        //     date: new Date(Date.now() + 5000) // in 5 secs
        //   });
    }

    render() {
        return (
            <View style={styles.areaTotal}>
                
                <View style={styles.areaMenu}>
                    <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between', margin: 10}}>
                        <Icon name="caret-left" size={30} color="#4F8EF7" />
                        <Icon name="bars" size={30} color="#4F8EF7" />
                    </View>
                </View>
                <View style={styles.areaMensagem}>
                    <Text>{this.state.textoMensagem}</Text>
                </View>                
                <View style={styles.areaBotao}>
                    <Button onPress={this.buscarMensagens} title="Buscar mensagens"></Button>
                </View>                
                <View style={styles.areaBotao}>
                    <Button onPress={this.exibirProximaMensagem} title=">>"></Button>
                </View>
            </View>
        );
    }
    // Busca na base de dados as mensagens cadastradas e salva no dispositivo.
    buscarMensagens() {
        
        objMensagem.listar(this.tratarBuscarMensagens);
    }

    tratarBuscarMensagens(oJsonMensagens) {
        if(oJsonMensagens && oJsonMensagens.length > 0) {
            Alert.alert(oJsonMensagens.length + ' mensagens salvas no dispositivo.');

            this.listaMensagens = oJsonMensagens;
            
        } else {
            Alert.alert('Cadastrado não localizado.');
        }
    }

    // Faz o sorteio da mensagem a partir da lista salva no dispositivo.
    exibirProximaMensagem() {
        
        let estado = this.state;
        let listaMensagens = this.listaMensagens;
        let listaMensagensExibidas = [];

        // Este if ainda nao esta pronto. Comecamos a mexer em 03/10.
        if (listaMensagens.length > 0){
            let indiceMensagem = 0;

            if(listaMensagens.length > 1) {
                indiceMensagem = objUtil.getRand(listaMensagens.length);
            }
            let oMensagem = listaMensagens[indiceMensagem];
            
            estado.textoMensagem = oMensagem.texto;
            this.setState(estado);
            oMensagem.indicadorExibida = true;
            listaMensagensExibidas.push(oMensagem);
            listaMensagens.splice(indiceMensagem, 1);
                
        } else {
            Alert.alert('Voce nao tem novas mensagens. :(');
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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#f5a5a5',
        width: '100%'
    },
    areaBotao: {
        flex: 1
    }
});