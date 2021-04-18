import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 110, 0, 0.6)',
  },
  textContent: {
      flex:1,
    alignContent: 'center',
    justifyContent: 'center',

  },
  text: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    color: '#efefef',
    marginTop: 10,
    textAlign: 'center',
  },
  img: {
    height: 260,
    width: '100%',
    resizeMode: 'contain',
    marginBottom:-10
  },
});
