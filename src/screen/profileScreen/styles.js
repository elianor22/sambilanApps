
import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const primary = '#FF6F00';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  content: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: -10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  imgProfile: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  imgWrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  orderHistoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  orderHistory: {
    marginHorizontal: 5,
    padding: 10,
    width: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  titleOrder: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitleOrder: {
    fontSize: 14,
    color: '#a1a1a1',
  },
  profileContainer: {
    marginVertical: 15,
  },
  profileWrapper: {
    // flexDirection: 'row',
    padding: 5,
    // justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: '#898989',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    borderWidth: 0.3,
    borderRadius: 4,
    borderColor: '#a1a1a1',
  },
  subTitleActive: {
    fontSize: 16,
    color: 'black',
    borderWidth: 0.7,
    borderRadius: 4,
    borderColor: '#5bf593',
  },

  shadow: {
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
  },
  profileWrapperAddress: {
    marginVertical: 10,
    padding: 10,
  },
  address: {borderWidth: 1, borderColor: '#f6f6f6', padding: 5},
  btnSaveWrapper: {},
  btnSave: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  titleSave: {
    color: 'white',
    fontSize: 16,
    backgroundColor: primary,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  titleCancel: {
    color: 'white',
    fontSize: 16,
    backgroundColor: '#db3f30',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});