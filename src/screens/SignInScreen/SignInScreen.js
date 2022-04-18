import { View, Text , Alert, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState , useContext } from 'react'
import Logo from '../../../assets/1200px-Bus-logo.svg.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../../context/AuthContext'


const SignInScreen = () => {
  const { height } = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();


  const onSignInPressed = ()=> {
    AuthContext.login(username,password).then(
      (res)=>
    {
      console.log("successfull login",username)

      navigation.navigate("Home",{
      admin:res.admin})
    }).catch(err=>{
      console.log("unsuccessfull login")
    })
  };
  
  const onSignUpPressed = ()=> {
    navigation.navigate('SignUp')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"></Image>
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

      <CustomButton 
      text={'Login'} 
      onPress={onSignInPressed}
      ></CustomButton>
      
      <CustomButton 
      text={'Sign Up'} 
      onPress={onSignUpPressed}
      type= "TERTIARY"
      ></CustomButton>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 30
  },


  logo: {
    width: '70%',
    height: 200,
    maxWidth: 300,
    marginVertical:20
  }
})

export default SignInScreen