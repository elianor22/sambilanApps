import { StyleSheet } from "react-native";


const primary = '#FF6F00';

export default StyleSheet.create({
  paymentContent: {
    backgroundColor: '#f1eeff',
    marginTop: 10,
    marginHorizontal: 15,
    paddingHorizontal: 5,
  },
  detailConteiner: {
    flex: 1,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  listDetails: {
    flexDirection: 'column',
  },
  itemDetails: {
    textAlign: 'right',
    marginBottom: 5,
    color: '#8d8d8d',
    fontSize: 15,
  },
});