import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// You can import from local files

import styles from './styles';
const primary = '#FF6F00';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Icon
        name="checkmark-circle"
        size={150}
        style={{marginBottom: '15%', color: primary}}
      />
      <Text style={styles.title}>Yey!!!</Text>
      <Text style={styles.title}>Transaksimu Telah Berhasil</Text>
      <Text style={styles.subTitle}>
        Jasa yang kamu booking akan tiba ditempatmu secepatnya!!!
      </Text>

      <TouchableOpacity style={{width: '80%'}} onPress={() => navigation.navigate('Home')}>
        <View style={styles.btnHome}>
          <Text style={styles.btnTitle}>Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
