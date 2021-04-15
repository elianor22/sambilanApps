import React, {useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function RegistrationScreen({navigation}) {
  const [fullName, setFullName] = useState('');
  const [moblieNumber, setMoblieNumber] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const onFooterLinkPress = () => {
    navigation.navigate('login');
  };

  const onRegisterPress = () => {
    if (!fullName.trim()) {
      alert('Mohon Lengkapi Data Terlebih Dahulu');
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          moblieNumber,
          email,
          fullName,
        };
        const usersRef = firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            // navigation.navigate('Home', {user: data})
            setModalVisible(!isModalVisible)
          })
          .catch(error => {
            alert(error);
          });
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/mobile.png')}
      />
      <KeyboardAwareScrollView
        style={{width: '100%', position: 'absolute', bottom: 0}}
        keyboardShouldPersistTaps="always">
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Nomor Hp"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setMoblieNumber(text)}
            value={moblieNumber}
            required
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={text => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            required
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            required
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            required
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => onRegisterPress()}>
            <Text style={styles.buttonTitle}>Create account</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Already got an account?{' '}
              <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Modal
        isVisible={isModalVisible}
        transparent={true}
        style={{width: '100%', margin: 0}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
              width:'80%'
            }}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../../assets/images/astronot.png')}
            />
            <Text style={{fontSize: 30}}>Register Berhasil</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              style={{
                marginVertical: 20,
                backgroundColor: '#FF6F00',
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 16, color: 'white', margin: 10}}>
                Sign In Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
