import React  from 'react';
import { Text, View, StyleSheet, Image, Dimensions,  } from 'react-native';



import styles from'./styles'

const windowWidth = Dimensions.get('window').width;


export default function App() {




  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <View style={styles.text}>
          <Text style={styles.title}>sambilanApps</Text>
          <Text style={styles.subTitle}>service to make your life easier</Text>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Image
          source={require('../../assets/images/splashScreen.png')}
          style={styles.img}
        />
      </View>
    </View>
  );
}


