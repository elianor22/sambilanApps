import { StyleSheet } from "react-native";

const primary = '#FF6F00';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnBackWrapper: {
    position: 'absolute',
    top: 20,
    left: 5,
    zIndex: 1,
  },
  btnBack: {
    fontSize: 35,
    color: '#e9e9e9',
  },
  imgThumb: {
    width: '100%',
    height: 250,
    backgroundColor: 'red',
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  titleContent: {
    padding: 5,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    color: '#FFAB04',
    fontSize: 18,
    marginBottom: 10,
  },
  descContent: {
    marginVertical: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 3,

    borderRadius: 5,
  },
  descText: {
    fontSize: 16,
    lineHeight: 24,
  },
  package: {
    marginVertical: 10,
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 2,
    marginBottom: 10,
    color: '#FF6F00',
  },
  jobInfo: {
    color: '#696969',
    fontSize: 17,
  },
  item: {
    fontSize: 16,
  },
  btnWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'tomato',
    position: 'absolute',
    bottom: 10,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 50,
  },
  btnOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  titleBtnOrder: {
    color: '#fff',
    fontSize: 20,
  },
});