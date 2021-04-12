import React from 'react'
import { View, Text } from 'react-native'
import { Searchbar } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
export default function SearchBar() {
    return (
      <View style={styles.header}>
       
        <View style={{alignItems:'center'}}>
          <Searchbar
            placeholder="Cari disini"
            // onChangeText={onChangeSearch}
            // value={searchQuery}
            style={styles.searchBar}
          />
        </View>
      </View>
    );
}
