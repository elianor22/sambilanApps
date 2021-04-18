
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
    flex: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  imgProfile: {
    width: '100%', 
    height: 240,
    resizeMode:'cover'
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
});