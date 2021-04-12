import React, { useEffect, useState, } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import {Card, Title, RadioButton, } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import detailDummy from '../../json/detailDummy.json'

import styles from './styles';
import { runOnJS } from 'react-native-reanimated';

export default function CategoryScreen({route,navigation}) {


const [dataJobs, setDataJobs] = useState([]);
console.log(dataJobs);
  // const [checked, setChecked] = useState('first');
   const [isSelected, setSelection] = useState(false);



  useEffect(() => {
    getData()
    return () => {
      
    }
  }, [])

  const getData = () =>{
    setDataJobs(detailDummy)
  }
  

  onChangeValue = (itemSelected,index)=>{
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
    listSelected.forEach(item =>{
      contentAlert = contentAlert + `${item.id}   `+ item.job + '\n'
    })
   console.log(contentAlert)
  }

  const renderListItem =() =>{
   return dataJobs.map((j, index) => {
     return (
       <TouchableOpacity key={index} onPress={() => onChangeValue(j,index)}>
         <View style={styles.CheckBoxContainer}>
           <CheckBox
             tintColors={{true: '#FF6F00', false: 'FF6F00'}}
             value={j.checked}
             onValueChange={() => {
               onChangeValue(j, index);
             }}
           />
           <Text style={styles.item}>{j.job}</Text>
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
            <Icon name="arrow-back" style={styles.btnBack} />
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
          <View style={styles.duration}>
           
          </View>
          
        </View>
        <View style={{marginBottom: '20%'}}></View>
      </ScrollView>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={onShowItemSelected} style={styles.btnOrder}>
          <Text style={styles.titleBtnOrder}>Order Now</Text>
          <Text style={styles.titleBtnOrder}>100.000</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
