import React from 'react'
import { View, Text } from 'react-native'

export default function Devider({width}) {
  


    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            borderWidth: 3,
            borderRadius: 50,
            borderColor: '#d2d2d2',
            width:100
          }}></View>
      </View>
    );
}
