import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Form from './Form';

export default class Signup extends Component() {
    render() {
        return(
            <view style={styles.container}>
                <Form type="Signup"/>
                <View style={styles.signupTextCont}>
                    <text style={styles.signupText}>Already have an account?</text>
                    <Text >Sign in</Text>
                </View>
            </view>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItem : 'center',
        justifyContent : 'center'

    },
    signupTextCont : {
        flexGrow : 1,
        alignItems : 'center',
        justifyContent : 'flex-end',
        marginVertical : 16,
        flextDirection : 'row'
    },
    signupText: {
        color : 'white',
        fontSize : 16

    } 

    

});