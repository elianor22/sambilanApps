import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import styles from './styles';

import {Devider, ModalSetting } from '../../partials'

const windowWidth = Dimensions.get('window').width;


export default function ProfileScreen({navigation, userData}) {

  const [isModalVisible, setModalVisible] = useState(false);
  const [user, setUser]= useState([])
  const [editable,setEditable] = useState(false)
  const data = [user]
  
  const {id,email} = user;

  console.log(isModalVisible);


  const [fullName,setFullName]=useState('')
  const [mobileNumber,setMobileNumber]=useState('')
  const [address,setAddress]=useState('')

  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1618678900888-da259539f5ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
  );


    useEffect(() => {
      const usersRef = firestore().collection('users');
       auth().onAuthStateChanged(user => {
         if(user){
           usersRef.doc(user.uid)
           .get()
           .then(data=>{
             const dataUser = data.data()
             setUser(dataUser);
           })
           .catch(err=>{
             console.log(err);
           })
         }
       });
      return () => {
      }
    }, [])

     const modal = () => isModalVisible(false);

const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      navigation.push('login');
      console.log(auth);
    });
};

  const onEditProfile = () =>{
    setEditable(true)
    setModalVisible(false)
  }

  const saveProfile = () =>{
    firestore()
      .collection('users')
      .doc(`${id}`)
      .update({
        fullName: fullName,
        mobileNumber:mobileNumber,
        address: address,
      })
      .then(() => {
        console.log('User updated!');
      })
      .catch(err => {
        console.log(err);
      });
  }

  const onShowButtonSave = () =>{
    if (editable == true) {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
          <TouchableOpacity  onPress={saveProfile}>
            <View style={styles.btnSave}>
              <Text style={styles.titleSave}>Save</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
           
            onPress={() => setEditable(false)}>
            <View style={styles.btnSave}>
              <Text style={styles.titleCancel}>cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{uri: image}} style={styles.imgProfile} />

        <TouchableOpacity
          onPress={() => setModalVisible(!isModalVisible)}
          style={{position: 'absolute', right: 6, top: 6, zIndex: 999}}>
          <Icon name="settings-outline" size={26} color="white" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Devider width={12} />

          <View></View>

          <View style={styles.profileContainer}>
            <Card style={styles.shadow}>
              {data.map((v, i) => {
                return (
                  <>
                    <View style={styles.profileWrapper} key={`${i}${fullName}`}>
                      <Text style={styles.title}>Name: </Text>
                      <TextInput
                        style={
                          editable ? styles.subTitleActive : styles.subTitle
                        }
                        editable={editable}
                        value={fullName}
                        placeholder={v.fullName}
                        placeholderTextColor="#a1a1a1"
                        onChangeText={text => setMobileNumber(text)}
                      />
                    </View>
                    <View style={styles.profileWrapper}>
                      <Text style={styles.title}>No HP: </Text>
                      <TextInput
                        value={mobileNumber}
                        style={
                          editable ? styles.subTitleActive : styles.subTitle
                        }
                        editable={editable}
                        placeholder={v.mobileNumber}
                        placeholderTextColor="#a1a1a1"
                        onChangeText={text => setMobileNumber(text)}
                      />
                    </View>

                    <View style={styles.profileWrapper}>
                      <Text style={styles.title}>Email: </Text>
                      <TextInput
                        value={v.email}
                        style={styles.subTitle}
                        editable={false}
                      />
                    </View>
                  </>
                );
              })}
            </Card>
            <Card style={styles.shadow}>
              <View style={styles.profileWrapperAddress}>
                <Text style={styles.title}>Alamat: </Text>
                <TextInput
                  placeholder="Jl. Tegal Parang Selatan V No.21 rt 04/07, RT.4/RW.4, Tegal Parang, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790"
                  editable={editable}
                  style={editable ? styles.subTitleActive : styles.subTitle}
                  multiline={true}
                  numberOfLines={5}
                  placeholderTextColor="#a1a1a1"
                  onChangeText={text => setAddress(text)}
                />
              </View>
            </Card>
          </View>
          {onShowButtonSave()}

          <View>
            <Modal
              isVisible={isModalVisible}
              transparent={true}
              style={{width: '100%', margin: 0}}>
              <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <ModalSetting
                  onPress={() => setModalVisible(!isModalVisible)}
                  onSignOut={signOut}
                  onEdit={onEditProfile}
                />
              </View>
            </Modal>
          </View>
          <View style={{marginBottom: 100}}></View>
        </View>
      </ScrollView>
    </View>
  );
}
{/* <Image source={{uri: image}}
  style={{width:windowWidth, height:100}}
/> */}
