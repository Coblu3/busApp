import { View, Text , StyleSheet , Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({onPress , text , type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles= StyleSheet.create({
    container : {
        width:'100%',
        padding:15,
        marginVertical:5,

        alignItems:'center',
        borderRadius:8,
    },
    text: {
      fontWeight:'bold',
      color:'white',
    },

    container_PRIMARY : {
      backgroundColor: '#3B71F3',
    },

    container_TERTIARY : {

    },

    text_TERTIARY : {
      color:'gray',
    }
})

export default CustomButton