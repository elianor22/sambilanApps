import React from 'react';
import {View, Text, Devider, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'


export default function ModalSetting({onPress}) {
  return (
    <View style={styles.container}>
      <View style={{padding: 5,marginVertical:10}}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <View style={styles.wrapperText}>
            <Text style={styles.subTitle}>Edit Profile</Text>
          </View>
          <View style={styles.wrapperText}>
            <Text style={styles.subTitle}>Log Out</Text>
          </View>

          <TouchableOpacity onPress={onPress} style={{marginVertical: 10}}>
            <Text style={{fontSize: 20, color: '#f56262', textAlign: 'center'}}>
              <Icon name="close-circle" size={50} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

