import React from 'react'
import { View, Text, TouchableOpacity, Image, Touchable, TouchableHighlight } from 'react-native'
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';
import styles from './styles'

export default function CategoryList({category,image}) {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
    return (
      <Card style={styles.category}>
        <TouchableOpacity>
          <Image source={{uri: image}} style={styles.imgThumb} />
          <Card.Content style={styles.wrapperTitle}>
            <Title style={styles.title}>{category}</Title>
          </Card.Content>
      </TouchableOpacity>
        </Card>
    );
}
