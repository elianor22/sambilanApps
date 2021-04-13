import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 10,
  },
  cardItem: {
    alignItems: 'flex-start',
    padding: 10,
    marginVertical: 5,
    shadowColor: 'tomato',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation:3,
  },
  title: {
    fontSize: 20,
    color: '#696969',
  },
  subTitle: {
    color: '#8d8d8d',
    fontSize: 16,
  },
});