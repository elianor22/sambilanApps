
import { StyleSheet } from "react-native";
const primary = '#FF6F00';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  btnHome: {
    backgroundColor: primary,
    marginTop: '20%',
    borderRadius: 50,
    padding: 10,
  },
  btnTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginVertical:5
  },
});
