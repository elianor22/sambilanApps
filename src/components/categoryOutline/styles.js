import { StyleSheet } from "react-native";
const primary = '#FF6F00';
export default StyleSheet.create({
  container: {
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 6,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 50,
    borderColor: primary,
    minWidth: 100,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: primary,
  },
});