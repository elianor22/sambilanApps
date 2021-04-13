import React, { useEffect, useState, } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Modal, Alert} from 'react-native';
import {Card, Title, RadioButton, } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import NumberFormat from 'react-number-format';

import detailDummy from '../../json/detailDummy.json'

import styles from './styles';
import { runOnJS } from 'react-native-reanimated';

export default function CategoryScreen({route,navigation}) {


  const [dataJobs, setDataJobs] = useState([]);


  // const [checked, setChecked] = useState('first');
   const [price, setPrice] = useState('')

   console.log(price);

  useEffect(() => {
    getData()
    
    return () => {
      
    }
  }, [])

  const getData = dataJobs => {
    setDataJobs(detailDummy);
  };
  

  const pricing = () =>{
    data.dataJobs.map((item)=>{
      if(item.checked == true){
       
      }
    })
  }

 const onChangeValue = (itemSelected,index)=>{
    const newData = dataJobs.map(item =>{
      if(item.id == itemSelected.id){
        return{
          ...item,
          checked:!item.checked
          
        }
        
      }
      return{
        ...item,
        checked: item.checked
      }
    })
    setDataJobs(newData)
  }

  const onShowItemSelected = () =>{
    const listSelected = dataJobs.filter( item =>
      item.checked == true
    )
    let contentAlert = '';
    listSelected.map(item =>{
      contentAlert = contentAlert + item.job 
    })
   console.log(contentAlert)
  }

  const handlerNavigateToCheckout = () => {
    const filter = dataJobs.filter((item)=>item.checked == true)
    let newItem = ''
    filter.forEach(item=>{
      newItem = newItem + item.price;
    })
      setPrice(item.price);
    
    if(newItem.length > 0){
     navigation.navigate('Checkout',dataJobs)
    }else{

      Alert.alert('Opss', "Silahkan Pilih Kebutuhan terlebih Dahulu")
    }
    
  };

 const getPrice = () =>{

 }


  const renderListItem =() =>{
   return dataJobs.map((item, index) => {
     return (
       
       <TouchableOpacity key={index} onPress={() => onChangeValue(item, index)}>
         <View style={styles.CheckBoxContainer}>
           <CheckBox
             tintColors={{true: '#FF6F00', false: 'FF6F00'}}
             value={item.checked}
             onValueChange={() => {
               onChangeValue(item, index);
             }}
           />
           <View
             style={{
               flexDirection: 'row',
               flex: 1,
               justifyContent: 'space-between',
               marginRight: 5,
             }}>
             <Text style={styles.item}>{item.job} </Text>
             <NumberFormat
               value={item.price}
               displayType={'text'}
               thousandSeparator={true}
               prefix={'Rp '}
               renderText={value => (
                 <Text style={styles.itemPrice}>{value}</Text>
               )}
             />
           </View>
         </View>
       </TouchableOpacity>
     );
   });
  }

  
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          <View style={styles.btnBackWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" style={styles.btnBack} />
            </TouchableOpacity>
          </View>
          <Card.Cover
            source={{uri: 'https://picsum.photos/700'}}
            style={styles.imgThumb}
          />
        </Card>

        <View style={styles.content}>
          <View style={styles.titleContent}>
            <Title style={styles.title}>Pak Selamet</Title>
            <Text style={styles.price}>Rp.100.000</Text>
            <AirbnbRating
              showRating={false}
              count={5}
              defaultRating={5}
              size={24}
            />
          </View>
          <Card style={styles.descContent}>
            <Text style={styles.descText}>
              aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas
              leo odio condimentum id luctus nec molestie sed justo
              p-ellentesque is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to
            </Text>
          </Card>
          <Card style={styles.package}>
            <Text style={styles.info}>Sudah termasuk alat/perlengkapan</Text>

            <View>{renderListItem()}</View>
          </Card>
        </View>
        <View style={{marginBottom: '20%'}}></View>
      </ScrollView>
      <TouchableOpacity
        onPress={handlerNavigateToCheckout}
        style={styles.btnWrapper}>
        <View style={styles.btnOrder}>
          <Text style={styles.titleBtnOrder}>Order Now</Text>
          <Text>123</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
