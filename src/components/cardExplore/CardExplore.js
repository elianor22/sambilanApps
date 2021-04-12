import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, Title } from 'react-native-paper';
import {Rating, AirbnbRating} from 'react-native-ratings';

import styles from './styles';

export default function CardExplore({name, type, rating, imageUrl}) {
  return (
    <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Cover source={{uri: imageUrl}} style={styles.imgThumb} />
          <Card.Content>
            <Title>{name}</Title>
            <Text>{type}</Text>
            <Text>
              <AirbnbRating
                showRating={false}
                defaultRating={rating}
                size={17}
                isDisabled
                starContainerStyle={{marginTop: 8}}
              />
            </Text>
          </Card.Content>
        </Card>
    </View>
  );
}
