import { View, Text, StyleSheet, useWindowDimensions, ScrollView , Alert} from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../context/AuthContext'

const SignUpScreen = () => {
  const { height } = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');


  const navigator = useNavigation();

  const onRegisterPressed = ()=> {
    if (password==repeatPassword && password.length>=3 && username.length>=3){
      //add user
      AuthContext.register(username,password).then(
        (res) => {
          console.log("register done")
          navigator.navigate("SignIn")
        }
      ).catch(error=>{
        console.log(error)
      })
      
    }else{
      Alert.alert("Wrong Entry!")
    }
   
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Register</Text>
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}></CustomInput>
      
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry
      ></CustomInput>

    <CustomInput 
      placeholder="Repeat Password" 
      value={repeatPassword} 
      setValue={setRepeatPassword}
      secureTextEntry
      ></CustomInput>

      <CustomButton 
      text={'Register'} 
      onPress={onRegisterPressed}
      ></CustomButton>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 30,
    marginVertical:150
  },


  logo: {
    width: '70%',
    height: 200,
    maxWidth: 300,
    marginVertical:20
  },
  title:{
      fontSize:24,
      fontWeight:'bold',
      color:'#051C60',
      margin:10,
  }
})

export default SignUpScreen