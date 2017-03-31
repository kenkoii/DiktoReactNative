import React, { Component } from 'react';
import { styles } from './styles';
import api from '../../utils/api'
import Detail from '../Detail/';
import Row from '../Row/Row';
import {
  AppRegistry,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
  ListView
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super();
        this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            word: '',
            isLoading: false,
            error: false,
            errorMessage: '',
            dataSource: this.ds.cloneWithRows([])
        }
    }

    handleChange(event) {
        this.setState({
            word: event.nativeEvent.text
        })
    }

    handleSubmit() {
        this.setState({
            isLoading: true
        });
        api.getWord(this.state.word)
            .then((res) => {
                console.log(res.definition);
                this.setState({
                    isLoading: false,
                    dataSource: this.ds.cloneWithRows(res.definition)
                });
            });
    }

    render() {
        let showErr = (
            this.state.error ? <Text> {this.state.error} </Text> : <View></View>
        );
        let button = (
            this.state.isLoading ? <ActivityIndicator animating={this.state.isLoading} color="#111" size="small"></ActivityIndicator> : 
            <TouchableOpacity
                style={styles.button2}
                onPress={this.handleSubmit.bind(this)}>
                <Text style={styles.buttonText}>🔍</Text>
            </TouchableOpacity>
        )
        return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../images/polyglot.png')} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
                <TextInput 
                style={styles.formInput}
                autoCapitalize={'none'}
                placeholder={'Search for a Word'}
                placeholderTextColor="rgba(0,0,0,0.3)"
                enablesReturnKeyAutomatically={false}
                returnKeyType="go"
                onChange={this.handleChange.bind(this)}
                />
                {button}
            </View>
            
            <ListView
                style={styles.listViewContainer}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => (<Row {...rowData} />)}
            />
        </View>
        );
    }
}


AppRegistry.registerComponent('Home', () => Home);