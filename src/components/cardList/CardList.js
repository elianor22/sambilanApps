import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';

import {Rating, AirbnbRating} from 'react-native-ratings';


import styles from './styles';
export default function CardList({name,type,rating}) {
  return (
    <View style={styles.container}>
      <Card style={styles.cardShadow}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/images/clean1.jpg')}
            style={styles.imgThumb}
          />
          <Card.Content>
            <View style={styles.txtCardList}>
              <Title>{name}</Title>
              <Paragraph>{type}</Paragraph>
              <AirbnbRating
                count={5}
                showRating={false}
                defaultRating={rating}
                size={20}
                isDisabled
                starContainerStyle={{marginTop: 15}}
              />
            </View>
          </Card.Content>
        </View>
      </Card>
    </View>
  );
}
