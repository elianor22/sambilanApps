import { StyleSheet } from "react-native";

export default StyleSheet.create({
  category: {
    flex: 1,
width:153,
    marginVertical: 10,
    marginHorizontal: 7,
    borderRadius: 20,
   
  },
  imgThumb: {
    height: 150,
    width: 153,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  wrapperTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
 
marginVertical:10,
    textAlignVertical: 'center',
    fontSize: 16,
    // width: 180,
    color: '#7c7c7f',
    fontWeight:'100'
    
  },
});