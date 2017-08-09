import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

export default class Action extends Component {
  render() {
    //console.log(this.props.icon);
    
    const imagePath = `../images/like-color.png`;
    
    return (
      <View style={styles.action}>
        <Image 
          style={styles.actionIcon}
          resizeMode='cover'
          source={require(imagePath)}
        />
        <Text style={[common.typeMono, styles.actionLabel]}>
          { this.props.label }
        </Text>
      </View>
    );
  } 
}

import common from '../styles';
const styles = StyleSheet.create({
  action: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    paddingTop: 22,
    paddingBottom: 22,
    borderColor: '#E5E5E5',
    borderWidth: 0,
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  actionLabel: {
    //backgroundColor: 'blue',
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 16,
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
});
