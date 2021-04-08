import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Searchbar} from 'react-native-paper';



// import 
import CategoryList from '../../components/categoryList/CategoryList';
import CardList from '../../components/cardList/CardList';

// import dummy data
import homeDummy from '../../json/homeDummy.json';
// import styles
import styles from './styles';

export default function Home() {
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
                  category={data.category}
                  image={data.imageUrl}
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
                  <TouchableOpacity>
                    <CardList
                      key={i}
                      name={data.name}
                      type={data.type}
                      rating={data.rating}
                    />
                  </TouchableOpacity>
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
                  <TouchableOpacity>
                    <CardList key={data.id} name={data.name} type={data.type} />
                  </TouchableOpacity>
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
                  <TouchableOpacity>
                    <CardList key={data.id} name={data.name} type={data.type} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
