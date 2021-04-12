// import React, {Component} from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     StatusBar,
//     TouchableOpacity
// } from 'react-native';


// export default class Login extends Component() {
//     render() {
//         return(
//             <View style={styles.container}>
//                 <View style={styles.signupTextCont}>
//                     <Text style={styles.signupText}>Dont't have an account yet?</Text>
//                     <Text >Signup</Text>
//                 </View>
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 16,
},
  signupText: {
    color: 'white',
    fontSize: 16,
  },
});

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Form from './Form';

export default class Login extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.signupTextCont}>
              <Form />
              <Text style={styles.signupText}>Dont't have an account yet?</Text>
              <Text style={styles.signupText}>Signup</Text>
            </View>
          </View>
        );
    }
}
