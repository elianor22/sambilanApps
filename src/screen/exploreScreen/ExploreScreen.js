import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';

import axios from 'axios';

import styles from './styles';

import {CategoryOutline} from '../../components';
import CardExplore from '../../components/cardExplore/CardExplore';
import SearchBar from '../../components/searchBar/SearchBar';

import exploreDummy from '../../json/exploreDummy.json';


export default function ExploreScreen() {
  const [endpoint, setEndpoint] = useState('user');
  const [data, setData] = useState(exploreDummy.clean);
  const [date, setDate] = useState(null);

console.log(data);
  const BASE_URL = 'https://dummyapi.io/data/api';
  const APP_ID = '606dee664d17310528ac843d';

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/${endpoint}?limit=10`, {headers: {'app-id': APP_ID}})
  //     .then(({data}) => setData(data.data))
  //     .catch(console.error);
  //   return () => {
  //     data;
  //   };
  // }, []);

  const handlerCategory = (title) => {
    const {category} = title
    const data = category 

    if(data === 'Cleaning Services'){
      setData(exploreDummy.clean)
      console.log('tipe',data);
    }else if (data === 'Nanny Services') {
      setData(exploreDummy.nanny);
    }else{
      setData(exploreDummy.guard);
    }
      
  //  setData(exploreDummy.nanny)

  };

  const clickTest = item => {
    Alert.alert( item.name, item.type);
  };

  const renderItem = ({item}) => {
    const {name, type, rating, title, imageUrl} = item;
    return (
      <>
        <CardExplore
          name={name}
          type={type}
          rating={rating}
          imageUrl={imageUrl}
          title={title}
          onPress={() => clickTest(item)}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar />

      <View>
        <CategoryOutline
          title={exploreDummy.category}
          onPress={(title)=>handlerCategory(title)}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
