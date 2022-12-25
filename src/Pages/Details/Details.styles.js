import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  topBar: {
    height: 'auto',
    backgroundColor: '#f2f2f2',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 2,
  },
  jobName: {
    color: '#37474f',
    fontWeight: 'bold',
    fontSize: 22,
    margin: 5,
  },
  location: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
  },
  locationTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 11,
  },
  locationView: {
    flexDirection: 'row',
    marginVertical: 3,
    margin: 5,
  },
  jobLevel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
  },
  jobLevelTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 11,
  },
  jobLevelView: {
    flexDirection: 'row',
    marginVertical: 3,
    margin: 5,
  },
  htmlSource: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  jobDetailTitle: {
    color: '#37474f',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
  },
  signupButton: {
    flex: 1,
    backgroundColor: '#ef5350',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  addFavsButton: {
    flex: 1,
    backgroundColor: '#ef5350',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  disabledAddFavsButton: {
    flex: 1,
    backgroundColor: '#ffd3d0',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  disabledSignupButton: {
    flex: 1,
    backgroundColor: '#ffd3d0',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  bottomBar: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#e5e5e5',
  },
  htmlTagStyles: {
    p: {color: 'black'},
    li: {color: 'black'},
    b: {color: 'black'},
    ul: {color: 'black'},
    body: {color: 'black'},
  },
});
