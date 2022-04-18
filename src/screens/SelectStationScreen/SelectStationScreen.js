import { View, Text , Alert, StyleSheet, Image, useWindowDimensions, ScrollView , Picker} from 'react-native'
import React, { useState , useContext , useEffect } from 'react'
import Logo from '../../../assets/station-logo.png'
import CustomButton from '../../components/CustomButton'
import stationContext from '../../context/stationContext'

class Station {
    constructor(title,lat,lng,passengers){
      this.title = title;
      this.lat = lat;
      this.lng = lng;
      this.passengers = passengers;
    }
  }
  
  
  function getAllStations (stations,setStations) {
    let sta = []
    stationContext.getAllStation().then(res=>{
      
      res.forEach(element => {
        const st = new Station();
        st.title = element.title
        st.lat = element.lat
        st.lng = element.lng
        st.passengers = element.passengers
        sta.push(st)
        
        
      });
      setStations(sta)
  })
  
  }





const SelectStationScreen = () => {
  const { height } = useWindowDimensions();
  const [selectedValue, setSelectedValue] = useState();

  const [stations,setStations] = useState([])
  useEffect(()=>{
    getAllStations(stations,setStations)
  })

  const onSubmitPressed = () =>{
    
    
    var result = stations.filter(obj => {
        return obj.title === selectedValue
      })
    stationContext.updateStation(selectedValue,result[0].passengers+1)
  }
  return (
    <View style={styles.root}>
    <Image source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"></Image>
      <Text style={styles.text}>Select Station</Text>
      <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 300}}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
      {
        stations.map(station=>{
          return (
          <Picker.Item label= {`${station.title} Station/Passengers: ${station.passengers}`} value={station.title} />
          )
        })
      }


      </Picker>

      <CustomButton 
      text={'Submit'} 
      onPress={onSubmitPressed}
      ></CustomButton>
    </View>
  )
}
const styles = StyleSheet.create({

    root: {
      alignItems: 'center',
      padding: 30
    },
  
    text:{
      fontWeight:'bold',
      fontSize:18,
      color:'black'
    },
  
  
    logo: {
      width: '30%',
      height: 200,
      maxWidth: 300,
      marginVertical:4
    },
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  })

export default SelectStationScreen