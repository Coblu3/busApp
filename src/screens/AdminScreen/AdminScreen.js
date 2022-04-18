import { View, Text , Alert, StyleSheet, Image, useWindowDimensions, ScrollView , Picker} from 'react-native'
import React, { useState , useContext , useEffect } from 'react'
import Logo from '../../../assets/admin-logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import stationContext from '../../context/stationContext'
import BusContext from '../../context/BusContext'





const AdminScreen = () => {

  class Station {
    constructor(title,lat,lng,passengers){
      this.title = title;
      this.lat = lat;
      this.lng = lng;
      this.passengers = passengers;
    }
  }

  class Bus {
    constructor(id,route){
      this.id = id;

      this.route = route;
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

  function getAllBusses (busses,setBusses) {
    let sta = []
    BusContext.getAllBus().then(res=>{
      res.forEach(element => {
        const st = new Bus();
        st.id = element.id
        st.route = element.route

        sta.push(st)
        
        
      });
      setBusses(sta)
  })
  
  }

  const { height } = useWindowDimensions();
  const [title, setTitle] = useState('');
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [Id, setId] = useState(0);
  const [Route1, setRoute] = useState('');
  const [Route2, setRoute2] = useState('');
  const [Route3, setRoute3] = useState('');
  const [Route4, setRoute4] = useState('');
  const [Route5, setRoute5] = useState('');

  const [passenger, setPassenger] = useState(0);
  const [selectedValue, setSelectedValue] = useState();

  const [stations,setStations] = useState([])
  const [busses,setBusses] = useState([])
  useEffect(()=>{
    getAllStations(stations,setStations)
    // getAllBusses(busses,setBusses)
  })

  const onSubmitPressed = ()=>{
    stationContext.register(title,lat,lng,passenger).then(res=>{
      window.alert("Successful Submit")
    }).catch(err=>{
      console.log("unsuccessfull login")
    })
}

  const onDeletePressed = () => {
    stationContext.deleteStation(selectedValue).then(res=>{
      window.alert(res.title+" Deleted")
    })
  }
  
  const onAddPressed = () => {
    let routes = []

    if(Route1.length>0){
      routes.push(Route1)
    }
    if(Route2.length>0){
      routes.push(Route2)
    }
    if(Route3.length>0){
      routes.push(Route3)
    }
    if(Route4.length>0){
      routes.push(Route4)
    }
    if(Route5.length>0){
      routes.push(Route5)
    }
    BusContext.register(Id,routes).then(res=>{
      window.alert("Success")
    })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"></Image>
      <Text style={styles.text}>Add Station</Text>
      <CustomInput 
      placeholder="Station Title" 
      value={title} 
      setValue={setTitle}>
      </CustomInput>
      
      <CustomInput 
      placeholder="Lat"
      value={lat} 
      setValue={setLat} 
      
      ></CustomInput>

      <CustomInput 
      placeholder="Lng"
      value={lng} 
      setValue={setLng}  
      
      ></CustomInput>

      <CustomInput 
      placeholder="Passenger"
      value={passenger} 
      setValue={setPassenger}  
      
      ></CustomInput>

      <CustomButton 
      text={'Submit'} 
      onPress={onSubmitPressed}
      ></CustomButton>

      <Text style={styles.text}>Delete Station</Text>
      <Picker
      selectedValue={selectedValue}
      style={{ height: 50, width: 300 }}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
      {

        stations.map(station=>{
          return (
          <Picker.Item label= {station.title} value={station.title} />
          )
        })
      }


      </Picker>

      <CustomButton 
      text={'Delete'} 
      onPress={onDeletePressed}
      ></CustomButton>


<Text style={styles.text}>Add Bus</Text>
      <CustomInput 
      placeholder="Bus Id" 
      value={Id} 
      setValue={setId}>
      </CustomInput>
      
      <CustomInput 
      placeholder="Route1"
      value={Route1} 
      setValue={setRoute} 
      
      ></CustomInput>

      <CustomInput 
      placeholder="Route2"
      value={Route2} 
      setValue={setRoute2}  
      
      ></CustomInput>

      <CustomInput 
      placeholder="Route3"
      value={Route3} 
      setValue={setRoute3}  
      
      ></CustomInput>

      <CustomInput 
      placeholder="Route4"
      value={Route4} 
      setValue={setRoute4}  
      
      ></CustomInput>
      
      <CustomInput 
      placeholder="Route5"
      value={Route5} 
      setValue={setRoute5}  
      
      ></CustomInput>

      <CustomButton 
      text={'Add Bus'} 
      onPress={onAddPressed}
      ></CustomButton>
      
      {/* {
        busses.map(bas=>{
          console.log(bas);
          <Text>
          <head><Text>{bas.id}</Text></head>
          <Text>{bas.route}</Text>
          
          </Text>
          
        })
      } */}
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({

  root: {
    alignItems: 'center',
    padding: 10
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

export default AdminScreen