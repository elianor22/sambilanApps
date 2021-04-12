import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Button } from 'react-native'
import { Card, DataTable, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

import { DetailsCheckout } from '../../components';

import styles from './styles'

export default function CheckOut() {

  const [image,setImage] = useState(null)
  const [images,setImages] = useState(null)

  console.log(image)


  const pickSingleWithCamera =(cropping, mediaType = 'photo') => {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log('received image', image);
        setImage( {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          });
        setImages({
          images: null,
        });
      })
      .catch((e) => alert(e));
  }

   const renderImage=(image)=> {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={image}
      />
    );
  }

  const renderAsset=(image)=> {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return renderVideo(image);
    }

    return renderImage(image);
  }

  return (
    <View style={styles.container}>
      <View style={styles.btnBackWrapper}>
        <TouchableOpacity>
          <Icon name="arrow-back" style={styles.btnBack} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <Card style={styles.txtWrapper}>
            <TextInput
              multiline={true}
              style={styles.textInput}
              placeholder="Masukan Alamat Anda"
              placeholderTextColor="grey"
            />
          </Card>
          <View style={styles.paymentWrapper}>
            <Title style={{color: '#6d6d6d', marginVertical: 10}}>
              Metode Pembayaran
            </Title>
            <View style={styles.imageWrapper}>
              <ScrollView horizontal>
                <TouchableOpacity style={styles.imgContainerActive}>
                  <Image
                    style={styles.imageBank}
                    source={require('../../assets/images/icons/icn_bca.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgContainer}>
                  <Image
                    style={styles.imageBank}
                    source={require('../../assets/images/icons/icn_bni.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgContainer}>
                  <Image
                    style={styles.imageBank}
                    source={require('../../assets/images/icons/icn_bri.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgContainer}>
                  <Image
                    style={styles.imageBank}
                    source={require('../../assets/images/icons/icn_mandiri.png')}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <DetailsCheckout />
          </View>
          {/* <View style={{alignItems: 'center',justifyContent:'center',marginVertical:10}}>
            <Text>asdasd</Text>
            <Image style={{height:300, width:260,resizeMode:"contain"}}
              source={{
                uri:
                  'https://staim-bandung.ac.id/wp-content/uploads/2019/01/bukti-pembayaran-STAIM0002.jpg',
              }}
            />
          </View> */}

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView>{image ? renderAsset(image) : null}</ScrollView>

            <TouchableOpacity
              onPress={() => pickSingleWithCamera(false)}
              style={styles.btnCamera}>
              <Icon name="camera" size={30} style={{color:'white'}}/>
              <Text style={styles.txtBtnCamera}>Upload Bukti Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginBottom: '20%'}}></View>
      </ScrollView>
      <TouchableOpacity style={styles.btnWrapper}>
        <View style={styles.btnOrder}>
          <Text style={styles.titleBtnOrder}>Order</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
