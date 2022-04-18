import { View, Text , StyleSheet, Dimensions} from 'react-native'
import React ,{Component} from 'react'
import MapView , {Marker,PROVIDER_GOOGLE} from 'react-native-maps'
import stationContext from '../../context/stationContext'

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default class MapaScreen extends Component {

    constructor(){

        this.state = {
            stations : [],
        };
    }

    setStations () {
        let stations = []
        stationContext.getAllStation().then(res=>{
          
          res.forEach(element => {
            const st = new Station();
            st.title = element.title
            st.lat = element.lat
            st.lng = element.lng
            st.passengers = element.passengers
            stations.push(st)
            
            
          });
          this.setState(stations)
      
          
        })
    }

    
    
  render() {
      
    return (
    <View>
        <Text>{this.state}</Text>
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
            <Marker
            coordinate={{latitude:40.71295,longitude:29.92850}}
            title={"Başiskele"}
            ></Marker>
    
          </MapView>
    
        </View>
    )
  }
}