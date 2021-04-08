import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container:{
    flex:1
  },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
   
  },
  cardShadow: {
    marginVertical:5,
  },
  box: {
    borderWidth: 1,
  },
  imgThumb:{
    width:100,
    height:100,
    resizeMode:'cover',
  },
  txtCardList:{
    flexDirection:'column',
    marginRight:10
  }
});