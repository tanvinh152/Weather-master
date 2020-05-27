import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = text => {
        this.setState({
            text: text
        })
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;
        if(!text)
        {
            return
        }
        onSubmit(text);
        this.setState({
            text: ''
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    style={styles.textInput}
                    clearButtonMode="always"
                    underlineColorAndroid='transparent'
                    onChangeText={this.handleChangeText}
                    value={this.state.text}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        color: 'white',
        flex: 1,
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        height: 50,
        width: 300,
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#666',
        borderRadius: 5,
        justifyContent: 'center',
    }
})
