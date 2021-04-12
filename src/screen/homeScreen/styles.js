import {StyleSheet} from 'react-native';

const primary = '#FF6F00';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: primary,
    height: 200,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    marginTop: 37,
    marginLeft: '-7%',
  },
  searchBar: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 50,
  },
  content: {
    flex: 1,
    marginTop: 3,
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 25,
    marginBottom: 3,
    fontWeight: '700',
    fontSize: 18,
  },

  subCategoryTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  subCategory: {
    fontSize: 18,
    color: '#696969',
  },
  txtCardList: {
    flexDirection: 'column',
  },
  modalContainer: {
    height: 300,
  },
  wrapperContent: {
    backgroundColor: primary,
    borderRadius: 20,
    paddingTop: 20,
  },

  modalContent: {
    height: 660,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginTop: 30,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitModal: {
    backgroundColor: primary,
    padding: 10,
    borderRadius: 100,
    color:'white'
  },
});
