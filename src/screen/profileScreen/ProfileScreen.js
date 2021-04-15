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
import styles from './styles';
import Modal from 'react-native-modal';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



import {Devider, ModalSetting } from '../../partials'

const windowWidth = Dimensions.get('window').width;
export default function ProfileScreen({navigation, userData}) {

  const [isModalVisible, setModalVisible] = useState(false);
  const [user,setUser]= useState(null)
  console.log(user);


  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
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
        usersRef
      }
    }, [])

const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      navigation.navigate('login');
      console.log('User signed out!');
    });
};


  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.imgProfile} />

      <TouchableOpacity
        onPress={() => setModalVisible(!isModalVisible)}
        style={{position: 'absolute', right: 6, top: 6, zIndex: 999}}>
        <Icon name="settings-outline" size={26} color="white" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Devider width={12} />

        <View>
          <ScrollView horizontal>
            <View style={styles.orderHistoryContainer}>
              <TouchableOpacity>
                <Card style={styles.orderHistory}>
                  <Text style={styles.titleOrder}>Order Baru</Text>
                  <Text style={styles.subTitleOrder}>
                    Makin mempermudah hidupmu
                  </Text>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card style={styles.orderHistory}>
                  <Text style={styles.titleOrder}>Order History</Text>
                  <Text style={styles.subTitleOrder}>
                    Yuk lihat semua history pesanan kamu :
                  </Text>
                </Card>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.profileContainer}>
          <Card style={styles.shadow}>
            <View style={styles.profileWrapper}>
              <Text style={styles.title}>Name: </Text>
              <Text style={styles.subTitle}>Selamet</Text>
            </View>
            <View style={styles.profileWrapper}>
              <Text style={styles.title}>No HP: </Text>
              <Text style={styles.subTitle}>08413151</Text>
            </View>
            <View style={styles.profileWrapper}>
              <Text style={styles.title}>Email: </Text>
              <Text style={styles.subTitle}>selamet1@outlook.com</Text>
            </View>
          </Card>
          <Card style={styles.shadow}>
            <View style={styles.profileWrapperAddress}>
              <Text style={styles.title}>Alamat: </Text>
              <TextInput
                placeholder="Jl. Tegal Parang Selatan V No.21 rt 04/07, RT.4/RW.4, Tegal Parang, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790"
                editable={false}
                style={styles.address}
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="#000"
              />
            </View>
          </Card>
        </View>
        <View>
          <Modal
            isVisible={isModalVisible}
            transparent={true}
            style={{width: '100%', margin: 0}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <ModalSetting onPress={() => setModalVisible(!isModalVisible)} onSignOut={signOut}/>
            </View>
          </Modal>
        </View>
        <View style={{marginBottom: 50}}></View>
      </View>
    </View>
  );
}
{/* <Image source={{uri: image}}
  style={{width:windowWidth, height:100}}
/> */}
