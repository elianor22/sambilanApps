import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Alert, Touchable, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import axios from 'axios';

import styles from './styles';

import {CategoryOutline} from '../../components';
import CardExplore from '../../components/cardExplore/CardExplore';
import SearchBar from '../../components/searchBar/SearchBar';

import exploreDummy from '../../json/exploreDummy.json';







export default function ExploreScreen({route,navigation}) {

const [data] = useState(route.params)

console.log(data.clean);

  // const [endpoint, setEndpoint] = useState('user');
  // const [data, setData] = useState(exploreDummy.clean);
  // const [date, setDate] = useState(null);

  // const BASE_URL = 'https://dummyapi.io/data/api';
  // const APP_ID = '606dee664d17310528ac843d';

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/${endpoint}?limit=10`, {headers: {'app-id': APP_ID}})
  //     .then(({data}) => setData(data.data))
  //     .catch(console.error);
  //   return () => {
  //     data;
  //   };
  // }, []);

  // const handlerCategory = (title) => {
  //   const {category} = title
  //   const data = category 

  //   if(data === 'Cleaning Services'){
  //     setData(exploreDummy.clean)
  //   }else if (data === 'Nanny Services') {
  //     setData(exploreDummy.nanny);
  //   }else{
  //     setData(exploreDummy.guard);
  //   }
      
  // //  setData(exploreDummy.nanny)

  // };

  const clickTest = item => {
    Alert.alert( item.name, item.type);
  };

  const renderItem = ({item}) => {
    const {name, type, rating, title, imageUrl} = item;
    return (
      <>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Detail')}
        >
          <View style={{backgroundColor:'white'}}>
            <CardExplore
              name={name}
              type={type}
              rating={rating}
              imageUrl={imageUrl}
              title={title}
            />
          </View>
        </TouchableOpacity>
      </>
    );
  };

 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Icon name="arrow-back" style={{fontSize: 35, color: 'white'}} />
        </TouchableOpacity>
        <SearchBar />
      </View>

      {/* <View>
        <CategoryOutline
          title={exploreDummy.category}
          onPress={title => handlerCategory(title)}
        />
      </View> */}
      <View style={styles.content}>
        <FlatList
          data={data.clean}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />

        {/* <Text>Title: {JSON.stringify(route)} </Text> */}
      </View>
    </View>
  );
}

