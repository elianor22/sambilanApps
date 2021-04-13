import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Card, DataTable, Paragraph, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styels';
export default function DetailsCheckout({data}) {
  
  console.log(data);
  const item = data;


  const filteringHandler = () => {};

  return (
    <Card style={styles.paymentContent}>
      <Text
        style={{
          fontSize: 16,
          color: '#8E8E8E',
          textAlign: 'center',
          marginTop: 10,
        }}>
        Silahkan Melakukan Pembayaran ke No. Rekening dibawah ini :
      </Text>

      <Title style={{textAlign: 'center', fontSize: 22}}>12312313</Title>
      <Text style={{color: '#8E8E8E'}}> Rincian Booking:</Text>

      <View style={styles.detailConteiner}>
        <View style={styles.details}>
          <Text style={styles.itemDetails}>Name :</Text>
          <Text style={styles.itemDetails}>Selamet</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.itemDetails}>Jasa :</Text>
          <View style={styles.listDetails}>
            {item.map((data,i) => {
              if (data.checked == true) {
                return (
                  <View key={`${i}`+`${data.job}`}>
                  <Text style={styles.itemDetails} >{data.job}</Text>
                  </View>
                );
              }
            })}
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.itemDetails}>Harga:</Text>
          <View style={styles.listDetails}>
            <Text style={styles.itemDetails}>Rp 200.000</Text>
            <Text style={styles.itemDetails}>Rp 149.000</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Paragraph>Fee 16000</Paragraph>
          <Title>Total Bayar : Rp 365.000</Title>
        </View>
      </View>
    </Card>
  );
}
