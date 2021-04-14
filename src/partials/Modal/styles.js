import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    padding: 5,
    width: '80%',
    marginVertical:10
  },
  wrapperText: {
    padding: 7,
    marginVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#a1a1a1',
  },
  title: {
    fontSize: 26,
    marginVertical: 3,
    color: '#fff',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
    color: '#8d8d8d',
  },
});
