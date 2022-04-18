import { View, Text , StyleSheet, Dimensions} from 'react-native'
import React , {useState,useEffect} from 'react'
import MapView , {Callout, Marker,PROVIDER_GOOGLE, LatLng} from 'react-native-maps'
import stationContext from '../../context/stationContext'
import MapViewDirections from 'react-native-maps-directions'
import Logo from '../../../assets/marker-logo.png'
const GOOGLE_MAPS_APIKEY = 'AIzaSyASDCa1i51a3Zqc0RqdkvOuLbf-FdTU_bc';


class Station {
  constructor(title,lat,lng,passengers){
    this.title = title;
    this.lat = lat;
    this.lng = lng;
    this.passengers = passengers;
  }
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
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



const MapScreen = () => {
  const [stations,setStations] = useState([])
  useEffect(()=>{
    getAllStations(stations,setStations)
  })
  
    // coordinates:[
    //         {name:'Başiskele', latitude:40.71295 , longitude:29.92850},
    //         {name:'Cayirova', latitude:40.71295 , longitude:29.92850},
    //         {name:'Darica', latitude:40.71295 , longitude:29.92850},
    //         {name:'Derince', latitude:40.71295 , longitude:29.92850},
    //         {name:'Dilovasi', latitude:40.71295 , longitude:29.92850}
    
    //     ]
    
    
  // console.log(stations)
  return (
    <View>
    {
          stations.map((marker,index)=>{
            <Text>asd</Text>
          
           

            
          })
        }

      <MapView
      provider={PROVIDER_GOOGLE}  
      style={styles.map}
                initialRegion={{
                latitude: 40.71295,
                longitude: 29.92850,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
      >
{

  stations.map((stat,index)=>{
    if(index+1!=stations.length){
      return(
      <MapViewDirections
    origin={{latitude:stations[index].lat,longitude:stations[index].lng}}
    destination={{latitude:stations[index+1].lat,longitude:stations[index+1].lng}}
    strokeWidth={3}
    strokeColor="hotpink"
    apikey={GOOGLE_MAPS_APIKEY}
  />
      )
    }
  })
}
      

  
        {

        

          stations.map((marker,index)=>{
            return(
            <Marker 
            key={marker.title}
            title={`${marker.title} Station` }
            description= {`Passenger: ${marker.passengers}`}
            
            coordinate={{latitude:marker.lat,longitude:marker.lng}}
            image={Logo}
            >

            </Marker>
            )
           

            
          })
        }
        
        
        

      </MapView>

      

    </View>
  )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default MapScreen


