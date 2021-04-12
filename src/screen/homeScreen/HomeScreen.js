import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import {Button, Searchbar} from 'react-native-paper';
// import stact navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import
import CategoryList from '../../components/categoryList/CategoryList';
import CardList from '../../components/cardList/CardList';
import ExploreScreen from '../exploreScreen/ExploreScreen';
// import dummy data
import homeDummy from '../../json/homeDummy.json';
// import styles
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { DetailScreen } from '../index';

const Stack = createStackNavigator();

export default function Home({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);


  const handlerCategory =(data) =>{
    // console.log(data);
    navigation.push('Explore',data)
  }
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{fontSize: 24, color: 'white', marginBottom: 6}}>
            Temukan layanan terbaik
          </Text>
          <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}>
            untuk mempermudah hidupmu
          </Text>
        </View>

        <Searchbar
          placeholder="Cari disini"
          // onChangeText={onChangeSearch}
          // value={searchQuery}
          style={styles.searchBar}
        />
      </View>

      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>Category</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            {homeDummy.categoryList.map((data, index) => {
              return (
                <CategoryList
                  key={index}
                  category={data.categoryType}
                  image={data.imageUrl}
                  onPress={() => handlerCategory(data)}
                />
              );
            })}
          </ScrollView>
          <View style={{marginTop: 5}}>
            <View style={styles.subCategoryTitle}>
              <Text style={styles.subCategory}>Cleaning Services</Text>
              <TouchableOpacity>
                <Text style={{color: '#FF6F00'}}>See all</Text>
              </TouchableOpacity>
            </View>
            <View>
              {homeDummy.clean.map((data, i) => {
                return (
                  <View key={data.id}>
                    <TouchableOpacity
                      onPress={() => navigation.push("Detail")}>
                      <CardList
                        name={data.name}
                        type={data.type}
                        rating={data.rating}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{marginTop: 5}}>
            <View style={styles.subCategoryTitle}>
              <Text style={styles.subCategory}>Nanny Services</Text>
              <TouchableOpacity>
                <Text style={{color: '#FF6F00'}}>See all</Text>
              </TouchableOpacity>
            </View>
            <View>
              {homeDummy.nanny.map((data, i) => {
                return (
                  <View key={data.id}>
                    <TouchableOpacity onPress={() =>navigation.push('Detail')}>
                      <CardList
                        name={data.name}
                        type={data.type}
                        rating={data.rating}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{marginTop: 5}}>
            <View style={styles.subCategoryTitle}>
              <Text style={styles.subCategory}>Guard Services</Text>
              <TouchableOpacity>
                <Text style={{color: '#FF6F00'}}>See all</Text>
              </TouchableOpacity>
            </View>
            <View>
              {homeDummy.guard.map((data, i) => {
                return (
                  <View key={data.id}>
                    <TouchableOpacity>
                      <CardList
                        name={data.name}
                        type={data.type}
                        rating={data.rating}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={{marginTop: 100}}></View>
        </ScrollView>
      </View>

      
    </View>
  );
}
