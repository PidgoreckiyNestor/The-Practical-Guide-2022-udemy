import React from 'react';

import { Pressable, Text, View, StyleSheet } from 'react-native';
import { IS_ANDROID } from '../globalVariables';

const CategoriesGridTail = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable onPress={onPress} android_ripple={{color:'#ccc'}} style={({pressed}) =>[
        styles.button, pressed ? styles.pressedButton : null]
      }>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGridTail;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius:8,
    elevation:4,
    shadowColor: 'white',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backgroundColor:'white',
    overflow: IS_ANDROID ? 'hidden' : 'visible'
  },
  button:{
    flex:1,
    borderRadius:8,
    overflow:'hidden'
  },
  pressedButton:{
    opacity:0.5,
  },
  innerContainer:{
    flex:1,
    padding:16,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontWeight:'bold'
  }

});
