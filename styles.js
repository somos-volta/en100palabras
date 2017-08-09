import {StyleSheet} from 'react-native'

let textColor = '#000000';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  
  image: {
    height: 224,
  },
  
  
  
  page: {
    backgroundColor: '#FFFFFF',
    padding: 32,
  }, 
  
  typeMono: {
    fontFamily: 'Menlo-Regular',
    color: textColor,
  }, 
  typeSans: {
    color: textColor,
    opacity: 0.8,
    fontSize: 16,
    lineHeight: 28,
  }, 

  meta: {
    opacity: 0.6,
    fontSize: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 24,
  },
  
  body: {
    marginBottom: 16,
  },
  author: {
    fontWeight: 'bold',
  },
  
  
  actions: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 32,
  },
});
