import React, { useState } from 'react';
import {View, Text ,Dimensions, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const windowHeight = Dimensions.get('window').height;

export default function CategoryScreen() {


const [activity, setActivity] = useState ('aaa')



  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          {activity.length > 0 ? (
            <>
              <Card style={styles.cardItem}>
                <Text style={styles.title}>pak selamet</Text>
                <Text style={styles.subTitle}>12/12/2012</Text>
                <AirbnbRating
                  showRating={false}
                  count={5}
                  defaultRating={5}
                  size={24}
                  style={{flexDirection: 'row'}}
                />
              </Card>
              <Card style={styles.cardItem}>
                <Text style={styles.title}>Siskaeee e nya3</Text>
                <Text style={styles.subTitle}>12/4/2021</Text>
                <AirbnbRating
                  showRating={false}
                  count={11}
                  defaultRating={9}
                  size={24}
                  style={{flexDirection: 'row'}}
                />
              </Card>
            </>
          ) : (
            <>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: windowHeight,
                }}>
                <Text style={{fontSize: 20, color: '#696969'}}>
                  Belum ada Activity
                </Text>
                <Icon
                  name="sad-outline"
                  style={{fontSize: 100, color: '#696969'}}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
