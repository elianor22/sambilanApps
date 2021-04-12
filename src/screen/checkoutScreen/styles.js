import { StyleSheet } from "react-native";

const primary = '#FF6F00';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnBackWrapper: {
    marginTop: 20,
    marginLeft: 10,
    zIndex: 1,
  },
  btnBack: {
    fontSize: 35,
    color: '#696969',
  },
  content: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  txtWrapper: {
    shadowColor: '#000',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.41,

    elevation: 3,
    borderRadius: 10,
  },
  textInput: {
    justifyContent: 'flex-start',
    color: '#696969',
  },
  paymentContent: {
    flex: 1,
    borderRadius: 10,
    paddingTop: 10,
  },
  imageWrapper: {
    flexDirection: 'row',
    padding: 5,
  },

  imageBank: {
    width: 70,
    height: 70,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 75,
    height: 75,
    marginHorizontal: 10,
    borderWidth: 1,
  },
  imgContainerActive: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 75,
    height: 75,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: primary,
  },

  btnWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    position: 'absolute',
    bottom: 10,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 50,
  },
  btnOrder: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  titleBtnOrder: {
    color: '#fff',
    fontSize: 20,
  },
  btnCamera: {
    flexDirection: 'row',
    marginVertical: 15,
    backgroundColor: primary,
    borderRadius: 50,
    alignItems: 'center',
    padding:7,
  },
  txtBtnCamera: {
    marginVertical: 5,
    
    color: 'white',
    fontSize: 16,
  },
});