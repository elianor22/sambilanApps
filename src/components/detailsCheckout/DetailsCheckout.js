import React from 'react';
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
export default function DetailsCheckout() {
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
            <Text style={styles.itemDetails}>Membersihkan Halaman</Text>
            <Text style={styles.itemDetails}>Membersihkan Kamar Mandi</Text>
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
